import{_ as c,o as i,c as l,p as _,k as p,b as r}from"../app.100e5de8.js";const u={name:"DragFile",mounted(){const e=document.querySelector("#target");e.ondragenter=t=>t.preventDefault(),e.ondragover=t=>t.preventDefault(),e.ondrop=t=>{const s=t.dataTransfer.files,o=document.querySelector("#data");o.innerHTML=" <tr><th>Name</th> <th> Type</th><th>Size</th></tr>";for(let a of s){let n="<tr><td>"+a.name+"</td><td>"+a.type+"</td><td>"+a.size+"字节</td></tr>";o.innerHTML+=n}t.preventDefault(),o.style.visibility="visible"}}},d=e=>(_("data-v-a4e13e14"),e=e(),p(),e),f={class:"demo ice-container"},h=d(()=>r("div",{id:"target"},[r("p",{id:"msg"},"Drop Files Here")],-1)),m=d(()=>r("table",{id:"data"},null,-1)),v=[h,m];function g(e,t,s,o,a,n){return i(),l("div",f,v)}const D=c(u,[["render",g],["__scopeId","data-v-a4e13e14"]]);export{D as default};
