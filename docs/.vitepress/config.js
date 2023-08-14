import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-blogs/",
  title: "春哥的博客",
  description: "行到水穷处，坐看云起时",
  head: [
    ['link', { rel: 'icon', href: '/cat-with-wry-smile.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
    blog: {
      title: 'Blog',
      description: 'All these articles were written by AI!',
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
        git: 'i-[logos/git-icon]'
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


async function processData(
    pageData,
    ctx,
    aside = 'left',
    sidebar = false
) {
  const config = ctx?.siteConfig?.site?.themeConfig;
  const postsPattern = config.blog?.postsPath ?? 'blog/posts'
  const authorsPattern = config.blog?.authorsPath ?? 'blog/authors'

  if (pageData.relativePath.includes(postsPattern)) {
    pageData.frontmatter.blog = 'post'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
  if (pageData.relativePath.includes(authorsPattern)) {
    pageData.frontmatter.blog = 'author'
    pageData.frontmatter.aside = aside
    pageData.frontmatter.sidebar = sidebar
    pageData.frontmatter.prev = false
    pageData.frontmatter.next = false
  }
}
