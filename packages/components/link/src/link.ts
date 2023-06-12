import { ExtractPropTypes } from 'vue';

export const LinkTypes = ['primary', 'success', 'info', 'warning', 'danger'];

export const LinkProps = {
  type: {
    type: String,
    validator(value: string) {
      return LinkTypes.includes(value);
    }
  },
  icon: String,
  href: String,
  disabled: Boolean,
  underline: {
    type: Boolean,
    default: true
  }
};

export type LinkProps = ExtractPropTypes<typeof LinkProps>;
