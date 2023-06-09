import * as m from "./components.mjs";
import { svgs as p } from "./icon/src/icon.mjs";
import { isValidKey as s } from "../utils/types.mjs";
import { AimButton as x } from "./button/index.mjs";
import { AimIcon as u } from "./icon/index.mjs";
const o = {
  ...m
}, i = function(n) {
  Object.keys(o).forEach((t) => {
    if (s(t, o)) {
      const r = o[t].name;
      n.component(r, o[t]);
    }
  });
}, e = {
  install: i,
  ...m
};
export {
  x as AimButton,
  u as AimIcon,
  e as default,
  p as svgs
};
