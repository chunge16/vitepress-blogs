import { defineConfig } from 'vitepress';
import {processData} from '../../vitepress-blogs-theme/config/index.js';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-blogs/",
  cleanUrls: true,
  title: "春哥的博客",
  description: "行到水穷处，坐看云起时",
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: 'keywords' }],
    ['meta', { name: 'author', content: '春哥' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: 'name' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'name' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],

  ],
  themeConfig: {
    search: {
      provider: 'algolia',
      options: {
        appId: 'XWQOSQ1EBO',
        apiKey: 'ba5f7ee8c7f40ed8c9fd2044e5516c10',
        indexName: 'chunge16vitepress'
      }
    },
    logo: '/cat-with-wry-smile.svg',
    lastUpdated: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '随笔',
        link: '/casualEssay/RollingStoneLoveStory',
        activeMatch: '/casualEssay/',
      },
      {
        text: '博客',
        activeMatch: '/blog/',
        items: [
          {
            text: '博客首页',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: '标签',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: '档案',
            link: '/blog/archives',
            activeMatch: '/blog/archives',
          },
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ],
      },
    ],
    sidebar: {
      '/casualEssay/': sidebarCasualEssay(),
    },
    blog: {
      title: 'Blog',
      description: 'All these articles were written by chunge!',
      defaultAuthor: 'chunge',
      categoryIcons: {
        article: 'i-[carbon/notebook]',
        tutorial: 'i-[carbon/book]',
        document: 'i-[carbon/document]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[logos/vue]',
        javascript: 'i-[logos/javascript]',
        'web development': 'i-[carbon/development]',
        html: 'i-[logos/html-5]',
        git: 'i-[logos/git-icon]',
        vite: 'i-[logos/vitejs]'
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chunge16/vitepress-blogs/tree/main/vitepress-blogs-theme' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present chunge'
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});


function sidebarCasualEssay(){
  return [
    {
      text: '滚石爱情故事集',
      collapsed: false,
      items: [
        {
          text: '滚石爱情故事',
          link: '/casualEssay/RollingStoneLoveStory',
        },
      ],
    },
  ];
}
