---
date: 2023-08-14
title: 'Git 提交规范'
category: document
commentId: post-2023-git-commit-spec
tags:
  - git
---

Git 提交规范

---

# Git 提交规范

> 处于**草案**阶段

* [原则](#原则)
* [格式](#格式)
* [示例](#示例)
* [常用前缀及 Emoji 缩写](#常用前缀及-emoji-缩写)
* [参考](#参考)

## 原则
* Commit 需谨慎
* Commit 内容做到清晰明了的说明此次提交主要工作, 不超过50个字, 句末不要加句号, 如果是英文则首字母大写, 使用祈使语气
* Push 前预览此次提交 Commit 列表，如果有需要改进，可 Undo commit , 改进后再重新 Commit + Push


## 格式
提交信息遵循以下格式：

> git commit -m `"prefix: :emoji: 做了什么，相关 Issue 或 MR 编号 #156"`

> **尽量** 加入 Emoji 为本次提交打上一个 "标签", 使得此次 Commit 的主要工作得以凸现，也能够使得其在整个提交历史中易于区分与查找。


## 示例
- 修复 Bug:
```sh
git commit -m "fix: :bug: 【量表】【类别】类别被删除后，点击表单列表中表单的类别，显示不正确 #386 "
```

- 增加功能:
```sh
git commit -m "feat: :sparkles: 头像添加男女老师区别 #596 "
```

- 错误示例:
```sh
# Bad
git commit -m "ref: 代码优化"
#
# Good
git commit -m "ref: :hammer: 新建学生记录功能代码优化，去除无用函数等等"
```

## 常用前缀及 `Emoji` 缩写


Prefix     | Emoji              | Emoji code            | Commit 说明
:----      | :----              | :----                 | :----
**init**   | :tada:             | `:tada:`              | 初次提交
**feat**   | :sparkles:         | `:sparkle:`           | 新功能
**fix**    | :bug: :ambulance:  | `:bug:` `:ambulance:` | 修复 Bug [严重 Bug = 🚑]
**typo**   | :pencil2:          | `:pencil2:`           | 修复语法错误
**ref**    | :hammer:           | `:hammer:`            | 代码重构
**style**  | :lipstick: :art:   | `:lipstick:` `:art:`  | 代码格式化 / UI调整
**perf**   | :zap:              | `:zap:`               | 性能优化
**add**    | :heavy_plus_sign:  | `:heavy_plus_sign:`   | 增加依赖或添加资源文件
**remove** | :heavy_minus_sign: | `:heavy_minus_sign:`  | 减少依赖或移除资源文件
**deps**   | :arrow_up: :arrow_down: | `:arrow_up:` `arrow_down`  | 升降级项目依赖
**log**    | :loud_sound: :mute:|`:loud_sound:` `:mute:` | 添加**或**删除日志输出
**test**   | :white_check_mark: | `:white_check_mark: ` | 增加测试
**i18n**   | :globe_with_meridians: | `:globe_with_meridians:` | 国际化
**doc**    | :memo:             | `:memo:`              | 文档或注释调整
**build**  | :wrench:           | `:wrench:`            | 修改配置文件

## 参考
- [老鸟都应该注意的 Git 提交规范](http://www.cnblogs.com/ctaodream/p/6066694.html)
- [Gitmoji](https://gitmoji.carloscuesta.me/)
- [Git commit message 和工作流规范](https://cloud.tencent.com/developer/article/1004656)






