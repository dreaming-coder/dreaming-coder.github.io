import{_ as n,o as s,c,b as t,d as p,e,w as o,a as i,r}from"./app.3caa01d5.js";const a="/imgs/foundation/network/tcp-1.png",d="/imgs/foundation/network/tcp-2.png",_="/imgs/foundation/network/tcp-3.png",u="/imgs/foundation/network/tcp-4.png",K=JSON.parse('{"title":"TCP 协议","description":"","frontmatter":{},"headers":[{"level":2,"title":"TCP 协议的特点","slug":"tcp-协议的特点","link":"#tcp-协议的特点","children":[]},{"level":2,"title":"TCP 报文段","slug":"tcp-报文段","link":"#tcp-报文段","children":[]},{"level":2,"title":"TCP 连接管理","slug":"tcp-连接管理","link":"#tcp-连接管理","children":[{"level":3,"title":"TCP 连接的建立","slug":"tcp-连接的建立","link":"#tcp-连接的建立","children":[]},{"level":3,"title":"TCP 连接的释放","slug":"tcp-连接的释放","link":"#tcp-连接的释放","children":[]}]}],"relativePath":"md/foundation/network/tcp.md","lastUpdated":1676810844000}'),C={name:"md/foundation/network/tcp.md"},T=i("",7),P=t("p",null,[t("strong",null,"序号")],-1),h=t("p",null,[t("strong",null,"确认号")],-1),g=t("strong",null,"数据偏移",-1),A=t("p",null,"TCP 报文段的数据其实处距离 TCP 报文段的起始处有多远，以 4 B 为单位",-1),S=i("",11),k=i("",16);function m(f,N,b,x,B,I){const l=r("font");return s(),c("div",null,[T,t("ul",null,[t("li",null,[P,t("p",null,[p("在一个 TCP 连接中传送的字节流中的每一个字节都按顺序编号，本字段表示本报文段所发送数据的"),e(l,{color:"red"},{default:o(()=>[p("第一个字节的序号")]),_:1})])]),t("li",null,[h,e(l,{color:"red"},{default:o(()=>[p("期望")]),_:1}),p("收到对方下一个报文段的第一个数据字节的序号。若确认号为 N，则证明到序号 N-1 为止的所有数据都已正确收到")]),t("li",null,[t("p",null,[g,p("（"),e(l,{color:"red"},{default:o(()=>[p("首部长度")]),_:1}),p("）")]),A]),S]),k])}const w=n(C,[["render",m]]);export{K as __pageData,w as default};
