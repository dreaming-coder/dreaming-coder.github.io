import{_ as r,a as d,b as s}from"./js-drag-3.c15df18b.js";import{_ as o,o as i,c,a as _}from"../app.107630f2.js";const n={name:"DragTwo",mounted(){let t=document.querySelector("#src-1"),e=document.querySelector("#msg-1");t.ondragstart=a=>a.target.classList.add("dragged"),t.ondragend=a=>{a.target.classList.remove("dragged"),e.innerHTML="Drop Here"},t.ondrag=a=>e.innerHTML=a.target.id}},g={class:"demo"},p=_('<div id="src-1" data-v-5272a164><img draggable="true" id="流川枫" src="'+r+'" width="81px" alt="流川枫" data-v-5272a164><img draggable="true" id="IU" src="'+d+'" width="81px" alt="IU" data-v-5272a164><img draggable="true" id="动漫" src="'+s+'" width="81px" alt="动漫" data-v-5272a164><div id="target-1" data-v-5272a164><p id="msg-1" data-v-5272a164>Drop Here</p></div></div>',1),m=[p];function l(t,e,a,v,u,f){return i(),c("div",g,m)}const w=o(n,[["render",l],["__scopeId","data-v-5272a164"]]);export{w as default};