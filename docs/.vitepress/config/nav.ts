import type { DefaultTheme } from 'vitepress';

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '安装指南',
      link: '/guild/installation'
    },
    { text: '基础组件', link: '/components/button/index' }
  ];
};
