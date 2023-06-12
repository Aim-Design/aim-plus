import { defineComponent as s, useAttrs as t, openBlock as i, createElementBlock as a, mergeProps as p, unref as r, renderSlot as d } from "vue";
import "./styles/link.css";
import { createNamespace as l } from "../../../utils/components.mjs";
import { LinkProps as m } from "./link2.mjs";
const f = ["href"], u = s({ name: "AimLink" }), A = /* @__PURE__ */ s({
  ...u,
  props: m,
  setup(c) {
    const n = t(), { n: o } = l("link");
    return (e, h) => (i(), a("a", p({
      class: [
        r(o)(),
        e.type && r(o)(`--${e.type}`),
        e.disabled && "is-disabled",
        e.underline && "is-underline"
      ],
      href: e.disabled ? void 0 : e.href
    }, r(n)), [
      d(e.$slots, "default")
    ], 16, f));
  }
});
export {
  A as default
};
