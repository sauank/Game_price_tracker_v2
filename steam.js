
(async ()=>{
  const title=document.querySelector('#appHubAppName')?.innerText;
  const price=document.querySelector('.discount_final_price,.game_purchase_price')?.innerText;
  if(title&&price){
    chrome.runtime.sendMessage({type:'UPSERT_GAME',payload:{
      id:location.pathname.split('/')[2],
      store:'steam',
      title,price,url:location.href
    }});
  }
})();
