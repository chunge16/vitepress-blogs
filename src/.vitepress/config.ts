import { defineConfig } from '@jcamp/vitepress-blog-theme/config';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-blogs/',
  title: '春哥的博客',
  description: '行到水穷处，坐看云起时',
  themeConfig: {
    blog: {
      title: '春哥的博客',
      description: '行到水穷处，坐看云起时',
      defaultAuthor: 'chunge',
      categoryIcons: {
        article: 'i-[heroicons-outline/book-open]',
        tutorial: 'i-[heroicons-outline/academic-cap]',
        document: 'i-[heroicons-outline/annotation]',
      },
      tagIcons: {
        github: 'i-[carbon/logo-github]',
        vue: 'i-[carbon/logo-vue]',
        react: 'i-[carbon/logo-react]',
        'web development': 'i-[icon-park/upload-web]'
      },
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Blog',
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
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 春哥'
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    // ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/chunge16/vitepress-blogs',
      },
    ],
  },
  head: [['link', { rel: 'icon', href: '/img/cat-with-wry-smile.svg' }]]
})
