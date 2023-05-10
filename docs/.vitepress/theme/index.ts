import DefaultTheme from 'vitepress/theme';
import './style/var.css';
import AimPlus from 'aim-plus';
import { globals } from '../vitepress';

// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
// import Theme from 'vitepress/dist/client/theme-default/index.js';

export default {
  // ...Theme,
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(AimPlus);

    globals.forEach(([name, comp]) => app.component(name, comp));
  }
};
