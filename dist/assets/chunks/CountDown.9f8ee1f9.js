import{_ as u,o as v,c as _,a as f}from"../app.62a8f451.js";const p={name:"CountDown",mounted(){let s=document.querySelector(".hour"),o=document.querySelector(".minute"),c=document.querySelector(".second");const d=+new Date+24*60*60*1e3;function i(){let l=+new Date,a=(d-l)/1e3;if(a<=0){clearInterval(r);return}let e=parseInt(a/60/60%24);e=e<10?"0"+e:e;let t=parseInt(a/60%60);t=t<10?"0"+t:t;let n=parseInt(a%60);n=n<10?"0"+n:n,s.firstChild.innerText=e,o.firstChild.innerText=t,c.firstChild.innerText=n}const r=setInterval(()=>{i()},1e3)}},m={class:"demo ice-container"},h=f('<div class="count-container" data-v-534284f6><b data-v-534284f6>倒计时</b><div class="ice-box" data-v-534284f6><div class="item hour" data-v-534284f6><p class="num" data-v-534284f6>00</p></div><p class="sign" data-v-534284f6>:</p><div class="item minute" data-v-534284f6><p class="num" data-v-534284f6>00</p></div><p class="sign" data-v-534284f6>:</p><div class="item second" data-v-534284f6><p class="num" data-v-534284f6>00</p></div></div></div>',1),x=[h];function w(s,o,c,d,i,r){return v(),_("div",m,x)}const D=u(p,[["render",w],["__scopeId","data-v-534284f6"]]);export{D as default};
