const stops={
 idre:{title:'Idre',text:'Start och mål. Perfekt utgångspunkt för att rulla in i Norge utan en brutal första dag.',bullets:['Samla gruppen och packa bilen','Ladda ner offline-kartor','Starta med marginal'],map:'Idre Sweden',lat:61.8587,lon:12.7144,img:'roadbook_montage.png'},
 roros:{title:'Røros',text:'Charmig start med världsarvskänsla, träbebyggelse, mat och en mjuk första etapp från Idre.',bullets:['Perfekt första övernattning','Kvällspromenad i centrum','Bra för att samla gruppen innan fjällen'],map:'Røros Norway',lat:62.5747,lon:11.3842,img:'roros_wide.jpg'},
 jotunheimen:{title:'Jotunheimen',text:'Resans fjällhjärta. Här väljer ni Besseggen eller Galdhøpiggen beroende på väder, ork och ambitionsnivå.',bullets:['Besseggen = ikonisk kamvandring','Galdhøpiggen = Norges högsta berg','Boka/planera tidigt vid fint väder'],map:'Jotunheimen Norway',lat:61.5000,lon:8.7500,img:'besseggen_wide.jpg'},
 stryn:{title:'Stryn',text:'Strategisk bas för fjord, dalar, glaciärkänsla och aktiv dag utan att behöva köra långt.',bullets:['Bra övernattningsläge','Nära Loen och Olden','Möjlighet till cykel och korta utflykter'],map:'Stryn Norway',lat:61.9045,lon:6.7226,img:'loen_wide.jpg'},
 geiranger:{title:'Geiranger',text:'Fjordresans stora wow-stopp. Här ska ni prioritera båt/RIB och utsiktsplatser.',bullets:['Fjordkryssning eller RIB','Flydalsjuvet','Middag med fjordutsikt'],map:'Geiranger Norway',lat:62.1015,lon:7.2056,img:'geiranger_wide.jpg'},
 trollstigen:{title:'Trollstigen',text:'Ikonisk vägdag med utsiktsplattformar, hårnålskurvor och dramatiska berg.',bullets:['Kolla vägläge innan avfärd','Åk tidigt för mindre trafik','Avsluta i Åndalsnes'],map:'Trollstigen Norway',lat:62.4590,lon:7.6630,img:'trollstigen_wide.jpg'},
 andalsnes:{title:'Åndalsnes',text:'Naturlig sista natt före hemresan. Romsdalen, Rampestreken och en lugn kväll innan långkörningen.',bullets:['Rampestreken om benen är pigga','Bra bas före hemresa','Snygg final på resan'],map:'Åndalsnes Norway',lat:62.5675,lon:7.6871,img:'trollstigen_wide.jpg'}
};
const days=[
 {d:'Dag 1',title:'Idre → Røros',img:'roros_wide.jpg',meta:['≈250 km','3–4 h','mjuk start'],text:'Första etappen ska vara enkel. Checka in, ät bra middag och ta en kvällspromenad i Røros.'},
 {d:'Dag 2',title:'Røros → Lom/Jotunheimen',img:'besseggen_wide.jpg',meta:['≈300 km','5 h','fjällkänsla'],text:'Kör mot fjällvärlden. Lom är bra bas om Galdhøpiggen lockar. Beitostølen passar bättre om el-MTB prioriteras.'},
 {d:'Dag 3',title:'Besseggen eller Galdhøpiggen',img:'besseggen_wide.jpg',meta:['heldag','vandring','väderstyrt'],text:'Välj en stor fjällaktivitet. Besseggen ger dramatisk kamkänsla. Galdhøpiggen ger högsta-berget-status.'},
 {d:'Dag 4',title:'Sognefjellet → Stryn',img:'loen_wide.jpg',meta:['≈220 km','4–5 h','scenic road'],text:'En av resans vackraste kördagar. Ta många stopp, fika och låt fjällvägen vara upplevelsen.'},
 {d:'Dag 5',title:'Stryn → Loen → Geiranger',img:'geiranger_wide.jpg',meta:['kort körning','fjord','aktiv dag'],text:'Loen Skylift, el-MTB eller kortare aktivitet på dagen. Fortsätt till Geiranger för fjordkryssning och utsikt.'},
 {d:'Dag 6',title:'Geiranger → Trollstigen → Åndalsnes',img:'trollstigen_wide.jpg',meta:['≈110 km','ikonväg','utsikt'],text:'Kör tidigt och njut. Trollstigen kräver väder- och väglägeskoll. Avsluta med Åndalsnes/Rampestreken om ork finns.'},
 {d:'Dag 7',title:'Åndalsnes → Idre',img:'roadbook_montage.png',meta:['hemresa','≈450 km','sista stopp'],text:'Lugn hemresa. Inga stora måsten – bara bra fika, fotostopp och summering av resan.'}
];
const acts=[
 ['Besseggen','vandring utsikt','Ikonisk heldagstur. Välj bara vid bra väder och pigga ben.'],['Galdhøpiggen','vandring utsikt','Norges högsta berg. Mäktigt, men planera guidning/rutt och marginaler.'],['Loen Skylift','utsikt regn','Snabb wow-effekt även om vädret är halvbra. Perfekt om benen behöver vila.'],['El-MTB i fjällmiljö','cykel','Bäst runt Beitostølen/Loen/Stryn beroende på boende och uthyrning.'],['Geiranger fjordtur','båt utsikt','Båt/RIB är nästan obligatoriskt om ni vill uppleva fjorden på riktigt.'],['Flydalsjuvet','utsikt','Klassisk fotoplats över Geiranger. Bra kvällsstopp.'],['Rampestreken','vandring utsikt','Kort men brant utsiktstur vid Åndalsnes. Bara om ork finns.'],['Regnplan: café + skylift','regn','Byt lång vandring mot kortare stopp, Loen Skylift, caféer och bilburna utsikter.']
];
const checks=['Regnjacka','Vandringsskor','Extra strumpor','Badkläder','Powerbank','Solglasögon','Laddkablar','Första hjälpen','Snacks i bilen','Vattenflaskor','Kamera/mobilgrepp','Kolla Trollstigen-vägläge','Boka fjordtur','Boka boende första/sista natt','Offline-kartor','Reseförsäkring'];
const weatherStops=[
 {id:'roros',name:'Røros',lat:62.5747,lon:11.3842,type:'kultur'},
 {id:'jotunheimen',name:'Jotunheimen / Besseggen',lat:61.5000,lon:8.7500,type:'fjäll'},
 {id:'stryn',name:'Stryn / Loen',lat:61.9045,lon:6.7226,type:'cykel'},
 {id:'geiranger',name:'Geiranger',lat:62.1015,lon:7.2056,type:'fjord'},
 {id:'trollstigen',name:'Trollstigen / Åndalsnes',lat:62.4590,lon:7.6630,type:'väg'}
];
const routeOrder=['idre','roros','jotunheimen','stryn','geiranger','trollstigen','andalsnes','idre'];
let leafletMap=null, routeLayer=null, markerLayer=null, markerRefs={};
const weatherStatusByStop={};
function stopHtml(s){return `<div class="stophero"><img src="assets/${s.img}" alt="${s.title}"><div><p class="eyebrow">Valt stopp</p><h3>${s.title}</h3></div></div><p>${s.text}</p><ul>${s.bullets.map(b=>`<li>${b}</li>`).join('')}</ul><div class="stopactions"><a class="btn small" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.map)}">Öppna i Google Maps</a><button class="btn small" type="button" onclick="focusStop('${Object.keys(stops).find(k=>stops[k]===s)}')">Zooma in</button></div>`}
function selectStop(id){const s=stops[id]; if(!s) return; document.getElementById('stopcard').innerHTML=stopHtml(s); document.querySelectorAll('.custom-marker').forEach(m=>m.classList.remove('selected')); const el=markerRefs[id]?.getElement?.(); if(el) el.classList.add('selected');}
function focusStop(id){const s=stops[id]; if(!s||!leafletMap) return; selectStop(id); leafletMap.flyTo([s.lat,s.lon],9,{duration:.75}); markerRefs[id]?.openPopup?.();}
function initMap(){
 if(!window.L||!document.getElementById('routeMap')) return;
 leafletMap=L.map('routeMap',{scrollWheelZoom:false,zoomControl:true}).setView([62.0,8.9],6);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; OpenStreetMap'}).addTo(leafletMap);
 routeLayer=L.polyline(routeOrder.map(id=>[stops[id].lat,stops[id].lon]),{color:'#65d4ff',weight:5,opacity:.9,lineCap:'round'}).addTo(leafletMap);
 markerLayer=L.layerGroup().addTo(leafletMap);
 renderMarkers();
 leafletMap.fitBounds(routeLayer.getBounds(),{padding:[28,28]});
}
function markerIcon(id){const status=weatherStatusByStop[id]||'neutral'; const label=id==='jotunheimen'?'Jotunheimen':stops[id].title; return L.divIcon({className:'',html:`<button class="custom-marker ${status}" aria-label="${label}"><span>${label}</span></button>`,iconSize:[120,34],iconAnchor:[60,17],popupAnchor:[0,-18]});}
function renderMarkers(){ if(!markerLayer) return; markerLayer.clearLayers(); markerRefs={}; [...new Set(routeOrder)].forEach(id=>{const s=stops[id]; const m=L.marker([s.lat,s.lon],{icon:markerIcon(id)}).addTo(markerLayer).bindPopup(`<strong>${s.title}</strong><br>${s.text.substring(0,92)}...`); m.on('click',()=>selectStop(id)); markerRefs[id]=m;}); }
document.getElementById('daycards').innerHTML=days.map(x=>`<article class="day"><img src="assets/${x.img}" alt="${x.title}"><div class="day__body"><p class="eyebrow">${x.d}</p><h3>${x.title}</h3><div class="day__meta">${x.meta.map(m=>`<span class="pill">${m}</span>`).join('')}</div><p>${x.text}</p></div></article>`).join('');
function renderActs(filter='all'){document.getElementById('activitygrid').innerHTML=acts.filter(a=>filter==='all'||a[1].includes(filter)).map(a=>`<article class="activity"><p class="eyebrow">${a[1].split(' ')[0]}</p><h3>${a[0]}</h3><p>${a[2]}</p></article>`).join('')}
renderActs();document.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));c.classList.add('active');renderActs(c.dataset.filter)}));
document.getElementById('checkgrid').innerHTML=checks.map(c=>`<label class="checkitem"><input type="checkbox">${c}</label>`).join('');
function budget(){const p=+people.value,n=+nights.value,l=+level.value;peopleVal.textContent=p;nightsVal.textContent=n;const total=(n*l)+(p*7*520)+4200+4500;totalBudget.textContent=(Math.round(total/500)*500).toLocaleString('sv-SE')+' kr'}
['people','nights','level'].forEach(id=>document.getElementById(id).addEventListener('input',budget));budget();

