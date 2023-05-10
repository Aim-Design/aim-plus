import type { DefaultTheme } from 'vitepress';

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '安装指南',
      link: '/guild/'
    },
    { text: '基础组件', link: '/components/button/index' }
  ];
};
