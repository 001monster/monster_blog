---
title: （六）为什么Mutations必须是同步的
order: 6
date: 2022-11-26
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211261553746.png)

#### 一、`createLogger` 日志函数插件
:::info 
只有同步执行的操作才能被 `createLogger` 捕获记录到，下面看一下详细代码
:::
```js
import { createApp } from 'vue'
import { createStore, createLogger } from 'vuex'
import App from './App.vue'

const store = createStore({
  // 插件是一个数组，同时可以配置多个插件
  plagins: [createLogger()],

  state() {
    return {
      num: 1
    }
  },

  mutations: {
    increment(state) {
      state.num++
    }
  }
})
```
- 当上面用的是同步的 `mutations` `createLogger` 就能记录用户操作数据的变化

![](https://image.zswei.xyz/img/202211261629991.png)

```js
mutations: {
  increment(state) {
    setTimeout(()=> {
      state.num++
    },1000)
  }
}
```
- 如果当 `mutations` 里面的操作时异步的时候，就无法及时捕获到用户改变的记录

![](https://image.zswei.xyz/img/202211261632227.png)


#### 二、`actions` 里面防做异步操作
:::info 
因为 `actions` 不能直接修改 `state` 的全局状态，只能去触发，`mutations` 里面的函数去修改，下面来看一下 `actions` 函数的日志是怎么样的
:::

```js
import { createApp } from 'vue'
import { createStore, createLogger } from 'vuex'
import App from './App.vue'

const store = createStore({
  // 插件是一个数组，同时可以配置多个插件
  plagins: [createLogger()],

  state() {
    return {
      num: 1
    }
  },

  mutations: {
    increment(state) {
      state.num++
    }
  },

  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  }
})
```
- 可以看到先出发的是 `actions` 后触发的时候 `mutations`，因为 actions` 不能直接修改 `state` 所有没有状态的改变，而经过一秒后才通过 `mutations` 修改了 `state` 里面的数据并且打印出日志

![](https://image.zswei.xyz/img/202211261654198.png)


:::info 总结
通过 `createLogger` 插件我们可以清楚的看见全局状态修改的过程，和被谁修改的，当然我们也可以配置其他插件
:::