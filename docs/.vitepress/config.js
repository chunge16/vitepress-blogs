import { defineConfig } from 'vitepress';
import {processData} from '../../vitepress-blogs-theme/config/index.js'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-blogs/",
  title: "春哥的博客",
  description: "行到水穷处，坐看云起时",
  head: [
    ['link', { rel: 'icon', href: '/cat-with-wry-smile.svg' }],
  ],
  themeConfig: {
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
        text: 'Blog',
        activeMatch: '/blog/',
        items: [
          {
            text: 'Blog Home',
            link: '/blog/',
            activeMatch: '/blog/$',
          },
          {
            text: 'Tags',
            link: '/blog/tags',
            activeMatch: '/blog/tags',
          },
          {
            text: 'Archives',
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx)
  },
})


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
