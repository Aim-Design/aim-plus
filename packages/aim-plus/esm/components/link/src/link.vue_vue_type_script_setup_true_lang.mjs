import { defineComponent as s, useAttrs as t, openBlock as i, createElementBlock as a, mergeProps as d, unref as r, renderSlot as p } from "vue";
import "./styles/link.css";
import { createNamespace as l } from "../../../utils/components.mjs";
import { LinkProps as m } from "./link2.mjs";
const f = ["href"], u = s({ name: "AimLink" }), A = /* @__PURE__ */ s({
  ...u,
  props: m,
  setup(c) {
    const n = t(), { n: o } = l("link");
    return (e, b) => (i(), a("a", d({
      class: [
        r(o)(),
        e.type && r(o)(`--${e.type}`),
        e.disabled && "is-disabled",
        e.underline && "is-underline",
        e.border && "is-border"
      ],
      href: e.disabled ? void 0 : e.href
    }, r(n)), [
      p(e.$slots, "default")
    ], 16, f));
  }
});
export {
  A as default
};
