import _Button from './src/button.vue';
import type { App } from 'vue';

_Button.install = (app: App): void => {
  app.component(_Button.name, _Button);
};

export const AimButton = _Button;

export default AimButton;
