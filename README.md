# 春哥的博客

一个基于 VitePress 搭建的个人博客，记录前端开发、工具折腾、AI/Codex 实践和一些随笔内容。

## 在线访问

- Netlify: <https://vitepress-blogs.netlify.app/>
- GitHub Pages: <https://chunge16.github.io/vitepress-blogs/>

## 项目特点

- 使用 VitePress 作为静态站点生成器
- 集成自定义博客主题 `@chunge16/vitepress-blogs-theme`
- 支持文章标签、归档、作者页和评论
- 接入 Algolia 搜索与 Giscus 评论
- 同时支持 Netlify 和 GitHub Pages 构建发布

## 快速开始

本项目使用 `pnpm` 管理依赖。

```bash
pnpm install
pnpm docs:dev
```

启动后访问终端提示的本地地址即可预览站点。

## 常用命令

```bash
# 本地开发
pnpm docs:dev

# 生产构建，适用于 Netlify
pnpm docs:build

# GitHub Pages 构建，带 /vitepress-blogs/ base
pnpm docs:build:github

# 本地预览构建产物
pnpm docs:preview

# 内容格式检查
pnpm check:content

# 完整检查：lint、内容检查、生产构建
pnpm check
```

## 目录结构

```text
.
├── docs/
│   ├── .vitepress/          # VitePress 配置、主题入口和样式
│   ├── blog/                # 博客首页、标签、归档、作者和文章
│   ├── casualEssay/         # 随笔内容
│   ├── public/              # 静态资源
│   └── index.md             # 站点首页
├── scripts/                 # 内容检查脚本
├── package.json             # 项目脚本和依赖
└── pnpm-lock.yaml
```

## 写作约定

博客文章放在 `docs/blog/posts/<year>/` 目录下，使用 Markdown 编写，并在文件开头维护 frontmatter，例如：

```yaml
---
date: 2026-03-26
title: 文章标题
category: document
commentId: post-2026-example
tags:
  - blog
  - ai
---
```

新增文章后建议运行：

```bash
pnpm check:content
pnpm docs:build
```

## 发布

- 推送到主分支后，通过 GitHub Actions 构建并发布到 GitHub Pages。
- Netlify 使用默认生产构建命令 `pnpm docs:build`。

## License

Released under the MIT License.
