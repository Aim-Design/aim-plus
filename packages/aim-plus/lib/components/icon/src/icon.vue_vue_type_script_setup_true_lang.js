"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./styles/icon.css");const l=require("../../../utils/components.js"),u=require("../../../utils/types.js"),a=require("../../../utils/style.js"),t=require("./icon.js"),d=["innerHTML"],p=e.defineComponent({name:"AimIcon"}),m=e.defineComponent({...p,props:t.IconProps,setup(s){const o=s,{n:r}=l.createNamespace("icon");console.log(o);const c=e.computed(()=>t.getIcon(o.name)),i=e.computed(()=>!o.size&&!o.color?{}:{fontSize:u.isUndefined(o.size)?void 0:a.addUnit(o.size),"--color":o.color});return(n,f)=>(e.openBlock(),e.createElementBlock("i",{class:e.normalizeClass([e.unref(r)(),n.rotate&&"is-rotate"]),style:e.normalizeStyle(e.unref(i))},[e.createElementVNode("use",{innerHTML:e.unref(c)},null,8,d),e.renderSlot(n.$slots,"default")],6))}});exports.default=m;
