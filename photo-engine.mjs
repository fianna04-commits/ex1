// Browser-local, manual color overlays. No face detection, network or storage.
export const photoParts=[
  {id:'lips',name:'שפתיים',kind:'lips',x:50,y:65,width:18,height:5,color:'#ad5269',opacity:45,softness:15,rotation:0,enabled:true},
  {id:'blushLeft',name:'סומק בצד שמאל',kind:'blush',x:37,y:55,width:15,height:9,color:'#ce7e80',opacity:35,softness:70,rotation:-12,enabled:false},
  {id:'blushRight',name:'סומק בצד ימין',kind:'blush',x:63,y:55,width:15,height:9,color:'#ce7e80',opacity:35,softness:70,rotation:12,enabled:false},
  {id:'eyeLeft',name:'צללית בצד שמאל',kind:'eye',x:42,y:46,width:12,height:4,color:'#94758d',opacity:35,softness:45,rotation:-5,enabled:false},
  {id:'eyeRight',name:'צללית בצד ימין',kind:'eye',x:58,y:46,width:12,height:4,color:'#94758d',opacity:35,softness:45,rotation:5,enabled:false}
];
function number(value,fallback,min,max){const n=Number(value);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):fallback;}
export function initialPhotoState(){return {selected:'lips',layers:photoParts.map(p=>({...p}))};}
export function normalizePhotoState(input){
  const layers=Array.isArray(input?.layers)?input.layers:[];
  return {selected:photoParts.some(p=>p.id===input?.selected)?input.selected:'lips',layers:photoParts.map(base=>{
    const candidate=layers.find(layer=>layer?.id===base.id)||{};
    return {...base,x:number(candidate.x,base.x,0,100),y:number(candidate.y,base.y,0,100),width:number(candidate.width,base.width,1,100),height:number(candidate.height,base.height,1,60),rotation:number(candidate.rotation,base.rotation,-90,90),opacity:number(candidate.opacity,base.opacity,0,100),softness:number(candidate.softness,base.softness,0,100),color:/^#[a-f0-9]{6}$/i.test(candidate.color||'')?candidate.color:base.color,enabled:typeof candidate.enabled==='boolean'?candidate.enabled:base.enabled};
  })};
}
export function updatePhotoLayer(input,id,patch){
  const state=normalizePhotoState(input);
  return normalizePhotoState({...state,layers:state.layers.map(layer=>layer.id===id?{...layer,...patch,id:layer.id,kind:layer.kind}:layer)});
}
export function applyPhotoPalette(input,look={}){
  const state=normalizePhotoState(input);
  for(const part of state.layers){const key=part.kind==='lips'?'lip':part.kind==='blush'?'blush':'shadow';if(/^#[a-f0-9]{6}$/i.test(look[key]||''))part.color=look[key];if(look.intensity===0)part.enabled=false;}
  return state;
}
function rgba(color,alpha){const n=parseInt(color.slice(1),16);return `rgba(${n>>16},${(n>>8)&255},${n&255},${alpha})`;}
export function photoCoordinates(clientX,clientY,rect){
  return {x:Math.max(0,Math.min(100,(clientX-rect.left)/Math.max(1,rect.width)*100)),y:Math.max(0,Math.min(100,(clientY-rect.top)/Math.max(1,rect.height)*100))};
}
export function photoCanvasSize(width,height,maxEdge=1600){
  if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0)throw new Error('Invalid photo size');
  const scale=Math.min(1,maxEdge/Math.max(width,height));return {width:Math.max(1,Math.round(width*scale)),height:Math.max(1,Math.round(height*scale))};
}
export function drawPhoto(ctx,image,input,{original=false,guides=false}={}){
  const state=normalizePhotoState(input),{width,height}=ctx.canvas;
  ctx.save();ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,width,height);ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.filter='none';ctx.drawImage(image,0,0,width,height);ctx.restore();
  if(original)return;
  for(const layer of state.layers){
    if(!layer.enabled||!layer.opacity)continue;
    const w=layer.width/100*width,h=layer.height/100*height;
    ctx.save();ctx.translate(layer.x/100*width,layer.y/100*height);ctx.rotate(layer.rotation*Math.PI/180);ctx.globalAlpha=layer.opacity/100;ctx.globalCompositeOperation='multiply';
    if(layer.kind==='blush'){
      ctx.scale(w/2,h/2);const g=ctx.createRadialGradient(0,0,0,0,0,1);g.addColorStop(0,rgba(layer.color,.9));g.addColorStop(Math.max(.05,1-layer.softness/100),rgba(layer.color,.6));g.addColorStop(1,rgba(layer.color,0));ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,1,0,Math.PI*2);ctx.fill();
    }else{
      ctx.filter=`blur(${Math.max(0,layer.softness/100*Math.min(w,h)*.14)}px)`;
      ctx.scale(w,h);ctx.fillStyle=layer.color;ctx.beginPath();
      if(layer.kind==='lips'){
        ctx.moveTo(-.5,0);ctx.bezierCurveTo(-.32,-.08,-.18,-.55,0,-.22);ctx.bezierCurveTo(.18,-.55,.32,-.08,.5,0);ctx.bezierCurveTo(.28,.45,-.28,.45,-.5,0);
      }else{
        ctx.moveTo(-.5,.25);ctx.bezierCurveTo(-.3,-.6,.3,-.6,.5,.25);ctx.bezierCurveTo(.15,0,-.15,0,-.5,.25);
      }
      ctx.closePath();ctx.fill();
    }
    ctx.restore();
  }
  if(guides){
    const layer=state.layers.find(p=>p.id===state.selected),w=layer.width/100*width,h=layer.height/100*height;
    ctx.save();ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;ctx.filter='none';ctx.translate(layer.x/100*width,layer.y/100*height);ctx.rotate(layer.rotation*Math.PI/180);ctx.strokeStyle='#3657d6';ctx.lineWidth=Math.max(1.5,width/700);ctx.setLineDash([width/150,width/210]);ctx.strokeRect(-w/2,-h/2,w,h);ctx.setLineDash([]);ctx.fillStyle='white';ctx.beginPath();ctx.arc(0,0,Math.max(3,width/220),0,Math.PI*2);ctx.fill();ctx.stroke();ctx.restore();
  }
}
