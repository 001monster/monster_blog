---
title: （二）安装并配置 Ts
order: 2
date: 2022-11-29
category:
    - TypeScript
---


### 一、安装 `node.js`

- 安装 `nodejs` 就不进行说明了


### 二、安装 `TypeScript`
:::info 说明
安装 `TypeScript` 有两种方式
:::
#### (一)把他安装到项目里面
```js
yarn add typesctipt --dev
```
- `TypeSctipy` 都以 `.ts` 为文件名后缀
- 新建 `tsconfig.json` 配置文件，每个 `ts` 项目都需要一个 `tsconfig.json`  文件，这样打包编译的时候他就去每个文件找，直接将 `tsconfig.json` 当成根目录开始打包
- 编写一个简单的 `ts` 代码
```js
let str: string = "Hellow Word"
console.log(str)
```
- 编译文件：编译文件需要运行命令 `tsc xxx.ts`，但是我们可以在 `package.json` 里面编写脚本来直接运行这段命令
```json
{
    "scripts": {
        "build": "tsc xxx.ts"
    }
}

// 脚本编译
yarn build
```


#### (二)、把他安装到全局里面
```sh
npm install -g typescript
```