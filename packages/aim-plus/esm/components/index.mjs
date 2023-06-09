import * as m from "./components.mjs";
import { svgs as a } from "./icon/src/icon.mjs";
import { isValidKey as i } from "../utils/types.mjs";
import { AimButton as A } from "./button/index.mjs";
import { AimIcon as u } from "./icon/index.mjs";
import { AimInput as d } from "./input/index.mjs";
const o = {
  ...m
}, s = function(n) {
  Object.keys(o).forEach((t) => {
    if (i(t, o)) {
      const r = o[t].name;
      n.component(r, o[t]);
    }
  });
}, c = {
  install: s,
  ...m
};
export {
  A as AimButton,
  u as AimIcon,
  d as AimInput,
  c as default,
  a as svgs
};
