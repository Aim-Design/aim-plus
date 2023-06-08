import * as n from './components.mjs';
import { svgs as p } from './icon/src/icon.mjs';
import { isValidKey as r } from '../utils/types.mjs';
import { AimButton as x } from './button/index.mjs';
import { AimIcon as u } from './icon/index.mjs';
const o = {
  ...n
};
const c = function (m) {
    Object.keys(o).forEach((t) => {
      if (r(t, o)) {
        const s = o[t].name;
        m.component(s, o[t]);
      }
    });
  },
  i = {
    install: c,
    ...n
  };
export { x as AimButton, u as AimIcon, i as default, p as svgs };