const WMO={0:'Klart',1:'Mestadels klart',2:'Halvklart',3:'Mulet',45:'Dimma',48:'Rimfrost',51:'Lätt duggregn',53:'Duggregn',55:'Kraftigt duggregn',61:'Lätt regn',63:'Regn',65:'Kraftigt regn',71:'Lätt snö',73:'Snö',75:'Kraftig snö',80:'Regnskurar',81:'Regnskurar',82:'Kraftiga skurar',95:'Åska'};
function weatherScore(stop,day){
 const rain=day.precipitation_sum||0, wind=day.wind_speed_10m_max||0, code=day.weather_code||0, tmax=Math.round(day.temperature_2m_max), tmin=Math.round(day.temperature_2m_min);
 let score=100;
 if(rain>3) score-=18; if(rain>10) score-=24; if(wind>9) score-=16; if(wind>14) score-=24; if([45,48,71,73,75,80,81,82,95].includes(code)) score-=14; if(tmax<7) score-=10;
 if(stop.type==='fjäll'){ if(rain>2) score-=16; if(wind>8) score-=22; if(tmin<3) score-=10; }
 if(stop.type==='fjord'){ if(wind>12) score-=16; if(rain>12) score-=12; }
 if(stop.type==='cykel'){ if(rain>5) score-=20; if(wind>12) score-=8; }
 if(stop.type==='väg'){ if(rain>15) score-=14; if(wind>15) score-=12; if([71,73,75,95].includes(code)) score-=18; }
 return Math.max(0,score);
}
function advice(stop,score,day){
 if(score>=78) return ['go','Kör enligt plan', stop.type==='fjäll'?'Bra läge för fjälltur – starta tidigt och behåll marginaler.': stop.type==='fjord'?'Bra läge för fjordtur och utsiktsplatser.':'Bra dag för planerad aktivitet.'];
 if(score>=55) return ['warn','Anpassa dagen', stop.type==='fjäll'?'Välj kortare vandring, följ vind/regn noga och ha reservplan.': stop.type==='cykel'?'Cykla kortare tur eller välj Loen Skylift/café om regnet ökar.': stop.type==='väg'?'Kör lugnt, kolla vägläge och undvik sena passager.':'Fungerar, men välj flexibla aktiviteter.'];
 return ['stop','Byt till reservplan', stop.type==='fjäll'?'Flytta Besseggen/Galdhøpiggen. Kör mot Stryn/Loen eller välj enklare dalaktivitet.': stop.type==='fjord'?'Välj landbaserad aktivitet och boka om båt om vind/regn är hårt.': stop.type==='väg'?'Kolla Vegvesen och överväg alternativ väg/extra natt.':'Prioritera inomhus, café, korta utsiktsstopp eller kör vidare.'];
}
async function loadWeather(){
 const grid=document.getElementById('weathergrid'), summary=document.getElementById('weatherSummary');
 if(!grid||!summary) return;
 grid.innerHTML=weatherStops.map(s=>`<article class="weathercard loading"><p class="eyebrow">${s.name}</p><h3>Hämtar...</h3><p>Väderprognos laddas.</p></article>`).join('');
 try{
   const results=await Promise.all(weatherStops.map(async stop=>{
     const url=`https://api.open-meteo.com/v1/forecast?latitude=${stop.lat}&longitude=${stop.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=Europe%2FOslo&forecast_days=7`;
     const res=await fetch(url); if(!res.ok) throw new Error('Väderdata kunde inte hämtas');
     const data=await res.json(); const d=data.daily;
     const day={date:d.time[0],weather_code:d.weather_code[0],temperature_2m_max:d.temperature_2m_max[0],temperature_2m_min:d.temperature_2m_min[0],precipitation_sum:d.precipitation_sum[0],wind_speed_10m_max:d.wind_speed_10m_max[0]};
     const score=weatherScore(stop,day); const a=advice(stop,score,day);
     return {...stop,day,score,status:a[0],headline:a[1],text:a[2]};
   }));
   results.forEach(r=>{weatherStatusByStop[r.id]=r.status;});
   renderMarkers();
   const bad=results.filter(r=>r.score<55), best=results.slice().sort((a,b)=>b.score-a.score)[0];
   summary.innerHTML=`<div><p class="eyebrow">Smart rekommendation</p><h3>${bad.length?`${bad.length} stopp kräver reservplan`:'Rutten ser bra ut just nu'}</h3><p>Bästa väderfönstret just nu: <strong>${best.name}</strong>. ${bad.length?'Prioritera flexibilitet för fjäll/vägdagar och kontrollera prognosen igen nära avfärd.':'Behåll planen, men följ fjällvädret dagligen.'}</p></div><div class="weatherbadge ${bad.length?'warn':'go'}">${Math.round(results.reduce((s,r)=>s+r.score,0)/results.length)}<span>/100</span></div>`;
   grid.innerHTML=results.map(r=>`<article class="weathercard ${r.status}"><div class="weathercard__top"><p class="eyebrow">${r.name}</p><span>${r.score}/100</span></div><h3>${r.headline}</h3><p>${WMO[r.day.weather_code]||'Växlande'} · ${Math.round(r.day.temperature_2m_min)}–${Math.round(r.day.temperature_2m_max)}°C · ${r.day.precipitation_sum} mm · vind max ${Math.round(r.day.wind_speed_10m_max)} m/s</p><small>${r.text}</small></article>`).join('');
 }catch(e){
   summary.innerHTML='<div><p class="eyebrow">Väder</p><h3>Kunde inte hämta väder just nu</h3><p>Appen fungerar ändå. Kontrollera prognos manuellt när ni planerar fjäll- och vägdagar.</p></div>';
   grid.innerHTML=weatherStops.map(s=>`<article class="weathercard warn"><p class="eyebrow">${s.name}</p><h3>Manuell väderkoll</h3><p>Kolla väder och vägläge innan avfärd.</p></article>`).join('');
 }
}
document.getElementById('refreshWeather')?.addEventListener('click',loadWeather);
initMap();
loadWeather();
