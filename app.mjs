import {vibes,occasions,skinTones,eyeColors,hairColors,defaults,trends,normalize,recommend,baseLook,cleanLook,portrait} from './engine.mjs';

const $=id=>document.getElementById(id);
const form=$('profile-form');
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const storageKey='vibe.saved.v1';
const maxSaved=12;
let profile={...defaults},step=0,looks=[],activeLook=null,editorProfile={...defaults},comparing=false,photoURL=null,toastTimer,resultKey='';
let saved=readSaved();

function readSaved(){
  try{
    const data=JSON.parse(localStorage.getItem(storageKey)||'[]');
    if(!Array.isArray(data))return [];
    return data.slice(0,maxSaved).filter(s=>s&&typeof s==='object'&&typeof s.id==='string'&&s.profile&&s.look).map(s=>({id:s.id.slice(0,80),name:String(s.name||'הלוק שלי').slice(0,60),profile:normalize(s.profile),look:cleanLook(s.look,s.profile)}));
  }catch{return [];}
}
function persist(){
  try{localStorage.setItem(storageKey,JSON.stringify(saved));return true;}
  catch{toast('לא ניתן לשמור בדפדפן כרגע. אפשר להוריד את האיור.');return false;}
}
function toast(text){clearTimeout(toastTimer);$('toast').textContent=text;$('toast').classList.add('visible');toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),3300);}
function scrollTo(id){$(id).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
function vibeOption(v){return `<button type="button" class="vibe-option" data-vibe="${v.id}" aria-pressed="${profile.vibe===v.id}" style="--tile:${v.bg}"><span class="symbol" aria-hidden="true">${v.symbol}</span><strong>${v.name}</strong><small dir="ltr">${v.en}</small></button>`;}
function colorButtons(options,key){return options.map((item,i)=>`<button type="button" class="swatch" data-color-key="${key}" data-color-index="${i}" aria-label="${item.name}" title="${item.name}" aria-pressed="${profile[key]===i}" style="--swatch:${item.color}"></button>`).join('');}
function buildOptions(){
  $('vibe-options').innerHTML=vibes.map(vibeOption).join('');
  $('occasion-options').innerHTML=occasions.map(o=>`<button type="button" class="choice" data-occasion="${o.id}" aria-pressed="${profile.occasion===o.id}"><span aria-hidden="true">${o.symbol}</span>${o.name}</button>`).join('');
  $('skin-options').innerHTML=colorButtons(skinTones,'skin');
  $('eye-options').innerHTML=colorButtons(eyeColors,'eye');
  $('hair-options').innerHTML=colorButtons(hairColors,'hair');
}
function readForm(){
  const values=Object.fromEntries(new FormData(form));
  return normalize({...profile,...values,keepLength:form.elements.namedItem('keepLength').checked,glasses:form.elements.namedItem('glasses').checked,beard:form.elements.namedItem('beard').checked});
}
function writeForm(){
  for(const [key,value]of Object.entries(profile)){
    const field=form.elements.namedItem(key);
    if(!field)continue;
    if(field.type==='checkbox')field.checked=value;else field.value=String(value);
  }
  buildOptions();updatePreview();
}
function updatePreview(){
  if(JSON.stringify(profile)!==resultKey)$('results').hidden=true;
  const look=recommend(profile)[0];
  $('live-portrait').innerHTML=portrait(profile,look,'live');
  $('preview-vibe').textContent=vibes.find(v=>v.id===profile.vibe).en;
  $('boldness-output').textContent=['נשארים קרוב','קצת טוויסט','פתוחים להפתעות'][profile.boldness];
}
function setStep(value,focus=false){
  step=Math.min(2,Math.max(0,value));
  document.querySelectorAll('[data-step]').forEach(button=>{
    const selected=Number(button.dataset.step)===step;
    button.setAttribute('aria-selected',String(selected));button.tabIndex=selected?0:-1;
    $('step-'+button.dataset.step).hidden=!selected;
  });
  $('previous').hidden=step===0;
  $('step-indicator').textContent=`שלב ${step+1} מתוך 3`;
  $('next').innerHTML=step===2?'לגלות את הלוקים שלי <span aria-hidden="true">✦</span>':'ממשיכים <span aria-hidden="true">←</span>';
  if(focus)$('step-tab-'+step).focus({preventScroll:true});
}
function favoriteKey(p,look){return JSON.stringify([normalize(p),cleanLook(look,p)]);}
function isSaved(p,look){const key=favoriteKey(p,look);return saved.some(s=>favoriteKey(s.profile,s.look)===key);}
function updateSavedUI(){
  $('saved-count').textContent=String(saved.length);
  document.querySelectorAll('[data-save-look]').forEach(button=>{
    const look=looks[Number(button.dataset.saveLook)];
    const exists=look&&isSaved(profile,look);
    button.setAttribute('aria-pressed',String(!!exists));
    button.textContent=exists?'♥':'♡';
    button.setAttribute('aria-label',`${exists?'הסרת':'שמירת'} ${look?.name||'הלוק'} ${exists?'מהאהובים':'באהובים'}`);
  });
}
function saveLook(p,look,name,toggle=false){
  const key=favoriteKey(p,look),index=saved.findIndex(s=>favoriteKey(s.profile,s.look)===key);
  const previous=[...saved];
  if(index>=0){if(!toggle){toast('הלוק הזה כבר באהובים שלך.');return;}saved.splice(index,1);}
  else{
    if(saved.length>=maxSaved){toast(`אפשר לשמור עד ${maxSaved} לוקים. פנו מקום באהובים כדי לשמור חדש.`);return;}
    saved.unshift({id:crypto.randomUUID(),name:String(name).slice(0,60),profile:normalize(p),look:cleanLook(look,p)});
  }
  if(!persist())saved=previous;
  else toast(index>=0?'הלוק הוסר מהאהובים.':'נשמר באהובים שלך ♡');
  updateSavedUI();
}
function lookCard(look,i){
  const noMakeup=profile.makeup==='none';
  return `<article class="look-card"><div class="look-art" style="--look-bg:${look.bg}">${portrait(profile,look,'look'+i)}<span class="look-kicker" dir="ltr">${look.en}</span><button class="heart" data-save-look="${i}" aria-pressed="false" aria-label="שמירת ${escape(look.name)} באהובים">♡</button></div><div class="look-copy"><h3>${escape(look.name)}</h3><p class="muted">${escape(look.description)}</p><div class="tags"><span>כ־${look.minutes} דקות</span><span>${noMakeup?'ללא איפור':profile.makeup==='light'?'איפור עדין':'איפור לבחירתך'}</span><span>${profile.keepLength?'שומרים על האורך':'פתוחים לשינוי'}</span></div><div class="look-palette" aria-label="פלטת הצבעים של הלוק">${[look.shirt,look.hairColor,...(!noMakeup?[look.lip,look.blush]:[])].map(color=>`<span style="background:${color}" title="${color}"></span>`).join('')}</div><div class="look-details"><p><strong>השיער:</strong> ${escape(look.hairText)}</p><p><strong>${noMakeup?'הפוקוס':'האיפור'}:</strong> ${escape(look.makeupText)}</p><p><strong>הלבוש:</strong> ${escape(look.outfit)}</p></div><details><summary>למה הצענו את הכיוון הזה?</summary><p>${escape(look.reason)}</p><p>${escape(look.budgetTip)}</p></details><a class="trend-link" href="${look.trend.url}" target="_blank" rel="noopener noreferrer">השראה: ${look.trend.name} · מקור ↗</a><button class="button dark" data-select-look="${i}">לנסות ולערבב <span aria-hidden="true">↙</span></button></div></article>`;
}
function renderResults(shouldScroll=true){
  profile=readForm();looks=recommend(profile);
  resultKey=JSON.stringify(profile);
  $('look-cards').innerHTML=looks.map(lookCard).join('');
  $('results-summary').textContent=`${vibes.find(v=>v.id===profile.vibe).name} · ${occasions.find(o=>o.id===profile.occasion).name} · לפי הבחירות שלך, עם מקום לאלתור.`;
  $('results').hidden=false;selectLook(0,false);updateSavedUI();
  if(shouldScroll)scrollTo('results');
}
function editorFields(){
  $('edit-hair').value=activeLook.hairStyle;
  $('edit-texture').value=activeLook.texture;
  $('edit-hair-color').value=activeLook.hairColor;
  $('edit-lip').value=activeLook.lip;
  $('edit-blush').value=activeLook.blush;
  $('edit-shirt').value=activeLook.shirt;
  $('edit-intensity').value=String(activeLook.intensity);
  $('edit-title').textContent=activeLook.name||'הטאץ׳ שלך.';
  comparing=false;renderEditor();
}
function selectLook(index,shouldScroll=true){
  activeLook={...looks[index]};editorProfile={...profile};editorFields();
  if(shouldScroll)scrollTo('playground');
}
function renderEditor(){
  $('edit-portrait').innerHTML=portrait(editorProfile,comparing?baseLook(editorProfile):activeLook,'edit');
  $('compare').setAttribute('aria-pressed',String(comparing));
  $('compare').textContent=comparing?'חזרה ללוק שבחרתי':'הצגת הבסיס';
  const intensity=activeLook.intensity;
  $('intensity-output').textContent=intensity===0?'ללא איפור':intensity<45?'עדין':intensity<75?'מורגש':'דומיננטי';
}
function renderSaved(){
  $('saved-list').innerHTML=saved.length?saved.map(s=>`<article class="saved-item"><div class="saved-art">${portrait(s.profile,s.look,'saved')}</div><div class="saved-body"><h3>${escape(s.name)}</h3><div class="saved-buttons"><button class="text-button" data-open-saved="${escape(s.id)}">לפתוח במראה ↗</button><button class="text-button" data-remove-saved="${escape(s.id)}">הסרה</button></div></div></article>`).join(''):'<div class="saved-empty"><span aria-hidden="true">♡</span><p>המקום ללוקים שעושים לך את זה.</p><p class="muted">לחיצה על הלב ליד לוק תשמור אותו כאן.</p></div>';
}
function loadSaved(id){
  const item=saved.find(s=>s.id===id);if(!item)return;
  profile=normalize(item.profile);writeForm();renderResults(false);
  editorProfile={...profile};activeLook={...cleanLook(item.look,profile),name:item.name};editorFields();
  $('saved-dialog').close();scrollTo('playground');toast('הלוק השמור פתוח. אפשר להמשיך לשחק.');
}
function renderTrends(){
  $('trend-cards').innerHTML=trends.map((trend,i)=>{
    const p=normalize({...defaults,skin:[2,3,0,4][i],eye:i%4,texture:['wavy','curly','straight','coily'][i]});
    const look={...baseLook(p),hairStyle:trend.style,hairColor:trend.hair,lip:trend.lip,blush:i===1?'#ce7d80':'#c98883',shadow:i===2?'#9cabc6':'#9b7b68',intensity:55,shirt:['#f6efe3','#7f8e67','#3d4557','#b78b67'][i],accessory:i===2};
    return `<article class="trend-card"><div class="trend-visual" style="--trend-bg:${trend.bg}">${portrait(p,look,'trend'+i)}<span class="trend-category" dir="ltr">${trend.category}</span></div><h3>${trend.name}</h3><p>${trend.description}</p><button class="text-button" data-trend="${trend.id}">לקחת את הווייב הזה ↗</button><a class="source-link" href="${trend.url}" target="_blank" rel="noopener noreferrer">${trend.source} · למקור ↗</a></article>`;
  }).join('');
}
function removePhoto(){
  if(photoURL){URL.revokeObjectURL(photoURL);photoURL=null;}
  $('reference-photo').removeAttribute('src');$('photo-area').hidden=true;$('photo-input').value='';$('photo-status').textContent='';
}

form.addEventListener('submit',event=>event.preventDefault());
form.addEventListener('input',event=>{if(event.target.type==='file')return;profile=readForm();updatePreview();});
form.addEventListener('change',event=>{if(event.target.type==='file')return;profile=readForm();updatePreview();});
form.addEventListener('click',event=>{
  const vibe=event.target.closest('[data-vibe]');
  const occasion=event.target.closest('[data-occasion]');
  const color=event.target.closest('[data-color-key]');
  if(vibe){profile.vibe=vibe.dataset.vibe;document.querySelectorAll('[data-vibe]').forEach(button=>button.setAttribute('aria-pressed',String(button===vibe)));}
  if(occasion){profile.occasion=occasion.dataset.occasion;document.querySelectorAll('[data-occasion]').forEach(button=>button.setAttribute('aria-pressed',String(button===occasion)));}
  if(color){profile[color.dataset.colorKey]=Number(color.dataset.colorIndex);document.querySelectorAll(`[data-color-key="${color.dataset.colorKey}"]`).forEach(button=>button.setAttribute('aria-pressed',String(button===color)));}
  if(vibe||occasion||color)updatePreview();
});
document.querySelectorAll('[data-step]').forEach(button=>{
  button.addEventListener('click',()=>setStep(Number(button.dataset.step)));
  button.addEventListener('keydown',event=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return;
    event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?2:event.key==='ArrowLeft'?(step+1)%3:(step+2)%3;setStep(next,true);
  });
});
$('next').addEventListener('click',()=>{if(step<2)setStep(step+1,true);else renderResults();});
$('previous').addEventListener('click',()=>setStep(step-1,true));
$('edit-profile').addEventListener('click',()=>{setStep(0);scrollTo('builder');});
$('look-cards').addEventListener('click',event=>{
  const select=event.target.closest('[data-select-look]'),save=event.target.closest('[data-save-look]');
  if(select)selectLook(Number(select.dataset.selectLook));
  if(save){const look=looks[Number(save.dataset.saveLook)];saveLook(profile,look,look.name,true);}
});
const editorMap={'edit-hair':'hairStyle','edit-texture':'texture','edit-hair-color':'hairColor','edit-lip':'lip','edit-blush':'blush','edit-shirt':'shirt','edit-intensity':'intensity'};
for(const [id,key]of Object.entries(editorMap))$(id).addEventListener('input',event=>{
  if(!activeLook)return;
  activeLook[key]=key==='intensity'?Number(event.target.value):event.target.value;
  if(['lip','blush'].includes(key)&&activeLook.intensity===0){activeLook.intensity=35;$('edit-intensity').value='35';}
  comparing=false;renderEditor();
});
$('compare').addEventListener('click',()=>{comparing=!comparing;renderEditor();});
$('save-custom').addEventListener('click',()=>{if(activeLook)saveLook(editorProfile,activeLook,(activeLook.name||'הלוק שלי')+' · הטאץ׳ שלי');});
$('download-look').addEventListener('click',()=>{
  if(!activeLook)return;
  const svg=portrait(editorProfile,activeLook,'download');
  const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'}));
  const link=document.createElement('a');link.href=url;link.download='my-vibe.svg';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('האיור מוכן להורדה.');
});
$('open-saved').addEventListener('click',()=>{renderSaved();$('saved-dialog').showModal();});
$('close-saved').addEventListener('click',()=>$('saved-dialog').close());
$('saved-list').addEventListener('click',event=>{
  const open=event.target.closest('[data-open-saved]'),remove=event.target.closest('[data-remove-saved]');
  if(open)loadSaved(open.dataset.openSaved);
  if(remove){const previous=[...saved];saved=saved.filter(s=>s.id!==remove.dataset.removeSaved);if(!persist())saved=previous;renderSaved();updateSavedUI();}
});
$('trend-cards').addEventListener('click',event=>{
  const button=event.target.closest('[data-trend]');if(!button)return;
  const trend=trends.find(t=>t.id===button.dataset.trend);profile.vibe=trend.vibe;writeForm();setStep(0);scrollTo('builder');toast('הווייב נבחר. עכשיו מתאימים אותו לתוכניות שלך.');
});
$('photo-input').addEventListener('change',event=>{
  const file=event.target.files?.[0];if(!file)return;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)){toast('אפשר לבחור תמונה מסוג JPG, PNG או WebP.');event.target.value='';return;}
  if(file.size>8*1024*1024){toast('התמונה גדולה מדי. בחרו תמונה עד 8MB.');event.target.value='';return;}
  if(photoURL)URL.revokeObjectURL(photoURL);
  photoURL=URL.createObjectURL(file);
  $('reference-photo').onload=()=>{$('photo-area').hidden=false;$('photo-status').textContent='התמונה מוצגת רק בדפדפן שלך. היא אינה נשלחת לשרת.';};
  $('reference-photo').onerror=()=>{removePhoto();toast('לא הצלחנו לפתוח את התמונה. נסו קובץ אחר.');};
  $('reference-photo').src=photoURL;
});
$('remove-photo').addEventListener('click',removePhoto);
window.addEventListener('pagehide',()=>{if(photoURL)URL.revokeObjectURL(photoURL);});
window.addEventListener('storage',event=>{if(event.key===storageKey){saved=readSaved();updateSavedUI();if($('saved-dialog').open)renderSaved();}});

const heroA=normalize({...defaults,vibe:'street',skin:2,eye:2,length:'short',texture:'wavy'});
const heroB=normalize({...defaults,vibe:'romantic',skin:4,eye:0,length:'long',texture:'curly'});
$('hero-portrait-front').innerHTML=portrait(heroA,{...baseLook(heroA),shirt:'#d8fa70',lip:'#a85f6a',blush:'#d4837b',intensity:40,accessory:true},'heroA');
$('hero-portrait-back').innerHTML=portrait(heroB,{...baseLook(heroB),shirt:'#f8f3e9',lip:'#b47872',blush:'#cc806b',intensity:45},'heroB');
writeForm();setStep(0);renderTrends();updateSavedUI();
