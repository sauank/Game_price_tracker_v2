
function parsePrice(p){return Number(p.replace(/[^\d]/g,''));}

chrome.runtime.onMessage.addListener(async (msg)=>{
  if(msg.type!=='UPSERT_GAME') return;
  const key = msg.payload.store+':'+msg.payload.id;
  const {games={}} = await chrome.storage.sync.get('games');

  let g = games[key];
  const pn = parsePrice(msg.payload.price);

  if(!g){
    g = {t:msg.payload.title,p:msg.payload.price,pn,lp:pn,lps:msg.payload.price,h:[[pn,Date.now()]],lnp:pn,tp:null};
  } else {
    if(g.pn!==pn){
      g.h.push([pn,Date.now()]);
      if(pn<g.lp){g.lp=pn;g.lps=msg.payload.price;}
      if(pn<g.pn && g.lnp!==pn){
        notify(g.t, g.p, msg.payload.price);
        g.lnp = pn;
      }
      if(g.tp && pn<=g.tp){
        notify("🎯 Target Hit", g.t, msg.payload.price);
      }
    }
    g.p=msg.payload.price;
    g.pn=pn;
  }

  games[key]=g;
  await chrome.storage.sync.set({games});
  refreshBadge();
});

function notify(title, oldP, newP){
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.png',
    title: title,
    message: `${oldP} → ${newP}`
  });
}

async function refreshBadge(){
  const {games={}} = await chrome.storage.sync.get('games');
  let count=0;
  Object.values(games).forEach(g=>{
    if(g.pn===g.lp || (g.tp && g.pn<=g.tp)) count++;
  });
  chrome.action.setBadgeText({text:count?String(count):''});
}
