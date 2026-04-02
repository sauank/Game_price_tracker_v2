
(async ()=>{
  const title=document.querySelector('h1')?.innerText;
  const price=document.querySelector('[data-testid="purchase-cta-button"] span')?.innerText;
  if(title&&price){
    chrome.runtime.sendMessage({type:'UPSERT_GAME',payload:{
      id:location.pathname,
      store:'epic',
      title,price,url:location.href
    }});
  }
})();
