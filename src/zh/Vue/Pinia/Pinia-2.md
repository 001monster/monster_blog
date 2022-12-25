---
title: （二）在项目中使用 pinia
order: 2
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、在项目中使用 pinia
1. 在创建项目的时候进行选择
```sh
// 根据提示进行选择自己需要的依赖
npm init vue@latext
```

2. 在现有的项目添加 `pinia` 
::: tabs

@tab:active npm
```sh
npm install pinia
```


@tab Yarn
```sh
yarn add pinia
```

:::


### 二、初始化 `pinia`
- `main.js`
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

create app = createApp(app)

app.use(createPinia())

app.mount('#app')
```