---
title: （十三）Vuex 插件系统
order: 13
date: 2022-11-27
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271406517.png)


#### 一、实现一个状态持久化
:::info 说明
可以在页面刷新的时候 vuex 的数据不丢失，增强用户体验
:::

1. 在 `store` 文件夹下面创建一个 `persist.js` 的文件来存放插件代码，插件就是接收 `store` 作为参数的函数，可以做对 `mutations` `actions` 的等等一系列操作

(1)、 在页面刷新之前把数据存放到 localStoreage
```js
export default function persisState(store) {
    // 页面刷新之前的操作
    // 监听 window.addEventListener('beforeunload', {})
    window.addeventListenter('beforeunload', e => {
        window.localStorage.setItem('vuex', JSON.stringify*=(store.state))
    })

    const prevState = window.localStorage.getItem('vuex')
    if(prevState) {
        // 替换状态
        store.replaceState(JSON.parse(prevState))
    }
}
```

(2)、导入插件
```js
import { createStore, createLogger } from 'vuex'

export const store  = createStore({
    // 不用掉用
    plugins: [createLogger(), persisState],
    ...
})
```

(3)、每次触发 `mutations` 的时候保存
```js
export default function persisState(store) {
    // 监听mutations 的触发
    store.subscribe((mutation, state  => {
        window.localStorage.setItem('vuex', JSON.stringify*=(xxx))
    }))

    const prevState = window.localStorage.getItem('vuex')
    if(prevState) {
        // 替换状态
        store.replaceState(JSON.parse(prevState))
    }
}
```