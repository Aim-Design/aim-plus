import{d as p,l as g,o as _,c as f,z as s,r as I,n as V,b as r,H as L,_ as k,G as x,E as c,B as i,a as d,F as z,h as R,A as M,I as H,C as F,a2 as $,a3 as A,T as N,K as S,a4 as U,u as G,p as K,k as W,a5 as q,a6 as J,a7 as Q,a8 as X,a9 as Y,aa as Z,ab as ee,ac as te,ad as ne,ae as oe,af as ae,ag as se,ah as ce,ai as ie}from"./chunks/framework.cec2b577.js";import{t as re}from"./chunks/theme.e5de890b.js";function le(e){const t=`aim-${e}`;return{n:n=>n?n.startsWith("--")?`${t}${n}`:`${t}__${n}`:t,classes:(...n)=>n.map(o=>{if(Array.isArray(o)){const[a,b,v=null]=o;return a?b:v}return o})}}const ue={type:String,size:String,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,text:Boolean,icon:String,color:String,disabled:Boolean,textColor:{type:String},ripple:{type:Boolean,default:!0}},pe=["disabled"],de=p({name:"AimButton"}),C=p({...de,props:ue,setup(e){const t=e,n=g(()=>t.color?{"--aim-button-bg-color":t.color,"--aim-button-text-color":"var(--aim-color-white)","--aim-button-border-color":t.color}:{}),{n:o}=le("button");return console.log("🚀 ~ file: button.vue:48 ~ n:",o("default")),(a,b)=>(_(),f("button",{class:V([r(o)(),a.type&&r(o)(`--${a.type}`),a.size&&r(o)(`--${a.size}`),a.plain&&"is-plain",a.round&&"is-round",a.circle&&"is-circle",a.disabled&&"is-disabled",a.text&&"is-text"]),style:L({color:a.textColor,...r(n)}),disabled:a.disabled},[s("div",{class:V([r(o)("content")])},[I(a.$slots,"default")],2)],14,pe))}});C.install=e=>{e.component(C.name,C)};const me=C,_e={style:{color:"brown"}},fe=p({name:"AimIcon"}),w=p({...fe,setup(e){return(t,n)=>(_(),f("div",_e,"111"))}});w.install=e=>{e.component(w.name,w)};const be=w,T=Object.freeze(Object.defineProperty({__proto__:null,AimButton:me,AimIcon:be},Symbol.toStringTag,{value:"Module"}));function ve(e,t){return e in t}const h={...T};console.log(T);const ye=function(e){Object.keys(h).forEach(t=>{if(ve(t,h)){const n=h[t].name;e.component(n,h[t])}})},he={install:ye,...T},ge={};function xe(e,t){const n=x("aim-button");return _(),f(z,null,[c(n,{type:"default"},{default:i(()=>[d("默认")]),_:1}),c(n,{type:"primary"},{default:i(()=>[d("主要")]),_:1}),c(n,{type:"info"},{default:i(()=>[d("信息")]),_:1}),c(n,{type:"success"},{default:i(()=>[d("成功")]),_:1}),c(n,{type:"warning"},{default:i(()=>[d("警告")]),_:1}),c(n,{type:"danger"},{default:i(()=>[d("危险")]),_:1})],64)}const Ce=k(ge,[["render",xe]]),we=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),$e=`<template>\r
  <aim-button type="default">默认</aim-button>\r
  <aim-button type="primary">主要</aim-button>\r
  <aim-button type="info">信息</aim-button>\r
  <aim-button type="success">成功</aim-button>\r
  <aim-button type="warning">警告</aim-button>\r
  <aim-button type="danger">危险</aim-button>\r
</template>\r
`,O=Object.assign({"./button/basic.vue":we}),Ae=Object.assign({"./button/basic.vue":$e}),Se=["innerHTML"],Te={class:"example"},Be={class:"example-showcase"},Ve=s("div",{class:"van-divider"},null,-1),Oe={class:"op-btns"},Pe={class:"example-source-wrapper"},je=["innerHTML"],De=s("span",{style:{"padding-left":"8px"}},"隐藏代码",-1),Ee=p({__name:"Demo",props:{source:null,path:null,rawSource:null,description:null},setup(e){const t=e,n=g(()=>{const l={};return Object.keys(O||{}).forEach(u=>{l[u.replace("./","").replace(".vue","")]=O[u].default}),l}),o=R(!0),a=g(()=>(console.log(t),decodeURIComponent(t.source))),b=g(()=>decodeURIComponent(t.description));function v(){o.value=!o.value}function j(){var l=document.createElement("textarea");l.innerHTML=Ae[`./${t.path}.vue`],document.body.appendChild(l),l.select(),document.execCommand("copy"),document.body.removeChild(l)}return(l,u)=>{const y=x("VanIcon"),B=x("VanTooltip"),D=x("VanCollapseTransition");return _(),f("div",null,[s("p",{text:"sm",innerHTML:r(b)},null,8,Se),s("div",Te,[s("div",Be,[r(n)[e.path]?(_(),M(H(r(n)[e.path]),{key:0})):F("",!0)]),Ve,s("div",Oe,[c(B,{content:"复制代码","show-arrow":!1},{default:i(()=>[s("span",{class:"op-btn",onClick:j},[c(y,{name:"document-copy"})])]),_:1}),c(B,{content:"查看源代码","show-arrow":!1},{default:i(()=>[s("span",{class:"op-btn",onClick:u[0]||(u[0]=E=>v())},[c(y,{name:"arrow-left"}),c(y,{name:"arrow-right",style:{"margin-left":"-2px"}})])]),_:1})]),$(s("div",null,null,512),[[A,o.value]]),c(D,null,{default:i(()=>[$(s("div",Pe,[s("div",{class:"example-source language-vue",innerHTML:r(a)},null,8,je)],512),[[A,o.value]])]),_:1}),c(N,{name:"van-fade-in-linear"},{default:i(()=>[$(s("div",{class:"example-float-control",onClick:u[1]||(u[1]=E=>v())},[c(y,{name:"caret-top"}),De],512),[[A,o.value]])]),_:1})])])}}});const Ie={class:"demo-icon"},Le=s("div",{class:"demo-icon-item"},[s("ul",{class:"demo-icon-list"})],-1),ke=[Le],ze=p({__name:"IconList",setup(e){return(t,n)=>(_(),f("div",Ie,ke))}});const Re=[["Demo",Ee],["IconList",ze]],Me={...re,enhanceApp:async({app:e})=>{e.use(he),Re.forEach(([t,n])=>e.component(t,n))}};function P(e){if(e.extends){const t=P(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const m=P(Me),He=p({name:"VitePressApp",setup(){const{site:e}=G();return K(()=>{W(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),q(),J(),Q(),m.setup&&m.setup(),()=>X(m.Layout)}});async function Fe(){const e=Ue(),t=Ne();t.provide(Y,e);const n=Z(e.route);return t.provide(ee,n),t.component("Content",te),t.component("ClientOnly",ne),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),m.enhanceApp&&await m.enhanceApp({app:t,router:e,siteData:oe}),{app:t,router:e,data:n}}function Ne(){return ae(He)}function Ue(){let e=S,t;return se(n=>{let o=ce(n);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),S&&(e=!1),ie(()=>import(o),[])},m.NotFound)}S&&Fe().then(({app:e,router:t,data:n})=>{t.go().then(()=>{U(t.route,n.site),e.mount("#app")})});export{Fe as createApp};