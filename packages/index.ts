export * from './components';
import * as components from './components';
import { isValidKey } from './utils';

import type { App, Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;

const AimUI = {
  ...components
  // iButton: components.Button,
};

const install = function (app: App): void {
  //registe components
  Object.keys(AimUI).forEach((key) => {
    if (isValidKey(key, AimUI)) {
      const name = (AimUI[key] as any).name;
      app.component(name, AimUI[key]);
    }
  });
};
const Aim = {
  // version,
  // locale,
  // i18n,
  install,
  // lang,
  // // Circle,
  // // Switch,
  ...components
};
console.log('0000');

export default Aim;
