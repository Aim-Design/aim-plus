import { isString as n, isNumber as $ } from "./common.mjs";
function o(r, i = "px") {
  if (!r)
    return "";
  if (n(r))
    return `${r}`.indexOf(i) === -1 ? `${r}${i}` : r;
  if ($(r))
    return `${r}${i}`;
}
export {
  o as addUnit
};
