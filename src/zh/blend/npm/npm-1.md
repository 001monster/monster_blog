---
title: （一）使用nvm管理node版本
date: 2023-08-08
category:
    - node的基本使用
tag:
    - node
    - nvm
order: 1
---

## 说明
:::info
使用 NVM 下载，后期管理 Node 版本很方便，推荐这种方式，还有一种方式是直接下载 NodeJS 进行安装，不是很推荐，后期切换版本比较麻烦，需要卸载重装。
:::

### 一、下载 `nvm` 
1. NVM 是干什么？大家进入 NVM 官网后就知道了 https://nvm.uihtm.com/

![](https://image.zswei.xyz/img/a912d5fdc311426ab8f431823b465fd9.png)

2. GitHub 下载地址https://github.com/coreybutler/nvm-windows/releases

![](https://image.zswei.xyz/img/6f6c4a97a36642f5962032cd5b9f11ae.png)

### 二、安装 NVM

1. 双击打开安装包

![](https://image.zswei.xyz/img/2-1.png)

2. 选择我同意，然后点击Next

![](https://image.zswei.xyz/img/2-2.png)

3. 选择 NVM 安装路径，点击 Next【建议使用默认安装路径】

![](https://image.zswei.xyz/img/2-3.png)

4. 选择 NodeJS 安装路径，点击Next【建议使用默认安装路径】
![](https://image.zswei.xyz/img/2-4.png)

5. 然后点击 Install 安装，安装完成之后点击 Finshed，至此 NVM就安装成功了
![](https://image.zswei.xyz/img/2-5.png)

6. 设置npm镜像【否则有些同学回安装不上】
```sh
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

7. 最后打开任意 `cmd` 输入 `nvm -v` 出现版本号就证明安装成功了

![](https://image.zswei.xyz/img/20230809145625.png)


### 三、安装node
1. 以管理员身份运行cmd，然后输入 `nvm list available` 查看所有可以下载的node版本

![](https://image.zswei.xyz/img/06e254e1fee24ed594dc5db778576c42.png)

2. 下载指版本的node `nvm install 版本号`
```sh
nvm install 16.18.0
```

3. 查看下载的所以node版本 `nvm ls`

![](https://image.zswei.xyz/img/20230809150154.png)

4. 使用指定版本号 `nvm use 版本号`
```sh
nvm use 16.18.0
```

5. 然后使用 `node -v` 和 `npm -v` 命令查看node是否安装和使用成功

![](https://image.zswei.xyz/img/20230809150431.png)

至此，安装node完成

### 总结
如果同学们安装出现了问题，如安装不上，或者安装上了没有npm等之类的问题，请百度一下，千奇百怪的问题无法做到一一列举还请各位见谅