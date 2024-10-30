---
date: 2024-03-29
title: 'Jetbrains系列破解指南'
category: Document
tags:
  - blog
  - locked
---

如何使用`ja-netfilter`破解在线激活验证 `JetBrains` 系列软件

:tada: **Jetbrains 宣布 WebStorm 和 Rider 对非商业用途免费开放 [原文地址](https://blog.jetbrains.com/blog/2024/10/24/webstorm-and-rider-are-now-free-for-non-commercial-use/)**

当然其他 **jetbrains** 其他 IDE 还是可以继续使用该方法破解使用



## 1. 背景
换了新电脑，下载最新版的 `Webstorm` IDE，准备继续当我的页面仔，发现之前的破解方法不管用，于是上网看各种方法，有点恶心我了，本来利用大佬开源项目`ja-netfilter`可以简单解决 `jetbrains`在线激活验证问题。

居然有的人还要收费下载（还有关注公众号等多个套路），指导如何破解 `jetbrains`软件，气死我了。

我写这个文章，就是告诉大家，目前基于大佬的开源项目，自己都可以简单破解 jetbrains在线激活验证免费使用


## 2. 如何破解使用JetBrains

特别简单，有兴趣了解具体的破解逻辑，可以查看大佬`始皇 @neolollipop`的开源项目 [ja-netfilter](https://zhile.io/2021/11/29/ja-netfilter-javaagent-lib.html)

### 2.1 下载安装好 [JetBrains](https://www.jetbrains.com/) 软件

下载安装软件应该都会吧，我就不多说了

破解前提是，你已经下载好最新的 `Jetbrains`软件, 比如`Webstorm`、`IntelliJ IDEA`

### 2.2 打开这个 [jetbra](https://3.jetbra.in/) 网站

这个网站是另外一个大佬 `热佬`建立的, 把 `ja-netfilter` 应用到极致的第一人，默默造福了很多人。

感谢大佬，让广大的码农用上免费的好用 IDE


**选择一个看起来很棒的链接，然后单击它即可访问该页面**


![点击](/jetbrains/jebra1.png)


**点击进去，热佬的网站被显示欺诈、码不能复制、网站被墙等等问题。**

![点击](/jetbrains/jebra2.png)

::: tip
显示欺诈是因为`热佬`使用了公用ipfs网关，网关上有各种其他文件，导致整站被爆欺诈。对被爆欺诈的地址其实是ipfs网关。至于不能复制，是一些浏览器的安全限制。至于被墙，确实有些网关地址被墙
:::


### 2.3 下载破解补丁 jetbra.zip

打开链接后，如下图所示。

下载`jetbra.zip` （240218），并按照 readme.txt 中的说明进行配置！

> 建议解压文件到独立的文件路径，且放置路径最好不要有中文和空格，避免IDE读取路径错误

![下载](/jetbrains/jebra3.png)

<div style="padding: 10px 0"></div>

**`readme.txt` 中的说明进行配置**

```text{15-19}
Operation guide: 
    1. add -javaagent:/path/to/ja-netfilter.jar=jetbrains to your vmoptions (manual or auto)
    2. log out of the jb account in the 'Licenses' window
    3. use key on page https://jetbra.in/5d84466e31722979266057664941a71893322460
    4. plugin 'mymap' has been deprecated since version 2022.1
    5. don't care about the activation time, it is a fallback license and will not expire

Enjoy it~

JBR17:
    add these 2 lines to your vmoptions file: (for manual, without any whitespace chars)
    --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
    --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED

NEW: 
    Auto configure vmoptions:
        macOS or Linux: execute "scripts/install.sh"
        Windows: double click to execute "scripts\install-current-user.vbs" (For current user)
                                         "scripts\install-all-users.vbs" (For all users)
```

直接看 `NEW:` ，执行脚本文件，自动配置`vmoptions` 参数


#### Windows
**点击进入 /jetbra 补丁目录，再点击进入 /scripts 文件夹，双击执行 install-current-user.vbs 破解脚本：**


![下载](/jetbrains/jebra4.png)


**执行脚本存在安全提示风险，点击确定允许即可**

![下载](/jetbrains/jebra5.png)


点击`确定`后，等待一会（10～30秒左右，出现弹窗提示 `Done`，表示激活成功


![下载](/jetbrains/jebra6.png)

#### macOS or Linux
`Mac / Linux` 系统与上面 Windows 系统一样，需将补丁所属文件 `/jetbra` 解压到某个独立路径，且路径不能包含空格与中文。

之后打开终端，入到 `/jetbra/scripts` 文件夹， 执行 install.sh 脚本, 命令如下

```shell
./install.sh
```
看到提示 `Done` , 表示激活成功。

如果提示没有权限，请先赋予权限，再重新执行

```shell
chmod 755 install.sh
```
![下载](/jetbrains/jebra7.png)



::: tip
适配Java17的问题

你需添加这两条JVM参数，否则ja-netfilter无法访问Java17内置的ASM包。
- for Java 17 you have to add at least these JVM Options:
```text
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
```

:::


### 2.4 重启 JetBrains 软件，填入激活码完成激活

重新打开JetBrains 软件填入提供的激活码即可

破解 Jetbrains 系列产品（IDEA、Pycharm、Webstorm 等）所使用的补丁都是一样的，但是每个产品对应的激活码不一样

比如需要激活 `Webstorm`，那么选择 Webstorm的图标即可复制激活码


![下载](/jetbrains/jebra8.png)

复制激活码后填入，点击 Activate 按钮完成激活：

![下载](/jetbrains/jebra9.png)


### 建议

- 激活成功后，不要随便升级 `JetBrains` 系列软件版本，官方反制手段越来越严厉，可能升级后，无法再免费激活
- 激活成功后，不要删除或者移动 `/jetbra` 文件夹，否则 IDE找不到参数配置的路径

---

## 参考
- [介绍一个”牛逼闪闪”开源库：ja-netfilter](https://zhile.io/2021/11/29/ja-netfilter-javaagent-lib.html)
- [jetbra](https://3.jetbra.in/)
- [Webstorm 2023.3.4 最新激活码,破解版安装教程（亲测有效~）](https://www.quanxiaoha.com/webstorm-pojie/webstorm-pojie-202334.html#%E6%BF%80%E6%B4%BB%E6%88%90%E5%8A%9F%E5%90%8E%EF%BC%8C%E4%B8%8D%E8%A6%81%E5%8D%87%E7%BA%A7-webstorm-%E7%89%88%E6%9C%AC)
