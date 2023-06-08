import { defineComponent as r, computed as t, openBlock as m, createElementBlock as a, normalizeClass as p, unref as o, normalizeStyle as d, createElementVNode as f, renderSlot as u } from "vue";
import "./styles/icon.css";
import { createNamespace as _ } from "../../../utils/components.mjs";
import { isUndefined as z } from "../../../utils/types.mjs";
import { addUnit as g } from "../../../utils/style.mjs";
import { IconProps as y, getIcon as I } from "./icon.mjs";
const S = ["innerHTML"], h = r({ name: "AimIcon" }), N = /* @__PURE__ */ r({
  ...h,
  props: y,
  setup(i) {
    const e = i, { n: s } = _("icon"), c = t(() => I(e.name)), l = t(() => !e.size && !e.color ? {} : {
      fontSize: z(e.size) ? void 0 : g(e.size),
      "--color": e.color
    });
    return (n, k) => (m(), a("i", {
      class: p([o(s)(), n.loading && "is-loading"]),
      style: d(o(l))
    }, [
      f("use", { innerHTML: o(c) }, null, 8, S),
      u(n.$slots, "default")
    ], 6));
  }
});
export {
  N as default
};
