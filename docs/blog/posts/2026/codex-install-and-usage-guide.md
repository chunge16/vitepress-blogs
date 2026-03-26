---
date: 2026-03-26
title: 'Codex 安装与使用教程：新手也能快速上手'
category: document
tags:
  - blog
  - codex
  - ai
  - tutorial
---

Codex 安装与使用教程：新手也能快速上手 🤖
---

如果你第一次接触 `Codex`，这篇文章就够用了。  
重点讲 4 件事：

- `Codex` 是什么
- 怎么安装
- 怎么开始用
- 使用时要注意什么

<div class="my-8 grid gap-4 md:grid-cols-3">
  <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm ring-1 ring-white">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-lg text-white">👀</div>
    <div class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">适合谁看</div>
    <div class="mt-2 text-lg font-bold text-slate-900">第一次接触 Codex 的开发者</div>
    <div class="mt-2 text-sm leading-6 text-slate-600">想先搞懂是什么、怎么装、怎么开始用。</div>
  </div>
  <div class="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm ring-1 ring-white">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500 text-lg text-white">🚀</div>
    <div class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">推荐入口</div>
    <div class="mt-2 text-lg font-bold text-slate-900">CLI 或 IDE 插件</div>
    <div class="mt-2 text-sm leading-6 text-slate-600">本地协作更直接，真正写代码时更顺手。</div>
  </div>
  <div class="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-5 shadow-sm ring-1 ring-white">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-lg text-white">📌</div>
    <div class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">内容基准</div>
    <div class="mt-2 text-lg font-bold text-slate-900">基于 2026-03-26 官方资料</div>
    <div class="mt-2 text-sm leading-6 text-slate-600">计划和下载地址以后可能会变，请以官方页面为准。</div>
  </div>
</div>

## 1. Codex 是什么？

一句话理解：

`Codex` 是一个面向开发场景的 AI 编程助手。

它不只是回答问题，还能继续往下做：

- 看项目结构
- 找代码入口
- 修改文件
- 执行命令
- 分析报错
- 做代码 review

简单说，它更像一个会干活的 AI 搭子。

> [!TIP]
> 把它理解成“能参与执行的协作助手”，最容易上手。

## 2. 常见入口

按照 OpenAI 当前官方资料，`Codex` 常见有 4 个入口：

- `Codex Web`
- `Codex CLI`
- `Codex IDE extension`
- `Codex app`

<div class="my-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
    <div class="flex items-center justify-between">
      <div class="text-sm font-semibold text-slate-500">Web</div>
      <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900 text-sm text-white">🌐</div>
    </div>
    <div class="mt-2 text-xl font-bold text-slate-900">先看效果最快</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">适合把明确任务交给它后台执行。</div>
    <div class="mt-4 rounded-2xl bg-slate-100 px-3 py-2 text-xs leading-5 text-slate-600">关键词：GitHub、云端执行、先试效果</div>
  </div>
  <div class="rounded-3xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
    <div class="flex items-center justify-between">
      <div class="text-sm font-semibold text-emerald-700">CLI</div>
      <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-500 text-sm text-white">⌨️</div>
    </div>
    <div class="mt-2 text-xl font-bold text-slate-900">本地协作最高频</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">适合在项目目录里边问边改边验证。</div>
    <div class="mt-4 rounded-2xl bg-emerald-100 px-3 py-2 text-xs leading-5 text-emerald-700">关键词：终端、本地项目、改完就验</div>
  </div>
  <div class="rounded-3xl border border-violet-200 bg-gradient-to-br from-white to-violet-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
    <div class="flex items-center justify-between">
      <div class="text-sm font-semibold text-violet-700">IDE 插件</div>
      <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-violet-500 text-sm text-white">🧩</div>
    </div>
    <div class="mt-2 text-xl font-bold text-slate-900">编辑器党首选</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">适合 VS Code、Cursor、JetBrains 用户。</div>
    <div class="mt-4 rounded-2xl bg-violet-100 px-3 py-2 text-xs leading-5 text-violet-700">关键词：边写边改、上下文强、切换更少</div>
  </div>
  <div class="rounded-3xl border border-sky-200 bg-gradient-to-br from-white to-sky-50 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
    <div class="flex items-center justify-between">
      <div class="text-sm font-semibold text-sky-700">App</div>
      <div class="flex h-9 w-9 items-center justify-center rounded-2xl bg-sky-500 text-sm text-white">🖥️</div>
    </div>
    <div class="mt-2 text-xl font-bold text-slate-900">复杂任务更舒服</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">适合多线程、Diff、Git、跨项目协作。</div>
    <div class="mt-4 rounded-2xl bg-sky-100 px-3 py-2 text-xs leading-5 text-sky-700">关键词：线程、Diff、Worktree、Automation</div>
  </div>
