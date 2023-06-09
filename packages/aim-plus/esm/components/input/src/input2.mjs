const e = {
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: [Number, String, Boolean, Object],
    default: ""
  },
  placeholder: {
    type: String,
    default: "\u8BF7\u8F93\u5165"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: String
  },
  prefixIcon: {
    type: String
  },
  showPassword: Boolean,
  autofocus: Boolean
};
export {
  e as InputProps
};
