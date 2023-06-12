import type { DefaultTheme } from 'vitepress';

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    {
      text: '安装指南',
      link: '/guild/installation'
    },
    { text: '基础组件', link: '/components/button/index' },
    {
      text: '设计资源',
      link: 'https://www.figma.com/community/file/1179068859697769656/Preline-UI-Figma'
    }
  ];
};
