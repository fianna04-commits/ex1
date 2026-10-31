import {photoParts,initialPhotoState,normalizePhotoState,updatePhotoLayer,applyPhotoPalette,photoCoordinates,photoCanvasSize,drawPhoto} from './photo-engine.mjs';
import {icon} from './icons.mjs';

export function initPhotoStudio({notify=()=>{}}={}){
  const $=id=>document.getElementById(id),canvas=$('photo-canvas'),image=$('reference-photo'),input=$('photo-input');
  let state=initialPhotoState(),photoURL=null,pendingURL=null,ready=false,comparing=false,history=[],editStart=null,drag=null,loadId=0,frame=0,lastPalette=null;
  const context=()=>canvas.getContext('2d');
  const snapshot=()=>JSON.stringify(state);
  function remember(before){if(before&&before!==snapshot()){history.push(before);if(history.length>40)history.shift();}$('photo-undo').disabled=!history.length;}
  function status(text,error=false,invalidInput=error){$('photo-status').textContent=text;$('photo-status').classList.toggle('error',error);if(invalidInput)input.setAttribute('aria-invalid','true');else input.removeAttribute('aria-invalid');}
  function paint(){
    if(!ready)return;
    const draw=()=>{frame=0;if(ready)drawPhoto(context(),image,state,{original:comparing,guides:$('photo-guides').checked});};
    if(typeof window.requestAnimationFrame!=='function')draw();else if(!frame)frame=window.requestAnimationFrame(draw);
  }
  function sync(){
    const layer=state.layers.find(p=>p.id===state.selected);
    document.querySelectorAll('[data-photo-part]').forEach(button=>{button.setAttribute('aria-pressed',String(button.dataset.photoPart===state.selected));});
    $('photo-enabled').checked=layer.enabled;$('photo-color').value=layer.color;
    for(const key of ['x','y','width','height','opacity','rotation','softness']){$('photo-'+key).value=String(layer[key]);$('photo-'+key+'-value').textContent=(key==='rotation'?Math.round(layer[key])+'°':Math.round(layer[key])+'%');}
    $('photo-part-title').textContent=photoParts.find(p=>p.id===state.selected).name;
    $('photo-compare').setAttribute('aria-pressed',String(comparing));$('photo-compare').textContent=comparing?'חזרה לעריכה':'השוואה למקור';
    $('photo-undo').disabled=!history.length;
    canvas.setAttribute('aria-label',`עריכה ידנית של ${photoParts.find(p=>p.id===state.selected).name}. אפשר לגרור, להשתמש בחיצי המקלדת או בכפתורי המיקום.`);
    paint();
  }
  function setReady(value){
    ready=value;$('photo-empty').hidden=value;$('photo-canvas-frame').hidden=!value;$('photo-area').hidden=!value;$('photo-settings').disabled=!value;
    for(const id of ['photo-compare','photo-export','photo-reset'])$(id).disabled=!value;
    $('photo-undo').disabled=!value||!history.length;
  }
  function clear(){
    loadId++;if(photoURL)URL.revokeObjectURL(photoURL);if(pendingURL)URL.revokeObjectURL(pendingURL);photoURL=null;pendingURL=null;ready=false;drag=null;editStart=null;
    image.onload=null;image.onerror=null;image.removeAttribute('src');input.value='';history=[];state=initialPhotoState();comparing=false;
    canvas.width=1;canvas.height=1;setReady(false);status('');sync();
  }
  function change(key,value){
    if(!ready)return;
    if(editStart===null)editStart=snapshot();
    state=updatePhotoLayer(state,state.selected,{[key]:value});comparing=false;sync();
  }
  function commitChange(){remember(editStart);editStart=null;}
  $('photo-parts').innerHTML=photoParts.map(p=>`<button type="button" class="photo-part" data-photo-part="${p.id}" aria-pressed="${p.id==='lips'}">${p.name}</button>`).join('');
  $('photo-parts').addEventListener('click',event=>{
    const button=event.target.closest('[data-photo-part]');if(!button||!ready)return;
    commitChange();const before=snapshot();state.selected=button.dataset.photoPart;
    state=updatePhotoLayer(state,state.selected,{enabled:true});comparing=false;remember(before);sync();
  });
  for(const key of ['x','y','width','height','opacity','rotation','softness','color']){
    $('photo-'+key).addEventListener('input',event=>change(key,key==='color'?event.target.value:Number(event.target.value)));
    $('photo-'+key).addEventListener('change',commitChange);
  }
  $('photo-enabled').addEventListener('change',event=>{change('enabled',event.target.checked);commitChange();});
  $('photo-guides').addEventListener('change',paint);
  $('photo-position-buttons').addEventListener('click',event=>{
    const button=event.target.closest('[data-photo-dx]');if(!button||!ready)return;
    commitChange();const before=snapshot(),layer=state.layers.find(p=>p.id===state.selected);
    state=updatePhotoLayer(state,state.selected,{x:layer.x+Number(button.dataset.photoDx),y:layer.y+Number(button.dataset.photoDy)});comparing=false;remember(before);sync();
  });
  $('photo-undo').addEventListener('click',()=>{
    if(!history.length)return;state=normalizePhotoState(JSON.parse(history.pop()));editStart=null;comparing=false;sync();status('הפעולה האחרונה בוטלה.');
  });
  $('photo-reset').addEventListener('click',()=>{
    if(!ready)return;commitChange();const before=snapshot();state=initialPhotoState();comparing=false;remember(before);sync();status('הצבעים והמיקומים חזרו להתחלה. אפשר לבטל את האיפוס.');
  });
  $('photo-compare').addEventListener('click',()=>{if(ready){commitChange();comparing=!comparing;sync();}});
  canvas.addEventListener('pointerdown',event=>{
    if(!ready||comparing||event.isPrimary===false||(event.button!==undefined&&event.button!==0))return;
    commitChange();const point=photoCoordinates(event.clientX,event.clientY,canvas.getBoundingClientRect()),layer=state.layers.find(p=>p.id===state.selected);
    const inside=Math.abs(point.x-layer.x)<=layer.width/2+2&&Math.abs(point.y-layer.y)<=layer.height/2+2;
    drag={id:event.pointerId,before:snapshot(),offsetX:inside?point.x-layer.x:0,offsetY:inside?point.y-layer.y:0};
    canvas.setPointerCapture?.(event.pointerId);
    state=updatePhotoLayer(state,state.selected,{x:point.x-drag.offsetX,y:point.y-drag.offsetY,enabled:true});sync();
  });
  canvas.addEventListener('pointermove',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const point=photoCoordinates(event.clientX,event.clientY,canvas.getBoundingClientRect());
    state=updatePhotoLayer(state,state.selected,{x:point.x-drag.offsetX,y:point.y-drag.offsetY});sync();
  });
  canvas.addEventListener('pointerup',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const before=drag.before;drag=null;remember(before);if(canvas.hasPointerCapture?.(event.pointerId))canvas.releasePointerCapture(event.pointerId);
  });
  canvas.addEventListener('pointercancel',()=>{if(drag){state=normalizePhotoState(JSON.parse(drag.before));drag=null;sync();}});
  canvas.addEventListener('keydown',event=>{
    const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[event.key];
    if(!ready||comparing||!direction)return;
    event.preventDefault();commitChange();const before=snapshot(),layer=state.layers.find(p=>p.id===state.selected),step=event.shiftKey?5:1;
    state=updatePhotoLayer(state,state.selected,{x:layer.x+direction[0]*step,y:layer.y+direction[1]*step,enabled:true});remember(before);sync();
  });
  input.addEventListener('change',()=>{
    const file=input.files?.[0];if(!file)return;
    if(!['image/jpeg','image/png','image/webp'].includes(file.type)){status('סוג הקובץ לא נתמך. בחרו תמונה מסוג JPG, PNG או WebP.',true);input.value='';return;}
    if(file.size>8*1024*1024){status('התמונה גדולה מדי. בחרו תמונה עד 8MB.',true);input.value='';return;}
    if(pendingURL)URL.revokeObjectURL(pendingURL);
    const previous=photoURL,candidate=URL.createObjectURL(file),request=++loadId;pendingURL=candidate;
    setReady(false);status('פותחים את התמונה…');
    image.onload=()=>{
      if(request!==loadId){URL.revokeObjectURL(candidate);return;}
      const width=image.naturalWidth,height=image.naturalHeight;
      if(!width||!height||width*height>40000000){URL.revokeObjectURL(candidate);clear();status('ממדי התמונה גדולים מדי או לא תקינים. בחרו תמונה קטנה יותר.',true);return;}
      const size=photoCanvasSize(width,height,1000);canvas.width=size.width;canvas.height=size.height;
      if(previous)URL.revokeObjectURL(previous);photoURL=candidate;pendingURL=null;state=lastPalette?applyPhotoPalette(initialPhotoState(),lastPalette):initialPhotoState();history=[];editStart=null;comparing=false;
      setReady(true);sync();status('התמונה מוכנה. התאימו את המסגרת הכחולה לשפתיים, או בחרו אזור אחר. התמונה אינה נשלחת לשרת.');
    };
    image.onerror=()=>{if(request!==loadId){URL.revokeObjectURL(candidate);return;}URL.revokeObjectURL(candidate);clear();status('לא הצלחנו לפתוח את התמונה. נסו קובץ JPG, PNG או WebP אחר.',true);};
    image.src=candidate;
  });
  $('remove-photo').addEventListener('click',clear);
  $('photo-export').addEventListener('click',()=>{
    if(!ready)return;commitChange();const button=$('photo-export'),request=loadId;button.disabled=true;button.textContent='מכינים תמונה…';
    try{
      const output=document.createElement('canvas'),size=photoCanvasSize(image.naturalWidth,image.naturalHeight);output.width=size.width;output.height=size.height;drawPhoto(output.getContext('2d'),image,state);
      output.toBlob(blob=>{
        button.disabled=!ready;button.innerHTML=icon('download')+'הורדת התמונה';
        if(request!==loadId||!ready)return;
        if(!blob){status('לא הצלחנו להכין את ההורדה. נסו שוב.',true,false);return;}
        const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download='my-vibe-photo.png';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status('התמונה מוכנה להורדה למחשב שלך.');
      },'image/png');
    }catch{button.disabled=!ready;button.innerHTML=icon('download')+'הורדת התמונה';status('לא הצלחנו להכין את ההורדה. נסו שוב.',true,false);}
  });
  window.addEventListener('pagehide',()=>{loadId++;if(photoURL)URL.revokeObjectURL(photoURL);if(pendingURL)URL.revokeObjectURL(pendingURL);photoURL=null;pendingURL=null;});
  setReady(false);sync();
  return {applyLook(look){lastPalette={lip:look.lip,blush:look.blush,shadow:look.shadow,intensity:look.intensity};commitChange();const before=snapshot();state=applyPhotoPalette(state,lastPalette);comparing=false;remember(before);sync();if(ready)status('צבעי הלוק הועתקו. אפשר להפעיל כל אזור ולמקם אותו על התמונה.');else notify('הוסיפו תמונה כדי לנסות עליה את צבעי הלוק.');}};
}
