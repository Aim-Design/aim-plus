import{d as m,l as x,o as d,c as _,z as r,r as L,n as B,b as u,H as k,_ as T,G as b,E as a,B as o,a as s,F as z,h as M,A as R,I as H,C as F,a2 as C,a3 as S,T as N,K as A,a4 as U,u as G,p as K,k as W,a5 as q,a6 as J,a7 as Q,a8 as X,a9 as Y,aa as Z,ab as tt,ac as et,ad as nt,ae as at,af as ot,ag as st,ah as it,ai as rt}from"./chunks/framework.cec2b577.js";import{t as lt}from"./chunks/theme.e5de890b.js";function ut(e){const n=`aim-${e}`;return{n:t=>t?t.startsWith("--")?`${n}${t}`:`${n}__${t}`:n,classes:(...t)=>t.map(i=>{if(Array.isArray(i)){const[l,y,g=null]=i;return l?y:g}return i})}}function ct(e){return["default","primary","info","success","warning","danger"].includes(e)}function dt(e){return["normal","mini","small","large"].includes(e)}const pt={type:{type:String,default:"default",validator:ct},size:{type:String,validator:dt},plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,text:Boolean,icon:String,color:String,disabled:Boolean,textColor:{type:String},ripple:{type:Boolean,default:!0}},mt=["disabled"],_t=m({name:"AimButton"}),$=m({..._t,props:pt,setup(e){const n=e,t=x(()=>n.color?{"--aim-button-bg-color":n.color,"--aim-button-text-color":"var(--aim-color-white)","--aim-button-border-color":n.color}:{}),{n:i}=ut("button");return console.log(i(`--${n.size}`)),(l,y)=>(d(),_("button",{class:B([u(i)(),l.type&&u(i)(`--${l.type}`),l.size&&u(i)(`--${l.size}`),l.plain&&"is-plain",l.round&&"is-round",l.circle&&"is-circle",l.disabled&&"is-disabled",l.text&&"is-text"]),style:k({color:l.textColor,...u(t)}),disabled:l.disabled},[r("div",{class:B([u(i)("content")])},[L(l.$slots,"default")],2)],14,mt))}});$.install=e=>{e.component($.name,$)};const bt=$,ft={style:{color:"brown"}},yt=m({name:"AimIcon"}),w=m({...yt,setup(e){return(n,t)=>(d(),_("div",ft,"111"))}});w.install=e=>{e.component(w.name,w)};const gt=w,O=Object.freeze(Object.defineProperty({__proto__:null,AimButton:bt,AimIcon:gt},Symbol.toStringTag,{value:"Module"}));function vt(e,n){return e in n}const h={...O};console.log(O);const ht=function(e){Object.keys(h).forEach(n=>{if(vt(n,h)){const t=h[n].name;e.component(t,h[n])}})},xt={install:ht,...O};const $t={},wt={class:"padding"},Ct={class:"padding"},St={class:"padding"};function At(e,n){const t=b("aim-button");return d(),_(z,null,[r("div",wt,[a(t,{type:"default"},{default:o(()=>[s("默认")]),_:1}),a(t,{type:"primary"},{default:o(()=>[s("主要")]),_:1}),a(t,{type:"info"},{default:o(()=>[s("信息")]),_:1}),a(t,{type:"success"},{default:o(()=>[s("成功")]),_:1}),a(t,{type:"warning"},{default:o(()=>[s("警告")]),_:1}),a(t,{type:"danger"},{default:o(()=>[s("危险")]),_:1})]),r("div",Ct,[a(t,{size:"small"},{default:o(()=>[s("测试")]),_:1}),a(t,null,{default:o(()=>[s("测试")]),_:1}),a(t,{size:"large"},{default:o(()=>[s("测试")]),_:1})]),r("div",St,[a(t,{type:"default",round:""},{default:o(()=>[s("默认")]),_:1}),a(t,{type:"primary",round:""},{default:o(()=>[s("主要")]),_:1}),a(t,{type:"info",round:""},{default:o(()=>[s("信息")]),_:1}),a(t,{type:"success",round:""},{default:o(()=>[s("成功")]),_:1}),a(t,{type:"warning",round:""},{default:o(()=>[s("警告")]),_:1}),a(t,{type:"danger",round:""},{default:o(()=>[s("危险")]),_:1})])],64)}const Tt=T($t,[["render",At]]),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),Ot={};function jt(e,n){const t=b("aim-button");return d(),_(z,null,[a(t,{disabled:"",type:"default"},{default:o(()=>[s("测试")]),_:1}),a(t,{disabled:"",type:"primary"},{default:o(()=>[s("测试")]),_:1}),a(t,{disabled:"",type:"info"},{default:o(()=>[s("测试")]),_:1}),a(t,{disabled:"",type:"success"},{default:o(()=>[s("测试")]),_:1}),a(t,{disabled:"",type:"warning"},{default:o(()=>[s("测试")]),_:1}),a(t,{disabled:"",type:"danger"},{default:o(()=>[s("测试")]),_:1})],64)}const Bt=T(Ot,[["render",jt]]),Pt=Object.freeze(Object.defineProperty({__proto__:null,default:Bt},Symbol.toStringTag,{value:"Module"})),Vt={};function Dt(e,n){const t=b("aim-button");return d(),_(z,null,[a(t,{text:"",type:"default"},{default:o(()=>[s("测试")]),_:1}),a(t,{text:"",type:"primary"},{default:o(()=>[s("测试")]),_:1}),a(t,{text:"",type:"info"},{default:o(()=>[s("测试")]),_:1}),a(t,{text:"",type:"success"},{default:o(()=>[s("测试")]),_:1}),a(t,{text:"",type:"warning"},{default:o(()=>[s("测试")]),_:1}),a(t,{text:"",type:"danger"},{default:o(()=>[s("测试")]),_:1})],64)}const Et=T(Vt,[["render",Dt]]),It=Object.freeze(Object.defineProperty({__proto__:null,default:Et},Symbol.toStringTag,{value:"Module"})),Lt=`<template>\r
  <!-- type -->\r
  <div class="padding">\r
    <aim-button type="default">默认</aim-button>\r
    <aim-button type="primary">主要</aim-button>\r
    <aim-button type="info">信息</aim-button>\r
    <aim-button type="success">成功</aim-button>\r
    <aim-button type="warning">警告</aim-button>\r
    <aim-button type="danger">危险</aim-button>\r
  </div>\r
  <!-- size -->\r
  <div class="padding">\r
    <aim-button size="small">测试</aim-button>\r
    <aim-button>测试</aim-button>\r
    <aim-button size="large">测试</aim-button>\r
  </div>\r
  <!-- round -->\r
  <div class="padding">\r
    <aim-button type="default" round>默认</aim-button>\r
    <aim-button type="primary" round>主要</aim-button>\r
    <aim-button type="info" round>信息</aim-button>\r
    <aim-button type="success" round>成功</aim-button>\r
    <aim-button type="warning" round>警告</aim-button>\r
    <aim-button type="danger" round>危险</aim-button>\r
  </div>\r
</template>\r
<style>\r
.padding {\r
  padding: 8px 0;\r
}\r
</style>\r
`,kt=`<template>\r
  <aim-button disabled type="default">测试</aim-button>\r
  <aim-button disabled type="primary">测试</aim-button>\r
  <aim-button disabled type="info">测试</aim-button>\r
  <aim-button disabled type="success">测试</aim-button>\r
  <aim-button disabled type="warning">测试</aim-button>\r
  <aim-button disabled type="danger">测试</aim-button>\r
</template>\r
`,Mt=`<template>\r
  <aim-button text type="default">测试</aim-button>\r
  <aim-button text type="primary">测试</aim-button>\r
  <aim-button text type="info">测试</aim-button>\r
  <aim-button text type="success">测试</aim-button>\r
  <aim-button text type="warning">测试</aim-button>\r
  <aim-button text type="danger">测试</aim-button>\r
</template>\r
`,P=Object.assign({"./button/basic.vue":zt,"./button/disabled.vue":Pt,"./button/text.vue":It}),Rt=Object.assign({"./button/basic.vue":Lt,"./button/disabled.vue":kt,"./button/text.vue":Mt}),Ht=["innerHTML"],Ft={class:"example"},Nt={class:"example-showcase"},Ut=r("div",{class:"van-divider"},null,-1),Gt={class:"op-btns"},Kt={class:"example-source-wrapper"},Wt=["innerHTML"],qt=r("span",{style:{"padding-left":"8px"}},"隐藏代码",-1),Jt=m({__name:"Demo",props:{source:null,path:null,rawSource:null,description:null},setup(e){const n=e,t=x(()=>{const c={};return Object.keys(P||{}).forEach(p=>{c[p.replace("./","").replace(".vue","")]=P[p].default}),c}),i=M(!0),l=x(()=>(console.log(n),decodeURIComponent(n.source))),y=x(()=>decodeURIComponent(n.description));function g(){i.value=!i.value}function D(){var c=document.createElement("textarea");c.innerHTML=Rt[`./${n.path}.vue`],document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c)}return(c,p)=>{const v=b("VanIcon"),j=b("VanTooltip"),E=b("VanCollapseTransition");return d(),_("div",null,[r("p",{text:"sm",innerHTML:u(y)},null,8,Ht),r("div",Ft,[r("div",Nt,[u(t)[e.path]?(d(),R(H(u(t)[e.path]),{key:0})):F("",!0)]),Ut,r("div",Gt,[a(j,{content:"复制代码","show-arrow":!1},{default:o(()=>[r("span",{class:"op-btn",onClick:D},[a(v,{name:"document-copy"})])]),_:1}),a(j,{content:"查看源代码","show-arrow":!1},{default:o(()=>[r("span",{class:"op-btn",onClick:p[0]||(p[0]=I=>g())},[a(v,{name:"arrow-left"}),a(v,{name:"arrow-right",style:{"margin-left":"-2px"}})])]),_:1})]),C(r("div",null,null,512),[[S,i.value]]),a(E,null,{default:o(()=>[C(r("div",Kt,[r("div",{class:"example-source language-vue",innerHTML:u(l)},null,8,Wt)],512),[[S,i.value]])]),_:1}),a(N,{name:"van-fade-in-linear"},{default:o(()=>[C(r("div",{class:"example-float-control",onClick:p[1]||(p[1]=I=>g())},[a(v,{name:"caret-top"}),qt],512),[[S,i.value]])]),_:1})])])}}});const Qt={class:"demo-icon"},Xt=r("div",{class:"demo-icon-item"},[r("ul",{class:"demo-icon-list"})],-1),Yt=[Xt],Zt=m({__name:"IconList",setup(e){return(n,t)=>(d(),_("div",Qt,Yt))}});const te=[["Demo",Jt],["IconList",Zt]],ee={...lt,enhanceApp:async({app:e})=>{e.use(xt),te.forEach(([n,t])=>e.component(n,t))}};function V(e){if(e.extends){const n=V(e.extends);return{...n,...e,async enhanceApp(t){n.enhanceApp&&await n.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const f=V(ee),ne=m({name:"VitePressApp",setup(){const{site:e}=G();return K(()=>{W(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),q(),J(),Q(),f.setup&&f.setup(),()=>X(f.Layout)}});async function ae(){const e=se(),n=oe();n.provide(Y,e);const t=Z(e.route);return n.provide(tt,t),n.component("Content",et),n.component("ClientOnly",nt),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),f.enhanceApp&&await f.enhanceApp({app:n,router:e,siteData:at}),{app:n,router:e,data:t}}function oe(){return ot(ne)}function se(){let e=A,n;return st(t=>{let i=it(t);return e&&(n=i),(e||n===i)&&(i=i.replace(/\.js$/,".lean.js")),A&&(e=!1),rt(()=>import(i),[])},f.NotFound)}A&&ae().then(({app:e,router:n,data:t})=>{n.go().then(()=>{U(n.route,t.site),e.mount("#app")})});export{ae as createApp};
