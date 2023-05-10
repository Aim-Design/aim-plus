import * as n from "./components.mjs";
import { isValidKey as i } from "../utils/type.mjs";
import { AimButton as p } from "./button/index.mjs";
import { AimIcon as A } from "./icon/index.mjs";
const o = {
  ...n
};
console.log(n);
const s = function(m) {
  Object.keys(o).forEach((t) => {
    if (i(t, o)) {
      const c = o[t].name;
      m.component(c, o[t]);
    }
  });
}, r = {
  install: s,
  ...n
};
export {
  p as AimButton,
  A as AimIcon,
  r as default
};
