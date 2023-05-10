import { defineComponent as n, computed as a, openBlock as d, createElementBlock as u, normalizeClass as r, unref as t, normalizeStyle as c, createElementVNode as m, renderSlot as p } from "vue";
import "./styles/button.css";
import { createNamespace as b } from "../../../utils/components.mjs";
import { ButtonProps as f } from "./button2.mjs";
const y = ["disabled"], z = n({ name: "AimButton" }), g = /* @__PURE__ */ n({
  ...z,
  props: f,
  setup(s) {
    const l = s, i = a(
      () => l.color ? {
        "--aim-button-bg-color": l.color,
        "--aim-button-text-color": "var(--aim-color-white)",
        "--aim-button-border-color": l.color
      } : {}
    ), { n: e } = b("button");
    return console.log("\u{1F680} ~ file: button.vue:48 ~ n:", e("default")), (o, B) => (d(), u("button", {
      class: r([
        t(e)(),
        o.type && t(e)(`--${o.type}`),
        o.size && t(e)(`--${o.size}`),
        o.plain && "is-plain",
        o.round && "is-round",
        o.circle && "is-circle",
        o.disabled && "is-disabled",
        o.text && "is-text"
      ]),
      style: c({
        color: o.textColor,
        ...t(i)
      }),
      disabled: o.disabled
    }, [
      m("div", {
        class: r([t(e)("content")])
      }, [
        p(o.$slots, "default")
      ], 2)
    ], 14, y));
  }
});
export {
  g as default
};
