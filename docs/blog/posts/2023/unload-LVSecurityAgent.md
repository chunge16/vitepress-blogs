---
date: 2023-11-22
title: 'mac电脑 卸载LVSecurityAgent监控软件'
category: Document
tags:
  - 'locked'
---

教你如何卸载 LVSecurityAgent 流氓软件，实在是太恶心了 ( :vomiting_face:  )

---


## 背景
最近实在是被这个软件恶心到了，网络的资料都太老了，所以自己写一篇，方便大家。

::: tip 提示
只是针对 Mac 电脑，Windows系统的不在本文讨论范围内。
:::



## 环境

- macOS版本：14.1.1
- M1 Pro


## 首先这个LVSecurityAgent是什么?
简单来说，就是流氓软件。

他是一个监控软件，用于收集数据以及内网Wifi链接，它长着个样子！
![LVSecurityAgent-logo](/LVSecurityAgent/img.png)


具体能干什么，看下图 :worried:，

能干的，不能干的，都能干 :sob:，这个软件是不是太流氓了 :rage: 。

![LVSecurityAgent-logo](/LVSecurityAgent/img_1.png)


## 如何卸载？其实是删除
正常卸载是卸载不掉的，推荐大佬写的这脚本能把监控软件骨灰都扬了 :sunglasses: 。

```shell
echo 'delete shit.app..need your root pwd';
sudo rm -rf /Applications/LVSecurityAgent.app;
sudo rm -rf /Applications/dvc-manageproxy-exe.app
echo 'script is fighting...';
# 这流氓软件会把该文件夹锁定，无法直接rm删除，所以要先改变文件夹属性解锁
sudo chflags noschg /opt/LVUAAgentInstBaseRoot; 
echo 'delete shit.datafile..';
sudo rm -rf /opt/LVUAAgentInstBaseRoot;
sudo rm -rf /Library/LaunchAgents/com.lvmagent.gui.plist
sudo rm -rf /Library/LaunchAgents/com.leagsoft.uniremote.plist
sudo rm -rf /Library/LaunchDaemons/com.lvmagent.core.plist
sudo rm -rf /Library/LaunchDaemons/com.lvmagent.filemonitor.plist
sudo rm -rf /Library/LaunchAgents/com.lvmagent.screen.plist
echo 'kill shit.process..';
sudo ps -ef|grep -E 'LVUAAgentInstBaseRoot|dvc-manageproxy-exe' |grep -v "grep"|awk '{print $2}'|xargs sudo kill -9;
echo 'congratulations! You throw that shit!';
```

执行前记得chmod赋予执行权限。

比如我将脚本保存为 script_of_justice.sh ，

然后在命令行下执行 `chmod 755 script_of_justice.sh`，

然后再执行 `./script_of_justice.sh` 来调用脚本。

**卸载的核心点就是把该软件相关东西都删除**


**这个监控软件其实就是靠着 plist 这几个文件实现无限自启的，一般基本上通过 [vim编辑plist](#vim) 后，重启这个软件就不会自启了，这个时候删不删也无所谓了，主要看dvc-xxx-xxx这个前缀的进程在进程管理里面是否存在就行。**


::: tip 提示
这软件有正常卸载办法，但是需要管理员提供动态验证码给你，你离职的话正常都给你。
:::

脚本执行成功后，重启电脑，看看任务执行器还有 dvc-xxx-xxx 的进程吗，如果没有就说明删除成功了，没有在后台悄悄咪咪无限重启线程


## 如何只是用的时候再会让他运行，不用的时候关闭？

有的时候需要访问公司内网工作，如果没有该软件的WIFI认证就无法访问，所以有时候可以需要的时候再运行，不需要的时候关闭。

::: tip 提醒
你要在执行前成功连接过一次WIFI，简单来说就是 LVSecurityAgent 成功连接过一次
:::

### 第一步：关掉软件自动启动 

**设置里面搜索登录项把箭头的几个全部关掉**

![登录项](/LVSecurityAgent/img_2.png)


**取消监控屏幕权限**
![登录项](/LVSecurityAgent/img_3.png)

![登录项](/LVSecurityAgent/img_4.png)

#### 用Vim分别执行下面的命令 {#vim}
```shell
# Vim分别执行每个文件，修改里面的内容（就是一个一个的改）
# 下面的如果找不到文件请在用户目录下查看也就是 ~/Library/
sudo vim /Library/LaunchAgents/com.lvmagent.gui.plist

sudo vim /Library/LaunchAgents/com.leagsoft.uniremote.plist

sudo vim /Library/LaunchDaemons/com.lvmagent.core.plist

sudo vim /Library/LaunchDaemons/com.lvmagent.filemonitor.plist

sudo vim /Library/LaunchAgents/com.lvmagent.screen.plist

```

**重点： 将他们的KeepAlive和RunAtLoad设置为false**

需要修改的地方大概是这个样子

![登录项](/LVSecurityAgent/img_5.png)

### 第二步：重启电脑
这时候的LVSecurityAgent监控进程和核心功能都已经关闭

### 第三步: 手动启动核心程序

```shell
sudo /opt/LVUAAgentInstBaseRoot/dvc-core-exe &

```

你会发现活动监视器里面只有两个dvc-xxx-xxx进程，如果想使用他的WIFI认证功能就让他在后台跑者，不想让他跑者就用活动监视器里面关停





## 参考
- [彻底卸载mac软件的方法，这样才删除干净哦](https://codeantenna.com/a/uXTZaCoETw)
- [【教程】Mac系统LVSecurityAgent卸载方法](https://blog.static.run/archives/remove-lvsecurityagent-tutorial)
- [macOS上chflags用法详解（纯干货，全网最全！）](https://miaoguoge.xyz/chflags-onMac/)