</div>

如果你是第一次接触，我建议这样选：

- 想先感受效果，不想先折腾安装：从 `Web` 开始
- 想在本地项目里直接协作改代码：从 `CLI` 开始
- 想在编辑器里边写边改：用 `IDE extension`
- 想多线程处理任务、跨项目切换：试试 `App`

## 3. 使用前需要准备什么？

开始之前，先确认：

- 你有一个可用的 `ChatGPT` 账号
- 你的账号计划支持 `Codex`
- 如果你打算用 `Codex Web` 连 GitHub 仓库，需要先完成 `GitHub` 连接

::: tip 快速判断
如果你只是先体验效果，优先走 `Web` 或 `CLI + ChatGPT 登录` 就够了。  
如果你已经长期在某个编辑器里工作，那直接装 `IDE 插件` 往往更顺手。
:::

## 4. 最容易入门的方式：Codex Web

如果你不想先装环境，最容易上手的是 `Codex Web` 🌐

基本流程很简单：

1. 登录 `ChatGPT`
2. 打开 `Codex` 入口
3. 连接 `GitHub`
4. 选择仓库
5. 输入任务，让它开始执行

::: details Web 端尤其适合这些任务
- 想后台执行的明确任务
- 和 GitHub 仓库强相关的问题
- 不想先配置本地环境的场景
- 先试用、先感受再决定是否深度使用
:::

## 5. Codex CLI 教程

### 5.1 基本介绍

如果你平时主要在本地项目里开发，`Codex CLI` 会更实用。

它适合这种场景：

- 在终端里直接和 AI 协作
- 让它在当前项目目录里分析和修改
- 改完后马上检查结果

