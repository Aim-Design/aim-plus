import _Link from './src/link.vue';

import type { App } from 'vue';

_Link.install = (app: App): void => {
  app.component(_Link.name, _Link);
};

export const AimLink = _Link;
export default AimLink;
