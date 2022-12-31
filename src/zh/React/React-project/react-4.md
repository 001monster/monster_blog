---
title: （四）sass 安装和初步使用
date: 2022-12-25
category:
    - react
---

### 🍝一、安装 `scss`
:::tabs
@tab:active npm
```sh
npm i --save-dev sass
```

@tab yarn
```sh
yanr add sass
```
:::


### 🔥二、`dependencies` 和 `devDependencies` 区别
- 这里用到了 `save-dev` 简单来说一下

![](https://image.zswei.xyz/img/202212251804862.png)

`dependencies` 这个属于生产依赖，当我们执行 `npm run build` 打包命令的时候，`dependencies` 里面的依赖会被打包

`devDependencies` 这个属于开发依赖，当我们执行 `npm run build` 打包命令的时候，`devDependencies` 里面的依赖是不会被打包的

- 那么什么时候安装到 `dependencies` 和 `devDependencies` 呢，当我们项目上线的时候需要用到的依赖就放在 `dependencies` 里面， 上线不需要用到的就放在 `devDependencies


### ✨三、`scss` 使用
`scss` 的使用非常简单，这里就不做演示了，大家可以自行学习

```scss
$color: #eee;
body {
    background-color: $color;
    // 禁用复制文字
    user-select: none;
}

img{
    // 禁止图片拖动
    -webkit-user-drag: none ;
}
```