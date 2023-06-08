function e(o) {
  return [
    "default",
    "primary",
    "info",
    "success",
    "warning",
    "danger"
  ].includes(o);
}
function t(o) {
  return ["normal", "mini", "small", "large"].includes(o);
}
const n = {
  type: {
    type: String,
    default: "default",
    validator: e
  },
  size: {
    type: String,
    validator: t
  },
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  text: Boolean,
  icon: String,
  color: String,
  disabled: Boolean,
  textColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !0
  }
};
export {
  n as ButtonProps
};
