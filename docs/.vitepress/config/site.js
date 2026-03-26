const currentYear = new Date().getFullYear();

export const siteTitle = '春哥的博客';
export const siteDescription = '行到水穷处，坐看云起时';
export const siteLogo = '/cat-with-wry-smile.svg';

const casualEssayPath = '/casualEssay/RollingStoneLoveStory';

const blogItems = [
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
];

const blogCategoryIcons = {
  article: 'i-[carbon--notebook]',
  tutorial: 'i-[carbon--book]',
  document: 'i-[carbon--document]',
};

const blogTagIcons = {
  github: 'i-[carbon--logo-github]',
  vue: 'i-[logos--vue]',
  javascript: 'i-[logos--javascript]',
  'web development': 'i-[carbon--development]',
  html: 'i-[logos--html-5]',
  git: 'i-[logos--git-icon]',
  vite: 'i-[logos--vitejs]',
  locked: 'i-[carbon--locked]',
  react: 'i-[logos--react]',
  blog: 'i-[carbon--blog]',
  comment: 'i-[carbon--add-comment]',
};

const giscusConfig = {
  repo: 'chunge16/vitepress-blogs',
  repoId: 'R_kgDOKFcWWg',
  category: 'General',
  categoryId: 'DIC_kwDOKFcWWs4Cav-W',
  mapping: 'pathname',
  inputPosition: 'top',
  lang: 'zh-CN',
  lightTheme: 'light',
  darkTheme: 'transparent_dark',
  defaultEnable: true,
};

export const siteHead = [
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['meta', { name: 'keywords', content: 'keywords' }],
  ['meta', { name: 'author', content: '春哥' }],
  ['meta', { property: 'og:type', content: 'article' }],
  ['meta', { name: 'application-name', content: 'name' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'name' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
  ['link', { rel: 'shortcut icon', href: 'cat-with-wry-smile.svg' }],
  ['link', { rel: 'icon', type: 'image/x-icon', href: 'cat-with-wry-smile.svg' }],
];

function createNav() {
  return [
    { text: 'Home', link: '/' },
    {
      text: '随笔',
      link: casualEssayPath,
      activeMatch: '/casualEssay/',
    },
    {
      text: '博客',
      activeMatch: '/blog/',
      items: blogItems,
    },
  ];
}

function createSidebar() {
  return {
    '/casualEssay/': [
      {
        text: '滚石爱情故事集',
        collapsed: false,
        items: [
          {
            text: '滚石爱情故事',
            link: casualEssayPath,
          },
        ],
      },
    ],
  };
}

function createFooter() {
  return {
    message: 'Released under the MIT License.',
    copyright: `Copyright © 2023-${currentYear} chunge`,
  };
}

export const siteThemeConfig = {
  search: {
    provider: 'algolia',
    options: {
      appId: 'XWQOSQ1EBO',
      apiKey: 'ba5f7ee8c7f40ed8c9fd2044e5516c10',
      indexName: 'chunge16vitepress',
    },
  },
  logo: siteLogo,
  lastUpdated: true,
  nav: createNav(),
  sidebar: createSidebar(),
  blog: {
    title: 'Blog',
    description: 'All these articles were written by chunge!',
    defaultAuthor: 'chunge',
    categoryIcons: blogCategoryIcons,
    tagIcons: blogTagIcons,
    giscus: giscusConfig,
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/chunge16/vitepress-blogs/tree/main/vitepress-blogs-theme' },
  ],
  footer: createFooter(),
  outline: {
    level: 'deep',
    label: '目录',
  },
};
