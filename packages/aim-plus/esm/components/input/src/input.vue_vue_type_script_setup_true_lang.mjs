import { defineComponent as V, useAttrs as A, computed as y, ref as i, openBlock as a, createElementBlock as p, normalizeClass as d, unref as e, renderSlot as B, createBlock as c, createCommentVNode as m, withDirectives as k, createElementVNode as N, mergeProps as _, isRef as D, vModelDynamic as E, withModifiers as S, vShow as $ } from "vue";
import "./styles/input.css";
import { createNamespace as z } from "../../../utils/components.mjs";
import { AimIcon as f } from "../../icon/index.mjs";
import { InputProps as L } from "./input2.mjs";
const R = ["disabled", "placeholder"], U = V({ name: "AimInput" }), J = /* @__PURE__ */ V({
  ...U,
  props: L,
  emits: ["update:modelValue", "focus", "blur", "clear"],
  setup(b, { emit: v }) {
    const s = b, w = A(), { n } = z("input"), l = y({
      get: () => s.modelValue,
      set: (o) => {
        console.log(o), o ? r.value = !0 : r.value = !1, v("update:modelValue", o);
      }
    }), r = i(!1), C = () => {
      l.value = "", v("update:modelValue", "");
    };
    function P() {
      r.value = s.clearable;
    }
    function I() {
      r.value = !!l.value;
    }
    const t = i(), u = i(!0);
    Promise.resolve().then(() => {
      !s.showPassword || (t.value.type = "password");
    });
    const M = () => {
      if (u.value = !u.value, t.value.type === "password") {
        t.value.type = w.type || "text";
        return;
      }
      t.value.type = "password";
    }, x = y(() => ({
      "is-disabled": s.disabled
    }));
    return (o, h) => (a(), p("div", {
      class: d([e(n)()]),
      onMouseenter: P,
      onMouseleave: I
    }, [
      o.$slots.prefix || o.prefixIcon ? (a(), p("span", {
        key: 0,
        class: d(e(n)("prefix"))
      }, [
        B(o.$slots, "prefix"),
        o.prefixIcon ? (a(), c(e(f), {
          key: 0,
          name: o.prefixIcon
        }, null, 8, ["name"])) : m("", !0)
      ], 2)) : m("", !0),
      k(N("input", _({
        ref_key: "input",
        ref: t,
        class: [e(n)("inner"), e(x)],
        disabled: s.disabled,
        placeholder: s.placeholder,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => D(l) ? l.value = g : null)
      }, e(w)), null, 16, R), [
        [E, e(l)]
      ]),
      s.clearable || s.showPassword ? (a(), p("span", {
        key: 1,
        class: d(e(n)("suffix"))
      }, [
        o.showPassword ? (a(), c(e(f), {
          key: 0,
          name: u.value ? "eye" : "eye-slash",
          onClick: M
        }, null, 8, ["name"])) : k((a(), c(e(f), {
          key: 1,
          name: "x-circle",
          onClick: S(C, ["stop"])
        }, null, 8, ["onClick"])), [
          [$, r.value && e(l)]
        ])
      ], 2)) : m("", !0)
    ], 34));
  }
});
export {
  J as default
};
