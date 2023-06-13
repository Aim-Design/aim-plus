import _Upload from './src/upload.vue';

import type { App } from 'vue';

_Upload.install = (app: App): void => {
  app.component(_Upload.name, _Upload);
};

export const AimUpload = _Upload;
export default AimUpload;
