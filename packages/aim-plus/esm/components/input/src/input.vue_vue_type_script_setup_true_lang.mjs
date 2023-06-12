import { defineComponent as V, useAttrs as A, computed as y, ref as i, openBlock as a, createElementBlock as p, normalizeClass as c, unref as o, renderSlot as B, createBlock as d, createCommentVNode as m, withDirectives as k, createElementVNode as N, mergeProps as _, isRef as D, vModelDynamic as E, withModifiers as S, vShow as $ } from "vue";
import "./styles/input.css";
import { createNamespace as z } from "../../../utils/components.mjs";
import { AimIcon as f } from "../../icon/index.mjs";
import { InputProps as L } from "./input2.mjs";
const R = ["disabled", "placeholder"], U = V({ name: "AimInput" }), J = /* @__PURE__ */ V({
  ...U,
  props: L,
  emits: ["update:modelValue", "focus", "blur", "clear"],
  setup(b, { emit: v }) {
    const l = b, w = A(), { n } = z("input"), s = y({
      get: () => l.modelValue,
      set: (e) => {
        console.log(e), e ? r.value = !0 : r.value = !1, v("update:modelValue", e);
      }
    }), r = i(!1), C = () => {
      s.value = "", v("update:modelValue", "");
    };
    function P() {
      r.value = l.clearable;
    }
    function I() {
      r.value = !!s.value;
    }
    const t = i(), u = i(!0);
    Promise.resolve().then(() => {
      !l.showPassword || (t.value.type = "password");
    }).catch((e) => {
      console.log(e);
    });
    const M = () => {
      if (u.value = !u.value, t.value.type === "password") {
        t.value.type = w.type || "text";
        return;
      }
      t.value.type = "password";
    }, x = y(() => ({
      "is-disabled": l.disabled
    }));
    return (e, h) => (a(), p("div", {
      class: c([o(n)()]),
      onMouseenter: P,
      onMouseleave: I
    }, [
      e.$slots.prefix || e.prefixIcon ? (a(), p("span", {
        key: 0,
        class: c(o(n)("prefix"))
      }, [
        B(e.$slots, "prefix"),
        e.prefixIcon ? (a(), d(o(f), {
          key: 0,
          name: e.prefixIcon
        }, null, 8, ["name"])) : m("", !0)
      ], 2)) : m("", !0),
      k(N("input", _({
        ref_key: "input",
        ref: t,
        class: [o(n)("inner"), o(x)],
        disabled: l.disabled,
        placeholder: l.placeholder,
        "onUpdate:modelValue": h[0] || (h[0] = (g) => D(s) ? s.value = g : null)
      }, o(w)), null, 16, R), [
        [E, o(s)]
      ]),
      l.clearable || l.showPassword ? (a(), p("span", {
        key: 1,
        class: c(o(n)("suffix"))
      }, [
        e.showPassword ? (a(), d(o(f), {
          key: 0,
          name: u.value ? "eye" : "eye-slash",
          onClick: M
        }, null, 8, ["name"])) : k((a(), d(o(f), {
          key: 1,
          name: "x-circle",
          onClick: S(C, ["stop"])
        }, null, 8, ["onClick"])), [
          [$, r.value && o(s)]
        ])
      ], 2)) : m("", !0)
    ], 34));
  }
});
export {
  J as default
};
