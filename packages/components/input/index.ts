import _Input from './src/input.vue';

import type { App } from 'vue';

_Input.install = (app: App): void => {
  app.component(_Input.name, _Input);
};

export const AimInput = _Input;
export default AimInput;
