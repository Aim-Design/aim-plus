import _Icon from './src/icon.vue';

import type { App } from 'vue';

_Icon.install = (app: App): void => {
  app.component(_Icon.name, _Icon);
};

export const AimIcon = _Icon;
export default AimIcon;
