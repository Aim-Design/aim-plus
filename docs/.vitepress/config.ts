import { defineConfig } from 'vitepress';
import { mdPlugin } from './config/plugins';
import { getNav } from './config/nav';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: 'AimPlus',
  description: '一个Vue3组件库',
  lang: 'cn-ZH',
  base: isProd ? '/aim-plus/' : '/',
  lastUpdated: true,
  head: [
    [
      'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
      {
        rel: 'icon',
        href: './favicon.ico'
      }
    ]
  ],

  themeConfig: {
    logo: '/favicon.ico',
    siteTitle: 'AimPlus',
    /* 右侧大纲配置 */
    outline: 2, //几级标题才显示锚点列表 要在大纲中显示的标题级别。您可以通过传递一个数字来指定一个特定的级别
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Aim-Design/aim-plus' }
    ],
    nav: getNav(),
    sidebar: {
      '/guild/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guild/installation'
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        }
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button/index.md' },
            { text: 'Icon 图标', link: '/components/icon/index.md' }
          ]
        },
        {
          text: '表单组件',
          items: [
            // {
            //   text: '条件查询组件',
            //   link: '/components/TQueryCondition/base.md'
            // },
            // { text: '表单组件', link: '/components/TForm/base.md' },
            // { text: 'table组件', link: '/components/TTable/base.md' }
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true,
    config: (md) => mdPlugin(md)
  }
});
