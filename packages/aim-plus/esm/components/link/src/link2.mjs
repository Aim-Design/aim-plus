const e = ["primary", "success", "info", "warning", "danger"], r = {
  type: {
    type: String,
    validator(n) {
      return e.includes(n);
    }
  },
  icon: String,
  href: String,
  disabled: Boolean,
  underline: {
    type: Boolean,
    default: !0
  }
};
export {
  r as LinkProps,
  e as LinkTypes
};
