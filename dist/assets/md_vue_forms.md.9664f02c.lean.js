import{r as e,o as m,c as A,b as s,t,w as l,v as u,d as r,e as C,f as b,a as p}from"./app.838d8802.js";const v=p("",11),h={class:"demo"},g=p("",2),q={class:"demo"},_=s("span",null,"Multiline message is:",-1),E={style:{"white-space":"pre-line"}},k=p("",5),T={class:"demo"},x={for:"checkbox-demo"},f=p("",3),S={class:"demo"},w=s("label",{for:"demo-jack"},"Jack",-1),V=s("label",{for:"demo-john"},"John",-1),P=s("label",{for:"demo-mike"},"Mike",-1),N=p("",3),I={class:"demo"},j=s("label",{for:"one"},"One",-1),M=s("label",{for:"two"},"Two",-1),J=p("",3),U={class:"demo"},O=s("option",{disabled:"",value:""},"Please select one",-1),B=s("option",null,"A",-1),R=s("option",null,"B",-1),z=s("option",null,"C",-1),G=[O,B,R,z],H=p("",3),K={class:"demo"},L=s("option",null,"A",-1),Q=s("option",null,"B",-1),W=s("option",null,"C",-1),X=[L,Q,W],Y=p("",30),as=JSON.parse('{"title":"表单输入绑定","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"文本","slug":"文本","link":"#文本","children":[]},{"level":3,"title":"多行文本","slug":"多行文本","link":"#多行文本","children":[]},{"level":3,"title":"复选框","slug":"复选框","link":"#复选框","children":[]},{"level":3,"title":"单选按钮","slug":"单选按钮","link":"#单选按钮","children":[]},{"level":3,"title":"选择器","slug":"选择器","link":"#选择器","children":[]}]},{"level":2,"title":"值绑定","slug":"值绑定","link":"#值绑定","children":[{"level":3,"title":"复选框","slug":"复选框-1","link":"#复选框-1","children":[]},{"level":3,"title":"单选按钮","slug":"单选按钮-1","link":"#单选按钮-1","children":[]},{"level":3,"title":"选择器选项","slug":"选择器选项","link":"#选择器选项","children":[]}]},{"level":2,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[{"level":3,"title":".lazy","slug":"lazy","link":"#lazy","children":[]},{"level":3,"title":".number","slug":"number","link":"#number","children":[]},{"level":3,"title":".trim","slug":"trim","link":"#trim","children":[]}]}],"relativePath":"md/vue/forms.md","lastUpdated":1672567686000}'),Z={name:"md/vue/forms.md"},ls=Object.assign(Z,{setup($){const D=e(""),F=e(""),y=e(!1),o=e([]),c=e(""),i=e(""),d=e([]);return(ss,n)=>(m(),A("div",null,[v,s("div",h,[s("p",null,"Message is: "+t(D.value),1),l(s("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>D.value=a),placeholder:"edit me"},null,512),[[u,D.value]])]),g,s("div",q,[_,s("p",E,t(F.value),1),l(s("textarea",{"onUpdate:modelValue":n[1]||(n[1]=a=>F.value=a),placeholder:"add multiple lines"},null,512),[[u,F.value]])]),k,s("div",T,[l(s("input",{type:"checkbox",id:"checkbox-demo","onUpdate:modelValue":n[2]||(n[2]=a=>y.value=a)},null,512),[[r,y.value]]),s("label",x,t(y.value),1)]),f,s("div",S,[s("div",null,"Checked names: "+t(o.value),1),l(s("input",{type:"checkbox",id:"demo-jack",value:"Jack","onUpdate:modelValue":n[3]||(n[3]=a=>o.value=a)},null,512),[[r,o.value]]),w,l(s("input",{type:"checkbox",id:"demo-john",value:"John","onUpdate:modelValue":n[4]||(n[4]=a=>o.value=a)},null,512),[[r,o.value]]),V,l(s("input",{type:"checkbox",id:"demo-mike",value:"Mike","onUpdate:modelValue":n[5]||(n[5]=a=>o.value=a)},null,512),[[r,o.value]]),P]),N,s("div",I,[s("div",null,"Picked: "+t(c.value),1),l(s("input",{type:"radio",id:"one",value:"One","onUpdate:modelValue":n[6]||(n[6]=a=>c.value=a)},null,512),[[C,c.value]]),j,l(s("input",{type:"radio",id:"two",value:"Two","onUpdate:modelValue":n[7]||(n[7]=a=>c.value=a)},null,512),[[C,c.value]]),M]),J,s("div",U,[s("div",null,"Selected: "+t(i.value),1),l(s("select",{"onUpdate:modelValue":n[8]||(n[8]=a=>i.value=a)},G,512),[[b,i.value]])]),H,s("div",K,[s("div",null,"Selected: "+t(d.value),1),l(s("select",{"onUpdate:modelValue":n[9]||(n[9]=a=>d.value=a),multiple:""},X,512),[[b,d.value]])]),Y]))}});export{as as __pageData,ls as default};