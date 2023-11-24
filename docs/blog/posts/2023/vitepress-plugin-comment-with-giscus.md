---
date: 2023-11-08
title: '推荐一个 vitepress 评论插件'
category: Document
tags:
  - vite
  - comment
  - vue
---

## 1. 背景

![docsearch](/giscusTalk/img_3.png)

最近寻找一个`vitepess`评论插件，发现了一个不错的插件，分享给大家

## 2. vitepress-plugin-comment-with-giscus

> 一个基于 [Giscus](https://giscus.app/) 的`vitepess`评论插件

### 2.1 安装

::: code-group

```shell [npm]
npm i vitepress-plugin-comment-with-giscus
```

```shell [yarn]
yarn add vitepress-plugin-comment-with-giscus
```

```shell [pnpm]

pnpm add vitepress-plugin-comment-with-giscus

```


:::

### 2.2 使用

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();
        
        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'your github repository', 
            repoId: 'your repository id',   
            category: 'your category', // default: `General` 
            categoryId: 'your category id', 
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'en', // default: `zh-CN`
            lightTheme: 'light', // default: `light`
            darkTheme: 'transparent_dark', // default: `transparent_dark`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            true
        );
    }
};



```

因为是基于 `giscus` 的，所以需要去 [giscus](https://giscus.app/) 创建一个 `giscus` 应用，获取 `repo` 和 `repoId`等参数，



### 2.3 giscusTalk 参数

`giscusTalk`的参数获取方法，具体可以参考 [giscus](https://giscus.app/) 官网


输入的你的GitHub 仓库名，作为你的评论区的唯一标识
![docsearch](/giscusTalk/img_1.png)




**启用 giscus里面的参数，输入到 `giscusTalk`里面即可**
![docsearch](/giscusTalk/img_2.png)


## 扩展使用
在 `vitepress`md文件中，可以通过 在`frontmatter` 配置 `comment` 来控制单个md文件是否启用评论区


当配置选项默认启用评论区时，添加以下代码，则不会生成评论区

```md
---
comment: false
---
```

当配置选项默认不启用评论区时，您仍可以通过以下代码在当前页面启用评论区

```md
---
comment: true
---
```



## 结尾
愉快的使用评论吧，如果有问题，欢迎留言


## 参考
- [giscus](https://giscus.app/zh-CN)
- [vitepress-plugin-comment-with-giscus](https://github.com/T-miracle/vitepress-plugin-comment-with-giscus)
