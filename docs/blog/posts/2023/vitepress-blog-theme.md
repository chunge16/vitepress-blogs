---
date: 2023-08-15 
title: vitepress-blogs-theme 
category: Document
tags: vite, vue

---

基于vitepress的博客主题

---

# @chunge16/vitepress-blogs-theme

## 使用主题
自定义主题是参考学习[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)，但配置方式优化为[vitepress官方自定义主题的配置](https://vitepress.dev/guide/custom-theme#distributing-a-custom-theme)来设置的

```sh [npm]
$ npm install -D @chunge16/vitepress-blogs-theme
```

```sh [pnpm]
$ pnpm add -D @chunge16/vitepress-blogs-theme
```

```sh [yarn]
$ yarn add -D @chunge16/vitepress-blogs-theme
```

```javascript
// .vitepress/theme/index.js
import { VPBTheme } from '@chunge16/vitepress-blogs-theme'

export default VPBTheme

```

如果主题需要扩展：

```javascript
// .vitepress/theme/index.js
import { VPBTheme } from '@chunge16/vitepress-blogs-theme'

export default {
  extends: Theme,
  enhanceApp(ctx) {
    // ...
  }
}
```

> 特殊提示，需要添加vite配置，为`@chunge16/vitepress-blogs-theme`跳过不必要的pre-bundled阶段，使用optimizeDeps.exclude，否则会提示导出错误

```javascript
// .vitepress/config.js 

export default {
    vite: {
        optimizeDeps: {
            exclude: ['@chunge16/vitepress-blogs-theme']
        }
    }
}
```


## 主题配置

因为本主题集学习参考[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/reference/config)，所以主题配置基本可参考该主题的配置说明

### 站点配置
站点配置基本可以参考[config](https://vitepressblog.dev/reference/config)

### Tailwind 配置

#### Tailwind.config.js

Tailwind基本配置可以使用主题提供的默认配置

```javascript
import { defineTailwindConfig } from '@chunge16/vitepress-blogs-theme/config'

module.exports = defineTailwindConfig()
```

#### 定义TailwindConfig
如果您想tailwind.config.js进一步自定义，您可以将选项传递给defineTailwindConfig

```ts
defineTailwindConfig(base = './docs', config: Partial<Config>)
```
- base：你的vitepress源的路径
- config：标准Tailwind配置对象。

### icons 配置

VitePress 博客使用[tailwind-css-icons](https://github.com/jcamp-code/tailwindcss-plugin-icons)允许您在 Markdown 或组件中包含任何您想要的图标。

[iconify](https://iconify.design/)中的所有图标均可用。

> 格式为i=[library/icon name]

```html
// 例子
<span class="i-[carbon/logo-vue]">

```

## 说明 :bug:
[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)主题有个bug，`.vitepress/config.js`中设置`base`地址，会导致博客跳转地址错误，导致404

后面看源码发现，是因为作者在组件跳转地址加上 [withBase](https://vitepress.dev/reference/runtime-api#withbase) 函数，会导致`base`值URL重复，所以找不到地址



## 参考
[@jcamp/vitepress-blog-theme](https://vitepressblog.dev/)
