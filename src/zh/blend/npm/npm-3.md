---
title: （三）使用npm发布包
date: 2023-08-08
category:
    - node的基本使用
tag:
    - node
    - npm
order: 3
---

## 说明
npm 是 node 的标准包管理工具,常用于管理各种包,作者本人长用于团队开发时候使用

### 一、注册 `npm` 账号
注册 `npm` 非常简单,进入官网:https://www.npmjs.com/ 进行注册,英语不好的小伙伴使用翻译软件就能看明白了

### 二、初始化 npm 包
1.发布前的代码基本配置
```sh
npm官方建议规范的包至少包含：
 
package.json（包的基本信息）
README.md（文档）
index.js （入口文件）
```

2. 创建文件夹
```sh
mkdir you_npm_package_name
cd you_npm_package_name
```

3. 初始化包
```sh
npm init
# 或
npm init -y
```

4. package.json 文件解释
```sh
{
  "name": "my_first_npm", // 你的npm包名
  "version": "1.0.0",    //标明发布时的版本
  "description": "my first npm package", // 包的说明
  "main": "index.js",    //写清楚入口文件
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1"
  }, 
  "keywords": [     //标明关键字，方便其他人检索我们所创建的包
    "npm",
    "packge"
  ],
  "author": "old-monster", // 作者
  "license": "ISC"   //使用ISC作为许可证
}
```

5. 创建一个简单的 时间格式化包
```sh
const dateFormat = (str) => {
    const dt=new Date(str)
    const y=dt.getFullYear()
    const m=change(dt.getMonth()+1)
    const d=change(dt.getDate())
    const hh=change(dt.getHours())
    const mm=change(dt.getMinutes())
    const ss=change(dt.getSeconds())
    return `${y}-${m}-${d} ${hh}:${mm}-${ss}`
}

function change(n){
    return n>9?n:'0'+n
}

export default dateFormat
```

6. 创建一个 README.md 说明文明
```sh
README.md
```

7. 包基本结构
```sh
└── you_npm_package_name
    ├── README.md
    ├── index.js
    └── package.json
```

### 三、发布 npm 包
1. 使用 cmd 进行登录
```sh
npm login
```
有些同学登录可能会出现一下情况,这是因为您使用的是淘宝镜像,淘宝镜像不能用来发布 `npm` 包,这时候我们需要把 `npm` 换回原来的源,这里可以用我们上一节说到的 `nrm` 来进行更换 [使用nrm管理node源](./npm-2.md)

![](https://image.zswei.xyz/img/a99307cfaf158699235d3ec117e695c9.png)

2. 登录成功后使用 `npm publish` 命令进行发布包【注意:包名不能和其他已经存在的包名重复也不能相似,如已经有了一个uz-tool,就不能叫做uztoll】
```sh
npm publish
```

3. 删除已发布的包
    - 注意:
    - npm unpublish 只能删除`72小时之内`发布的包 
    - npm unpublish 删除的包,`在24小时`不能重复发布
    - 发布包时候要慎重,尽量不要往npm上发布没有意义的包
```sh
npm unpublish <包名> -force
```