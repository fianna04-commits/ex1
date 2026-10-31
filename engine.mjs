export const vibes = [
  {id:'minimal',name:'נקי ומדויק',en:'SOFT MINIMAL',symbol:'◒',bg:'#e8e9df'},
  {id:'street',name:'סטריט וייב',en:'OFF DUTY',symbol:'↗',bg:'#dce5fc'},
  {id:'romantic',name:'רך ורומנטי',en:'SOFT ENERGY',symbol:'❋',bg:'#f5dce3'},
  {id:'glam',name:'קצת גלאם',en:'AFTER HOURS',symbol:'✦',bg:'#e4dcf5'},
  {id:'creative',name:'מחוץ לקווים',en:'COLOR OUTSIDE',symbol:'〰',bg:'#e4f0ba'},
  {id:'natural',name:'טבעי ומשוחרר',en:'EASY DOES IT',symbol:'☼',bg:'#f2e1c9'}
];
export const occasions = [
  {id:'everyday',name:'יום רגיל, אנרגיה חדשה',symbol:'☀'},
  {id:'work',name:'לימודים / עבודה',symbol:'▣'},
  {id:'date',name:'דייט',symbol:'♡'},
  {id:'party',name:'מסיבה',symbol:'✦'},
  {id:'event',name:'אירוע חגיגי',symbol:'✧'},
  {id:'festival',name:'הופעה / פסטיבל',symbol:'♫'}
];
export const skinTones=[{color:'#f5d9c5',name:'בהיר מאוד'},{color:'#e5b89a',name:'בהיר'},{color:'#c8916e',name:'בינוני'},{color:'#ac7756',name:'שזוף'},{color:'#84563f',name:'כהה'},{color:'#563728',name:'עמוק'}];
export const eyeColors=[{color:'#684632',name:'חום'},{color:'#a18a4c',name:'דבש'},{color:'#65876b',name:'ירוק'},{color:'#6b94ac',name:'כחול'},{color:'#7d8589',name:'אפור'}];
export const hairColors=[{color:'#24201e',name:'שחור'},{color:'#4e352a',name:'חום כהה'},{color:'#856044',name:'חום בהיר'},{color:'#d4b57a',name:'בלונד'},{color:'#ae603c',name:'נחושת'},{color:'#b9b8b2',name:'אפור / כסוף'}];
export const defaults={vibe:'minimal',occasion:'everyday',boldness:1,time:15,makeup:'light',budget:'closet',maintenance:'low',face:'oval',undertone:'neutral',skin:1,eye:0,hair:1,texture:'wavy',length:'bob',keepLength:true,glasses:false,beard:false};
export const trends=[
  {id:'soft-bob',name:'בוב עם תנועה',category:'HAIR',description:'צורה רכה, קצוות בתנועה ומרקם טבעי. אפשר לשאול מהטרנד גם בלי לקצר.',source:'Pinterest · אוקטובר 2026',url:'https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/',vibe:'romantic',bg:'#f4d6de',style:'bob',hair:'#4e352a',lip:'#b36b76'},
  {id:'rosy',name:'סומק שעושה מצב רוח',category:'MAKEUP',description:'ורוד מאובק, אפרסק או טרקוטה — נגיעה של צבע שאפשר לבנות בהדרגה.',source:'Pinterest · אוקטובר 2026',url:'https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/',vibe:'natural',bg:'#e8eccf',style:'long',hair:'#856044',lip:'#c57b70'},
  {id:'frost',name:'נקודת אור מטאלית',category:'MAKEUP',description:'צללית קרירה או פרט כסוף קטן למי שרוצה טוויסט מנצנץ בלוק של הערב.',source:'Pinterest · אוקטובר 2026',url:'https://newsroom.pinterest.com/en-gb/news/beauty-trend-report-2026/',vibe:'glam',bg:'#dce6f6',style:'short',hair:'#24201e',lip:'#94556d'},
  {id:'mono',name:'אותו גוון, עומק חדש',category:'HAIR COLOR',description:'גוונים קרובים מאותה משפחה יוצרים מראה שיער הרמוני עם ניגודיות עדינה.',source:'Wella · קולקציית 2026',url:'https://us.wella.professionalstore.com/en-US/our-brands/wella-professionals/monochromatic',vibe:'minimal',bg:'#e8dfd1',style:'long',hair:'#6d4632',lip:'#a56a59'}
];
export function normalize(input={}){
  const p={...defaults};
  const enums={vibe:vibes.map(x=>x.id),occasion:occasions.map(x=>x.id),makeup:['none','light','full'],budget:['closet','small','flex'],maintenance:['low','medium','high'],face:['oval','round','square','heart','long','unknown'],undertone:['neutral','warm','cool'],texture:['straight','wavy','curly','coily'],length:['short','bob','long','shaved']};
  for(const [key,values] of Object.entries(enums))if(values.includes(input[key]))p[key]=input[key];
  for(const [key,max]of [['skin',5],['eye',4],['hair',5],['boldness',2]]){const n=Number(input[key]);if(Number.isInteger(n)&&n>=0&&n<=max)p[key]=n;}
  if([5,15,30].includes(Number(input.time)))p.time=Number(input.time);
  for(const key of ['keepLength','glasses','beard'])if(typeof input[key]==='boolean')p[key]=input[key];
  return p;
}
const hex=value=>/^#[0-9a-f]{6}$/i.test(value||'')?value:'#4e352a';
const hairNames={short:'קצר עם מרקם',bob:'בוב רך',long:'שכבות ארוכות',shaved:'קצוץ / ללא שיער'};
const textureNames={straight:'חלק',wavy:'גלי',curly:'מתולתל',coily:'בתלתלים צפופים'};
const palettes={warm:{lip:'#b46a50',blush:'#d58a69',shadow:'#9c774e',colors:['#b66b4c','#8b985b','#f2dfb3','#493a2c']},cool:{lip:'#a65879',blush:'#d18ba8',shadow:'#8c7898',colors:['#925c7a','#657cad','#e4dce9','#303c50']},neutral:{lip:'#b36c6e',blush:'#d48c85',shadow:'#99816a',colors:['#a56d6c','#6f826c','#e8dfcc','#333c45']}};
const names={minimal:['פחות, אבל בול','נקי עם נוכחות','טוויסט קטן'],street:['אוף דיוטי','סטריט עם אמירה','רגע של צבע'],romantic:['סופט אנרג׳י','רומנטיקה מודרנית','רוך עם טוויסט'],glam:['גלאם בקטנה','אחרי שעות','כניסה עם נוכחות'],creative:['מחוץ לקווים','מיין קארקטר','הטוויסט שלך'],natural:['טבעי על מלא','קליל עם אופי','שמש בכיס']};
export function baseLook(input={}){const p=normalize(input);return {hairStyle:p.length,texture:p.texture,hairColor:hairColors[p.hair].color,lip:'#a66b62',blush:'#c98778',shadow:'#a28472',shirt:'#d5d5c7',intensity:0,accessory:false};}
export function recommend(input){
  const p=normalize(input),palette=palettes[p.undertone],vibe=vibes.find(v=>v.id===p.vibe),occasion=occasions.find(o=>o.id===p.occasion);
  const formal=['party','event','date'].includes(p.occasion);
  const faceTip={oval:'אפשר לשחק בשביל ובנפח ולבחור את המסגרת שאוהבים.',round:'אם בא לך תחושה אנכית יותר, אפשר לנסות שביל צד ונפח בחלק העליון.',square:'אם בא לך מסגרת רכה יותר, אפשר לנסות קווצות חופשיות ליד הפנים.',heart:'קצוות עם תנועה באזור הלסת הם אפשרות למסגרת רחבה יותר למטה.',long:'אם בא לך נפח לצדדים, אפשר לנסות גלים או שביל צד.',unknown:'אפשר להשוות בין מסגרות שונות באיור ולבחור לפי ההעדפה שלך.'}[p.face];
  const toneReason=p.undertone==='neutral'?'בחרנו צבעים מאוזנים כדי לאפשר ניסוי בלי לקבע תת־גוון.':p.undertone==='warm'?'גווני אפרסק, זית וחמרה נבחרו לפי תת־הגוון החם שבחרת.':'ורוד מעושן וגוונים קרירים נבחרו לפי תת־הגוון הקר שבחרת.';
  return [0,1,2].map(i=>{
    const allowedCut=!p.keepLength&&p.budget!=='closet'&&p.maintenance!=='low';
    const alternate=p.face==='long'?'bob':p.face==='round'?'long':'short';
    const hairStyle=allowedCut&&i===2?alternate:p.length;
    const canColor=p.budget==='flex'&&p.maintenance!=='low'&&p.boldness===2&&i===2&&p.length!=='shaved';
    const hairColor=canColor?(p.undertone==='cool'?'#69404d':'#9b583c'):hairColors[p.hair].color;
    const minutes=p.time===5?5:p.time===15?[8,15,12][i]:[12,25,20][i];
    const intensity=p.makeup==='none'?0:Math.min(90,(p.makeup==='light'?[25,40,35][i]:p.time===5?35:[50,75,65][i])+(p.skin>=4?8:0));
    const shirt=p.vibe==='street'?['#313c62','#799c6e','#adc9ec'][i]:p.vibe==='creative'?['#7889d7','#c4dd67','#dc9586'][i]:p.vibe==='glam'?['#373b43','#554157','#8b556b'][i]:palette.colors[(p.skin>=4&&i===0)?2:[1,3,0][i]];
    const lip= i===1&&formal?(p.undertone==='warm'?'#a34335':'#8b3f61'):palette.lip;
    let shadow=palette.shadow;
    if(p.eye===2)shadow='#946579';
    if(p.eye===3)shadow='#b38a5c';
    if(p.eye===1)shadow='#8b7561';
    if(p.eye===4)shadow='#9c7b93';
    if(p.vibe==='glam'&&i===2)shadow='#9eabc3';
    const hairText=hairStyle==='shaved'?'קו נקי וטבעי, בלי צורך לשנות את האורך.':p.budget==='closet'?`סידור ${textureNames[p.texture]} באורך הקיים, עם ${i===0?'שביל טבעי':i===1?'שביל צד':'קווצות חופשיות סביב הפנים'}.`:`${hairNames[hairStyle]} במרקם ${textureNames[p.texture]}.${allowedCut&&i===2?' אפשרות לקיצור, בהתאם לנכונות שלך לשינוי.':' שומרים על האורך שבחרת.'}`;
    const makeupText=p.makeup==='none'?'הלוק ללא איפור. הצבע והאופי מגיעים מהשיער, הלבוש והאביזרים.':p.time===5?'מוקד צבע אחד: סומק או שפתון, לפי מה שכבר יש לך.':i===1&&formal?'שפתיים מודגשות, סומק עדין וקו עיניים רך.':'נגיעה מדורגת של סומק, שפתיים בגוון הרמוני וצללית רכה.';
    const outfit=p.vibe==='street'?'טי־שירט או גופייה בגזרה נינוחה עם שכבה פתוחה.':formal?'פריט חלק בגוון עמוק, עם אביזר אחד שמוסיף נוכחות.':'חולצה או פריט עליון בצבע מהפלטה, עם הבסיס הנוח שלך.';
    const budgetTip=p.budget==='closet'?'הכיוון נבנה לשימוש במה שכבר יש: ללא צביעה, קיצור או קנייה נדרשת.':p.budget==='small'?'אם רוצים תוספת, בוחרים אביזר אחד או מוצר צבע אחד.':'אפשר להשקיע בפריט מוביל או בייעוץ אצל מעצב שיער; אין כאן אומדן מחיר.';
    const trend=p.vibe==='glam'?trends[2]:p.vibe==='romantic'?trends[0]:p.vibe==='natural'?trends[1]:trends[3];
    return {id:`${p.vibe}-${i}`,name:names[p.vibe][i],en:['EVERYDAY ENERGY','OCCASION EDIT','YOUR LITTLE TWIST'][i],bg:[vibe.bg,'#e2e9d8','#f0dbe2'][i],description:[`הסגנון שבחרת, בגרסה קלילה ל${occasion.name}.`,`נוכחות קצת יותר מורגשת, בלי לאבד את הווייב שלך.`,`פרט אחד שפותח כיוון חדש — במידת השינוי שבחרת.`][i],minutes,hairStyle,texture:p.texture,hairColor,lip,blush:palette.blush,shadow,shirt,intensity,accessory:i>0&&p.boldness>0,hairText,makeupText,outfit,budgetTip,reason:[toneReason,faceTip,`מרקם ${textureNames[p.texture]}, ${minutes} דקות להתארגנות ו${p.maintenance==='low'?'תחזוקה פשוטה':'רמת התחזוקה שבחרת'} נלקחו בחשבון.`,p.eye===2?'צללית בגוון שזיפי מציעה ניגוד לצבע העיניים הירוק שבחרת.':p.eye===3?'גווני נחושת מציעים ניגוד לכחול שבחרת.':'צבע העיניים שבחרת מופיע בהדמיה; אפשר להתנסות בפלטה כרצונך.'].join(' '),trend,profile:p};
  });
}
export function cleanLook(input={},profile={}){
  const base=baseLook(profile);
  for(const key of ['hairColor','lip','blush','shadow','shirt'])if(/^#[0-9a-f]{6}$/i.test(input[key]||''))base[key]=input[key];
  if(['short','bob','long','shaved'].includes(input.hairStyle))base.hairStyle=input.hairStyle;
  if(['straight','wavy','curly','coily'].includes(input.texture))base.texture=input.texture;
  if(Number.isFinite(Number(input.intensity)))base.intensity=Math.min(100,Math.max(0,Number(input.intensity)));
  base.accessory=input.accessory===true;
  return base;
}
export function portrait(input,lookInput={},id='portrait'){
  const p=normalize(input),look=cleanLook(lookInput,p),skin=skinTones[p.skin].color,hair=hex(look.hairColor),eyes=eyeColors[p.eye].color;
  const opacity=look.intensity/100;
  const facePaths={oval:'M101 113 Q99 72 160 69 Q221 72 219 113 L213 177 Q207 219 160 235 Q113 219 107 177Z',round:'M94 119 Q92 73 160 70 Q228 73 226 119 L222 174 Q218 222 160 230 Q102 222 98 174Z',square:'M99 116 Q98 73 160 70 Q222 73 221 116 L218 191 Q215 219 186 226 L134 226 Q105 219 102 191Z',heart:'M94 115 Q94 72 160 69 Q226 72 226 115 L211 179 Q194 216 160 238 Q126 216 109 179Z',long:'M106 108 Q102 64 160 62 Q218 64 214 108 L211 187 Q205 225 160 245 Q115 225 109 187Z'};
  const face=facePaths[p.face]||facePaths.oval;
  const back={long:'M79 108 Q73 42 160 37 Q247 42 241 108 L257 292 Q205 325 160 291 Q110 325 63 292Z',bob:'M80 108 Q74 44 160 37 Q246 44 240 108 L242 219 Q219 241 201 215 L119 215 Q100 241 78 219Z',short:'M91 116 Q74 65 111 48 Q153 19 207 49 Q240 62 229 121 L212 135 L108 135Z',shaved:'M99 108 Q96 66 160 62 Q224 66 221 108 L215 122 L106 122Z'}[look.hairStyle];
  const front=look.hairStyle==='shaved'?'':look.hairStyle==='short'?'M91 115 Q78 68 113 53 Q144 24 205 49 Q238 63 228 119 L214 126 L207 91 Q158 109 124 78 L109 118Z':look.texture==='straight'?'M82 119 Q74 45 160 39 Q246 45 239 119 L214 147 L211 99 Q171 99 160 73 Q149 99 109 99 L106 147Z':'M81 119 Q71 45 160 38 Q249 45 239 119 L217 149 Q206 120 216 99 Q177 100 160 68 Q144 99 106 104 L104 149Z';
  let curls='';
  if(look.hairStyle!=='shaved'&&['curly','coily'].includes(look.texture)){
    const radius=look.texture==='coily'?11:17;
    const points=[[99,87],[111,65],[137,52],[164,48],[190,55],[215,72],[226,95],[91,120],[231,122]];
    if(look.hairStyle!=='short')points.push([87,147],[235,147],[87,174],[234,175],[93,201],[228,201]);
    if(look.hairStyle==='long')points.push([85,229],[239,229],[83,256],[238,260],[95,287],[225,287]);
    curls=points.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="${radius}" fill="${hair}"/><path d="M${x-4} ${y+5}q-7 -9 4 -11" fill="none" stroke="#ffffff" stroke-opacity=".09" stroke-width="1.5"/>`).join('');
  }
  const glasses=p.glasses?'<g fill="none" stroke="#343a40" stroke-width="3"><rect x="105" y="130" width="45" height="30" rx="12"/><rect x="170" y="130" width="45" height="30" rx="12"/><path d="M150 139q10 -7 20 0 M105 138l-10 -4 M215 138l10 -4"/></g>':'';
  const beard=p.beard?`<path d="M109 172 Q116 191 133 190 Q160 180 187 190 Q204 191 211 172 L205 208 Q182 231 160 235 Q138 231 115 208Z" fill="${hair}" opacity=".9"/>`:'';
  const waves=look.texture==='wavy'&&look.hairStyle!=='shaved'?`<g fill="none" stroke="#fff" stroke-opacity=".11" stroke-width="3" stroke-linecap="round"><path d="M97 115q-15 25 0 48t-3 48"/><path d="M224 115q15 25 0 48t3 48"/>${look.hairStyle==='long'?'<path d="M94 220q-16 24 0 49 M228 220q16 24 0 49"/>':''}</g>`:'';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 380" role="img" aria-label="איור להמחשת צבעי שיער, איפור ולבוש" style="overflow:visible"><path d="M31 380v-34q9-67 80-75l49 20 49-20q71 8 80 75v34Z" fill="${hex(look.shirt)}"/><path d="M111 271q49 60 98 0l-15-8h-68Z" fill="#000" opacity=".08"/><path d="M133 211h54v52l22 8q-49 41-98 0l22-8Z" fill="${skin}"/><path d="M133 218q27 24 54 0v20q-28 19-54-2Z" fill="#000" opacity=".08"/><path d="${back}" fill="${hair}"/><ellipse cx="102" cy="152" rx="12" ry="22" fill="${skin}"/><ellipse cx="218" cy="152" rx="12" ry="22" fill="${skin}"/><path d="${face}" fill="${skin}"/><path d="M114 164q8 32 30 41" fill="none" stroke="#fff" stroke-opacity=".12" stroke-width="9" stroke-linecap="round"/><g fill="${hex(look.shadow)}" opacity="${opacity*.55}"><path d="M108 140q18-24 38 0q-18-7-38 0"/><path d="M174 140q18-24 38 0q-18-7-38 0"/></g><g fill="white"><path d="M109 145q17-15 35 0q-17 12-35 0"/><path d="M176 145q17-15 35 0q-17 12-35 0"/></g><g fill="${eyes}"><ellipse cx="127" cy="144" rx="7" ry="7.5"/><ellipse cx="193" cy="144" rx="7" ry="7.5"/></g><g fill="#252829"><circle cx="127" cy="144" r="3.3"/><circle cx="193" cy="144" r="3.3"/></g><g fill="white"><circle cx="129" cy="142" r="1.7"/><circle cx="195" cy="142" r="1.7"/></g><g fill="none" stroke="#392f2b" stroke-width="2" stroke-linecap="round"><path d="M109 145q17-15 35 0 M176 145q17-15 35 0"/></g><g fill="none" stroke="${hair}" stroke-width="4" stroke-linecap="round"><path d="M109 126q18-9 33-2 M178 124q17-7 33 2"/></g><path d="M157 150l-5 25q8 5 15 0" fill="none" stroke="#573929" stroke-opacity=".3" stroke-width="1.7" stroke-linecap="round"/><g fill="${hex(look.blush)}" opacity="${opacity*.55}"><ellipse cx="121" cy="169" rx="17" ry="10"/><ellipse cx="199" cy="169" rx="17" ry="10"/></g>${beard}<path d="M139 196q12-10 21-4q9-6 21 4q-21 17-42 0" fill="#a56b66"/><path d="M139 196q12-10 21-4q9-6 21 4q-21 17-42 0" fill="${hex(look.lip)}" opacity="${opacity}"/><path d="M141 196q19 4 38 0" stroke="#603c36" opacity=".5" fill="none" stroke-width="1"/><path d="${front||'M105 100Q160 66 215 100'}" fill="${front?hair:'none'}" stroke="${front?'none':hair}" stroke-width="5" stroke-opacity=".3"/>${curls}${waves}${glasses}${look.accessory?'<g fill="none" stroke="#b99b48" stroke-width="3"><ellipse cx="102" cy="179" rx="6" ry="11"/><ellipse cx="218" cy="179" rx="6" ry="11"/></g>':''}<path d="M56 373q4-38 17-48 M264 373q-4-38-17-48" fill="none" stroke="#000" stroke-opacity=".1" stroke-width="2"/></svg>`;
}
