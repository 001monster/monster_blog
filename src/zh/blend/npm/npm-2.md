---
title: （二）使用nrm管理node源
date: 2023-08-08
category:
    - node的基本使用
tag:
    - node
    - nrm
order: 2
---

### 说明
nrm 用于管理镜像，是一个可以切换npm镜像的管理工具

### 一、安装 `nrm`
安装 `nrm` 使用 `npm` 安装所以在安装 `nrm` 之前一定要先安装 `node`
```sh
npm install -g nrm
```

### 二、查看 `nrm` 版本
```sh
# -V 是大写的
nrm -V
```

### 三、`nrm` 常用命令
```sh
# 显示所以命令
nrm -h

# 显出当前镜像名称
nrm current

# 切换镜像源
nrm use <镜像名字>

# 新增镜像
nrm add <镜像名叫> <镜像url地址>

# 删除镜像
nrm del <镜像名字>

# 查看镜像列表
nrm ls

# 测试镜像
nrm test <镜像名字>

至此，安装vrm完成

### 总结
`nrm` 安装非常简单,但是在安装前一定要先安装 `node`  否则安装不上