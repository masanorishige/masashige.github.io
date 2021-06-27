'use strict';

{
  const btn =document.getElementById('btn');

  btn.addEventListener('click',() =>{

    // const results=['大吉','大吉','大吉','大吉','大吉','中吉','笑吉','wahaha'];
    // const n =Math.floor(Math.random()*results.length);

    // btn.textContent=results[Math.floor(Math.random()*results.length)];

    
const n=Math.random();
if(n < 0.05){
  btn.textContent ='大吉';

}else if(n < 0.2){
  btn.textContent='chukichi';
  
}else {
  btn.textContent='kyo';
}


  
  })
}