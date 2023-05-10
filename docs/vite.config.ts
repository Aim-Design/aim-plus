/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';

/**
 * 上面的图片对应关系中已经了解了 Demo 组件，mdPlugin 返回的是 jsx 类型的组件
 * 因此需要在 vite.config.ts 中进行配置，先安装依赖 pnpm add @vitejs/plugin-vue-jsx -D，配置如下
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx(), DefineOptions()],
  server: {
    port: 3002
  }
});
