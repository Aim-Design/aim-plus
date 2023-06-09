import { defineComponent as r, computed as n, openBlock as l, createElementBlock as a, normalizeClass as p, unref as o, normalizeStyle as f, createElementVNode as d, renderSlot as u } from "vue";
import "./styles/icon.css";
import { createNamespace as _ } from "../../../utils/components.mjs";
import { isUndefined as z } from "../../../utils/types.mjs";
import { addUnit as y } from "../../../utils/style.mjs";
import { IconProps as I, getIcon as S } from "./icon.mjs";
const h = ["innerHTML"], k = r({ name: "AimIcon" }), T = /* @__PURE__ */ r({
  ...k,
  props: I,
  setup(s) {
    const e = s, { n: i } = _("icon"), c = n(() => S(e.name)), m = n(() => !e.size && !e.color ? {} : {
      fontSize: z(e.size) ? void 0 : y(e.size),
      "--color": e.color
    });
    return (t, B) => (l(), a("i", {
      class: p([o(i)(), t.rotate && "is-rotate"]),
      style: f(o(m))
    }, [
      d("use", { innerHTML: o(c) }, null, 8, h),
      u(t.$slots, "default")
    ], 6));
  }
});
export {
  T as default
};
