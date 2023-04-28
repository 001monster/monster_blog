---
title: （一）golang 安装与基本配置
category:
    - 前端面试题
tag: 
    - js面试题
order: 1

---

### 🍀一、下载 `golang` 
[golang 下载地址](http://go.p2hp.com/):http://go.p2hp.com/

![](https://image.zswei.xyz/img/202304261642015.png)

### 🍀二、安装
1. 安装的时候，如果自定义了安装路径需要记住自己的自定义安装路径

### 🍀三、配置变量环境

1. 右键我的电脑（此电脑）点击属性

2. 选择高级系统设置

3. 选择环境变量

4. 配置环境变量的 `path` 路径，`path` 的路径就是 `golang` 安装的目录

### 🍀四、配置 `golang` 环境
1. 查看 `golang` 是否安装成功
```ssh
go version

返回golang 版本号代表安装成功
```

2. 修改配置
```ssh
go env -w GO111MODULE=on

go env -w GOPROXY="http://goproxy.cn"
```

### 🍀四、开发工具的选择
1. golang(收费)
    - golang 开发工具需要收费，有学生证免费，可惜我要毕业了
    - golang 零配置

 2. vsCode(免费)
    - vsCode不收费，但是需要安装插件
    - 两个插件
        - go
        - code Runner (安装好后右上角三角形点击运行项目)


### 🍀五、golang 常用命令
- build: 编译打包文件(.exe)

- clean: 移除对象文件

- doc: 显示包或者符号的文件

- dev: 打印 go 的环境信息

- bug: 启动错误报告

- fix: 运行 go to fix

- fmt: 运行 gofmt 进行格式化（在go的安装目录下）

- generate: 从 processing source 生成 go 文件

- get: 下载并安装包和依赖

- install: 编译并安装包和依赖

- list: 列出所有安装的包

- run: 编译并运行 go 程序

- test: 运行测试

- tool: 运行 go 提供的工具

- version: 显示 go 版本

- ver: 运行 go tool vet


### 🍀六、安装包
1. 安装包之前需要先安装 mod 来进行包的管理
```ssh
go mod init 文件名称
```

2. 安装完成后才可以安装依赖包
```ssh
go get github.com/go-sql-driver/mysql
```