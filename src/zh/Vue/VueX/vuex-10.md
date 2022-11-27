---
title: （十）vuex 应用文件结构
order: 10
date: 2022-11-27
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271253546.png)

#### 一、`vuex` 文件夹结构
1. 在 `src` 下面新建一个名为 `store` 的文件夹，里面存放所有有关 `vuex` 的代码

2. 在 `store` 文件夹下面创建一个 `index.js` 文件夹，存放 `store` 的入口文件，也就十顶级模块代码

3. 把 `mutations` `actions` `getters` 把他们单独抽离出来放到各自的 `js` 文件里面使用默认导出
```
├── index.js store 入口文件，也是顶级模块
├── mutations.js 存放 mutations
├── actions.js 存放 actions
├── getters.js 存放 getters
└── modules 子模块，里面是递归文件的格式
```

- `index.js`
```js
import { createStore, createLogger } from 'vuex'

// 根模块拆分出去的
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

import { blogs } from './modules/blogs/index.js'

export const store = createStore({
  plugings: [createLogge()],

  modules: {
    blogs: blogs
    // 简写
    blogs
  },

  state() {
    return {
      num: 1
    }
  },

  mutations: mutations,
  actions: actions,
  getters: getters
})

```

- `mutations` `actions` `getters` 写法都是一样的
```js
// 使用默认导出
export default {
  fn('prams') {
    // 逻辑
  }
}
```

- `blogs.js` 写法同根模块是一样的递归形式
```js
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export const blogs = {
  namespaced: true,

  state() {
    return {
      num: 1
    }
  },

  mutations: mutations,
  actions: actions,
  getters: getters
}
```

- main.js
```js
import { createApp } from "vue";

import App from "./App.vue";
import { store } from "./store";

const app = createApp(App);

// 
app.use(store);

app.mount("#app");

```