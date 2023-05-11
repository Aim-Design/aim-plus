"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./styles/button.css");const r=require("../../../utils/components.js"),u=require("./button2.js"),i=["disabled"],a=e.defineComponent({name:"AimButton"}),c=e.defineComponent({...a,props:u.ButtonProps,setup(s){const n=s,l=e.computed(()=>n.color?{"--aim-button-bg-color":n.color,"--aim-button-text-color":"var(--aim-color-white)","--aim-button-border-color":n.color}:{}),{n:t}=r.createNamespace("button");return console.log("\u{1F680} ~ file: button.vue:48 ~ n:",t("default")),(o,d)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass([e.unref(t)(),o.type&&e.unref(t)(`--${o.type}`),o.size&&e.unref(t)(`--${o.size}`),o.plain&&"is-plain",o.round&&"is-round",o.circle&&"is-circle",o.disabled&&"is-disabled",o.text&&"is-text"]),style:e.normalizeStyle({color:o.textColor,...e.unref(l)}),disabled:o.disabled},[e.createElementVNode("div",{class:e.normalizeClass([e.unref(t)("content")])},[e.renderSlot(o.$slots,"default")],2)],14,i))}});exports.default=c;