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
  border: Boolean,
  underline: Boolean
};
export {
  r as LinkProps,
  e as LinkTypes
};
