import type { PropType } from 'vue';

function typeValidator(type: string): boolean {
  return [
    'default',
    'primary',
    'info',
    'success',
    'warning',
    'danger'
  ].includes(type);
}

function sizeValidator(size: string): boolean {
  return ['normal', 'mini', 'small', 'large'].includes(size);
}

export const ButtonProps = {
  type: {
    type: String as PropType<
      'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
    >,
    default: 'default',
    validator: typeValidator
  },
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    validator: sizeValidator
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
    default: true
  }
};
