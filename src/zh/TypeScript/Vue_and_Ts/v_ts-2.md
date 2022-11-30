---
title: （二）配置项目
order: 2
date: 2022-11-30
category:
    - TypeScript
---


### 一、配置项目
:::info 说明
- `vscode` 需要安装 `volar` 这个插件，他是 `vue3` 支持的插件

- 然后我们进行 `TypeScript` 开发的时候，因为 `vscode` 内置了 `TypeScript Server`, 而 `volar` 也提供了一个 `TypeScript Server` ，只不过  `volar` 是针对于 `vue` 优化过的

- 如果过在开发过程中同时使用了这两个插件，就会对代码进行两次编译，影响开发效率，还可能起冲突，`vue` 官方推荐的是把 `vscode` 自带的 `TypeScript Server` 关掉，只保留 `volar`
:::


### 二、关闭内置 `TypeScript Server`
1. 打开控制面板快捷键
```js
ctrl + shift + p
```

![](https://image.zswei.xyz/img/202211300958714.png)


2. 搜索 `show buil`
```js
>show buil
```

![](https://image.zswei.xyz/img/202211300958719.png)


3. 搜索 `@builtin typescript`
```js
@builtin typescript
```

![](https://image.zswei.xyz/img/202211301000600.png)

4. 点击禁用，我这里已经禁用了所以是灰色

![](https://image.zswei.xyz/img/202211301002147.png)