官方地址：
[Codex CLI](https://developers.openai.com/codex/cli)

### 5.2 setup

#### Install

先确认电脑里已经有：

- `Node.js`
- `npm`

```bash
node -v
npm -v
```

OpenAI 官方文档当前给出了两种常见安装方式：

::: code-group

```bash [npm]
npm install -g @openai/codex
```

```bash [Homebrew]
brew install codex
```

:::

<div class="my-6 grid gap-4 md:grid-cols-2">
  <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm text-white">N</div>
    <div class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">npm 安装</div>
    <div class="mt-2 text-lg font-bold text-slate-900">更通用</div>
    <div class="mt-2 text-sm leading-6 text-slate-600">适合已经有 Node.js / npm 环境的人。</div>
  </div>
  <div class="rounded-3xl border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 p-5 shadow-sm">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-sm text-white">B</div>
    <div class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">Homebrew 安装</div>
    <div class="mt-2 text-lg font-bold text-slate-900">macOS 更顺手</div>
    <div class="mt-2 text-sm leading-6 text-slate-600">如果你习惯用 brew 管理工具，这个方式更自然。</div>
  </div>
</div>

#### Run

进入你的项目目录：

```bash
cd your-project
```

然后运行：

```bash
codex
```

第一次运行时，会提示你登录。  
对大多数新手来说，直接用 `ChatGPT account` 登录最省事。

::: warning 登录方式说明
如果你只是想快速体验，优先选择 `ChatGPT account`。  
`API key` 更适合已经有 API 工作流、或者需要额外计费控制的人。
:::

新手第一次上手，建议先做这些小任务：

- 解释项目结构
- 找入口文件
- 修一个小 bug
- 补一个简单测试

<div class="my-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
  <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
    <div class="text-sm font-semibold text-slate-500">Step 1</div>
    <div class="mt-2 text-lg font-bold text-slate-900">进入项目目录</div>
    <div class="mt-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 font-mono text-sm text-slate-900">cd your-project</div>
  </div>
  <div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm">
    <div class="text-sm font-semibold text-slate-500">Step 2</div>
    <div class="mt-2 text-lg font-bold text-slate-900">启动 Codex</div>
    <div class="mt-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 font-mono text-sm text-slate-900">codex</div>
  </div>
  <div class="rounded-3xl border border-amber-200 bg-gradient-to-br from-white to-amber-50 p-5 shadow-sm">
    <div class="text-sm font-semibold text-slate-500">Step 3</div>
    <div class="mt-2 text-lg font-bold text-slate-900">先给小任务</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">先从目录分析、入口定位、修一个小 bug 开始。</div>
  </div>
  <div class="rounded-3xl border border-sky-200 bg-gradient-to-br from-white to-sky-50 p-5 shadow-sm">
    <div class="text-sm font-semibold text-slate-500">Step 4</div>
    <div class="mt-2 text-lg font-bold text-slate-900">检查改动结果</div>
    <div class="mt-3 text-sm leading-6 text-slate-600">看它改了哪些文件、结果是否符合预期。</div>
  </div>
</div>

##### 适合新手的第一次提问

::: code-group

```text [项目结构]
帮我分析这个项目的目录结构，告诉我首页入口文件在哪里
```

```text [修复 bug]
帮我找出登录按钮点击没反应的原因，并修复它，最后告诉我改了什么
```

```text [补测试]
帮我为这个接口补一个最基础的测试，不要改业务逻辑
```

:::

#### Upgrade

如果你想升级到最新版本，可以按安装方式选择：

::: code-group

```bash [npm]
npm i -g @openai/codex@latest
```

```bash [Homebrew]
brew upgrade codex
```

:::

## 6. IDE 插件怎么上手？

### 6.1 基本介绍

如果你平时大部分时间都在编辑器里，那 `IDE extension` 会非常顺手 🧩

支持重点包括：

- `Visual Studio Code`
- `Cursor`
- `Windsurf`
- `JetBrains IDEs`

### 6.2 下载地址

- `VS Code` / `VS Code Insiders`：
  [Visual Studio Marketplace - OpenAI ChatGPT / Codex Extension](https://marketplace.visualstudio.com/items?itemName=openai.chatgpt)
- `Cursor`：
  [Codex IDE 官方安装说明](https://developers.openai.com/codex/ide)
- `Windsurf`：
  [Codex IDE 官方安装说明](https://developers.openai.com/codex/ide)
- `JetBrains IDEs`：
  [JetBrains 集成说明](https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/)

<div class="my-6 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-500 text-white">🔗</div>
    <div class="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">下载安装地址汇总</div>
  </div>
  <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
    <li>VS Code Marketplace：<a href="https://marketplace.visualstudio.com/items?itemName=openai.chatgpt" target="_blank" rel="noreferrer" class="font-medium text-sky-700 underline">https://marketplace.visualstudio.com/items?itemName=openai.chatgpt</a></li>
    <li>Codex IDE 官方安装页：<a href="https://developers.openai.com/codex/ide" target="_blank" rel="noreferrer" class="font-medium text-sky-700 underline">https://developers.openai.com/codex/ide</a></li>
    <li>JetBrains 集成说明：<a href="https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/" target="_blank" rel="noreferrer" class="font-medium text-sky-700 underline">https://blog.jetbrains.com/ai/2026/01/codex-in-jetbrains-ides/</a></li>
  </ul>
</div>

### 6.3 安装步骤

<div class="my-8 grid gap-6 lg:grid-cols-2">
  <figure class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
    <img src="/codex-guide/codex-ide-overview.svg" alt="Codex IDE 插件示意图" class="w-full rounded-xl" />
    <figcaption class="px-1 pt-3 text-sm text-slate-500">侧边栏打开 Codex 面板后，可以直接结合当前项目上下文协作。</figcaption>
  </figure>
  <figure class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
    <img src="/codex-guide/codex-ide-steps.svg" alt="Codex IDE 插件步骤图" class="w-full rounded-xl" />
    <figcaption class="px-1 pt-3 text-sm text-slate-500">安装插件、登录、打开项目、开始提问，基本就能跑起来。</figcaption>
  </figure>
</div>

1. 在对应编辑器里安装 `Codex` 扩展
2. 打开侧边栏里的 `Codex` 面板
3. 用 `ChatGPT` 账号或 `API key` 登录
4. 在当前项目里直接开始提问或下达任务

默认会以 `Agent mode` 工作，也就是可以读文件、跑命令、改代码。

### 6.4 使用说明

比较适合这类场景：

- 你正在编辑代码，不想来回切终端
- 你想让 AI 直接结合当前文件上下文工作
- 你已经习惯 `VS Code`、`Cursor`、`JetBrains` 这类编辑器工作流

> [!NOTE]
> 如果你长期在编辑器里工作，这个入口通常比单独切 CLI 更顺。

## 7. App 端怎么用？

如果你更喜欢独立桌面应用，可以试试 `Codex app` 🖥️

目前官方重点支持 `macOS (Apple Silicon)`。

它更适合：

- 并行处理多个线程
- 内置 Git 功能
- worktree 支持
- automations
- 跨项目切换

### 下载与安装

- 官方页面：
  [Codex App](https://developers.openai.com/codex/app)
- macOS 下载地址：
  [Codex.dmg](https://persistent.oaistatic.com/codex-app-prod/Codex.dmg)
- Linux 通知入口：
  [Codex App Linux waitlist](https://openai.com/form/codex-app/)

### 安装步骤

1. 打开官方 `Codex App` 页面
2. 下载 `Codex.dmg`
3. 安装完成后打开 App
4. 用 `ChatGPT` 账号或 `API key` 登录

### 开始使用

1. 选择一个项目目录
2. 确认使用 `Local`
3. 发送第一条消息
4. 结合线程、Diff、Git 继续推进任务

::: tip 小提示
如果你是第一次用 App，建议先选一个熟悉的小项目，先体验对话、查看改动、检查结果这套流程。
:::

<div class="my-8 grid gap-6 lg:grid-cols-2">
  <figure class="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
    <img src="/codex-guide/codex-app-overview.svg" alt="Codex App 使用示意图" class="w-full rounded-xl" />
    <figcaption class="px-1 pt-3 text-sm text-slate-500">App 更像一个集中处理线程、Diff、Git 和自动化任务的工作台。</figcaption>
  </figure>
</div>

## 8. 怎么提问更容易成功？

别太模糊。

一个非常实用的公式是：

`目标 + 范围 + 限制 + 预期结果`

<div class="my-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
  <div class="flex items-center gap-3">
    <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white">💬</div>
    <div class="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">推荐提问模版</div>
  </div>
  <div class="mt-2 font-mono text-sm leading-7 text-slate-800">
    帮我 + 目标 + 范围 + 限制条件 + 预期结果
  </div>
  <div class="mt-3 text-sm leading-6 text-slate-600">
    例如：帮我修复登录按钮点击无效的问题，只改登录页，不要动接口协议，修完后告诉我改了哪些文件。
  </div>
</div>

你说得越清楚，`Codex` 通常做得越稳。

> [!TIP]
> 新手最容易出问题的地方，不是不会提需求，而是把范围说得太大、限制条件说得太少。

## 9. Codex 最适合做哪些事？

- 看懂项目结构
- 快速找代码入口
- 修一个明确 bug
- 补测试
- 做重复性重构工作
- 帮你起草文档
- 做代码 review

<div class="my-8 grid gap-4 md:grid-cols-2">
  <div class="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
    <div class="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">更适合交给 Codex</div>
    <div class="mt-3 text-sm leading-7 text-slate-700">明确 bug、入口定位、补测试、局部重构、文档起草、代码审查。</div>
  </div>
  <div class="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-5 shadow-sm">
    <div class="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">第一次不建议直接做</div>
    <div class="mt-3 text-sm leading-7 text-slate-700">整站大改、核心链路重写、多个模块一起迁移、无法快速验证结果的复杂任务。</div>
  </div>
</div>

## 10. 使用 Codex 时要注意什么？

它很强，但不代表永远对。

尤其这些场景，一定不要完全放手：

- 支付
- 权限
- 删除数据
- 安全相关改动
- 生产环境紧急修复

`让 Codex 提速，但由你来做最终判断。`

> [!CAUTION]
> 涉及支付、权限、安全、生产紧急修复时，不建议直接接受修改结果而不复核。

第一次别上来就做超大任务，先从小问题开始会更稳。

## 11. 最后总结

如果要用一句话概括：

`Codex` 不是只会回答问题的 AI，而是一个能真正进入开发流程、帮助你推进任务的 AI 编程助手。

<div class="my-8 rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-6 text-white shadow-lg">
  <div class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">Quick Recap</div>
  <div class="mt-3 text-2xl font-bold text-white">第一次接触 Codex，建议这样开始</div>
  <ol class="mt-4 space-y-2 pl-5 text-slate-100">
    <li>先确认账号和计划可用。</li>
    <li>想省事先试 Web，想本地协作用 CLI。</li>
    <li>编辑器用户直接装 IDE 插件，复杂任务再试 App。</li>
    <li>从小任务开始，关键代码自己复核。</li>
  </ol>
</div>

## 12. 官方地址

- [Codex 总览](https://developers.openai.com/codex)
- [Codex CLI](https://developers.openai.com/codex/cli)
- [Codex IDE](https://developers.openai.com/codex/ide)
- [Codex App](https://developers.openai.com/codex/app)
