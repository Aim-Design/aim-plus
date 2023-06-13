import { ExtractPropTypes } from 'vue';

export const UploadTypes = ['primary', 'success', 'info', 'warning', 'danger'];

export const UploadProps = {
  type: {
    type: String,
    validator(value: string) {
      return UploadTypes.includes(value);
    }
  },
  icon: String,
  href: String,
  disabled: Boolean,
  border: Boolean,
  underline: Boolean
};

export type UploadProps = ExtractPropTypes<typeof UploadProps>;
