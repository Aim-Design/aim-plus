"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./styles/link.css");const t=require("../../../utils/components.js"),o=require("./link2.js"),i=["href"],l=e.defineComponent({name:"AimLink"}),u=e.defineComponent({...l,props:o.LinkProps,setup(a){const r=e.useAttrs(),{n:s}=t.createNamespace("link");return(n,d)=>(e.openBlock(),e.createElementBlock("a",e.mergeProps({class:[e.unref(s)(),n.type&&e.unref(s)(`--${n.type}`),n.disabled&&"is-disabled",n.underline&&"is-underline"],href:n.disabled?void 0:n.href},e.unref(r)),[e.renderSlot(n.$slots,"default")],16,i))}});exports.default=u;
