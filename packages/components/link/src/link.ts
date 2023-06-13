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
  border: Boolean,
  underline: Boolean
};

export type LinkProps = ExtractPropTypes<typeof LinkProps>;
