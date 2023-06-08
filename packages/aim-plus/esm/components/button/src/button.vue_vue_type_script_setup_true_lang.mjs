import { defineComponent as l, computed as a, openBlock as d, createElementBlock as c, normalizeClass as s, unref as t, normalizeStyle as m, createElementVNode as p, renderSlot as u } from "vue";
import "./styles/button.css";
import { createNamespace as b } from "../../../utils/components.mjs";
import { ButtonProps as f } from "./button2.mjs";
const y = ["disabled"], z = l({ name: "AimButton" }), k = /* @__PURE__ */ l({
  ...z,
  props: f,
  setup(n) {
    const r = n, i = a(
      () => r.color ? {
        "--aim-button-bg-color": r.color,
        "--aim-button-text-color": "var(--aim-color-white)",
        "--aim-button-border-color": r.color
      } : {}
    ), { n: e } = b("button");
    return console.log(e(`--${r.size}`)), (o, B) => (d(), c("button", {
      class: s([
        t(e)(),
        o.type && t(e)(`--${o.type}`),
        o.size && t(e)(`--${o.size}`),
        o.plain && "is-plain",
        o.round && "is-round",
        o.circle && "is-circle",
        o.disabled && "is-disabled",
        o.text && "is-text"
      ]),
      style: m({
        color: o.textColor,
        ...t(i)
      }),
      disabled: o.disabled
    }, [
      p("div", {
        class: s([t(e)("content")])
      }, [
        u(o.$slots, "default")
      ], 2)
    ], 14, y));
  }
});
export {
  k as default
};
