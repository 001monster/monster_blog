---
title: （三）使用Github Action自动化部署
date: 2023-04-24
category:
    - 服务器常用使用技巧
tag:
    - server
    - 服务器
order: 2
---

### 🎷一、为什么要使用自动化部署
如果有写过项目的经历，就免不了将代码上传到服务器上，安装依赖，然后输入启动命令的步骤。但是有的项目往往需要经常性的改动，如果还是照着上面的方式进行部署的话。先不说这样操作的效率，操作个几次就想罢工了。并且上面这样操作的往往容易误操作。而 Github Actions 正是该问题的良药。


### 🎺二、介绍
Github Actions 是 Github 提供的免费自动化构建实现，特别适合用于需要经常更新内容的网站

### 📀三、概念
在进行操作前，先对 Github Actions 基础知识进行补充，具体可查看 [GitHub Actions 入门教程 阮一峰](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

### 🦊四、具体实现
1. 在 `github` 仓库的根目录创建 `.github/workflows/ci.yml` 这个目录

- workflow 文件如下
```ssh
name: ci

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: 进入任务
        uses: actions/checkout@v3

      - name: 安装nodejs
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'
        
      - name: 安装pnpm
        run: npm install -g pnpm
        
      - name: 安装依赖
        run: npm install
        
      - name: 打包项目
        run: pnpm docs:build
        
      - name: 项目部署
        uses: easingthemes/ssh-deploy@v3.0.1
        env:
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY - 服务器密钥 }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST - 服务器ip地址 }}
          REMOTE_USER: 'root'
          REMOTE_POR: '22'
          SOURCE: './src/.vuepress/dist/'
          TARGET: '/www/wwwroot/zsw/blog/'
          ARGS: '-rltgoDzvO'

```

![](https://image.zswei.xyz/img/202304241527498.png)

### 🐱总结
使用以上自动化部署，当项目上传到 `github` 仓库的 `main` 分支的时候就会触发上面的自动化，自动安装依赖、自动打包、自动上传到服务器，这次先简单的写个大搞，后续部署新项目时将给大家带来完整的教程