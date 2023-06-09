import { defineComponent as l, computed as a, openBlock as d, createElementBlock as m, normalizeClass as s, unref as e, normalizeStyle as c, createElementVNode as p, renderSlot as u } from "vue";
import "./styles/button.css";
import { createNamespace as b } from "../../../utils/components.mjs";
import { ButtonProps as f } from "./button2.mjs";
const y = ["disabled"], z = l({ name: "AimButton" }), v = /* @__PURE__ */ l({
  ...z,
  props: f,
  setup(n) {
    const r = n, i = a(
      () => r.color ? {
        "--aim-button-bg-color": r.color,
        "--aim-button-text-color": "var(--aim-color-white)",
        "--aim-button-border-color": r.color
      } : {}
    ), { n: t } = b("button");
    return (o, B) => (d(), m("button", {
      class: s([
        e(t)(),
        o.type && e(t)(`--${o.type}`),
        o.size && e(t)(`--${o.size}`),
        o.plain && "is-plain",
        o.round && "is-round",
        o.circle && "is-circle",
        o.disabled && "is-disabled",
        o.text && "is-text"
      ]),
      style: c({
        color: o.textColor,
        ...e(i)
      }),
      disabled: o.disabled
    }, [
      p("div", {
        class: s([e(t)("content")])
      }, [
        u(o.$slots, "default")
      ], 2)
    ], 14, y));
  }
});
export {
  v as default
};
