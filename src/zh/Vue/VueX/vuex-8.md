---
title: （八）vuex 模块化
order: 8
date: 2022-11-26
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211261729674.png)



#### 一、`vuex` 模块化&减少文件体积
:::info 说明
随着我们项目越来越大，把所有的状态都放到一个文件中，会非常难以管理，所以 `vuex` 支持我们使用，模块化
:::
- 每一个模块都是一个普通的对象，他跟 `createStore` 传递的参数是一样的，同时还可以定义模块，在开发中，我们把子模块定义在单独的文件中然后进行导出使用
```js
// users.js
export const users = {
  state() {},           // 存储全局的数据，相当于 data
  mutations: {},        // state 的数据只有在这里才能够被修改，并且必须是同步操作，不能是异步操作
  actions: {},          // 这里是异步操作，如果需要改变 state 中的数据，需要调用 mutations 的方法来改变
  getters: {},          // getters 相当于 vuex 中的计算属性，全局getters
  modules: {}           // 子模块
}
```

#### 二、`state` 的根模块
- 我们把 `createState` 中的模块称为顶级模块，或者是根模块，然后通过 `modules` 来加载子模块，`modules` 的属性名是子模块的对象名
```js
import { users } from './users.js'
import { blogs } from './blogs.js'

const store = createStore({
  modules: {
    users,
    blogs,
  },
  state() {},
  mutations() {}
  // ...
})
```

#### 三、最终状态
- 最终所有的对象都会合并成一个 `state` 跟定义一个完整的 `state` 文件的效果是一样的  
```js
{
  // users 和 blogs 属性名和 modules 中定义的保持一致
  users: {/* users 中的内容 */},
  blogs: {/* blogs 中的内容 */}
}
```

#### 四、模块中的配置(适用于没有命名空间的情况)
1. 模块中的 `mutations` 的第一个参数接收的是本模块的 `state` 他只会修改本模块的状态
```js
// users.js
mutations: {
  addUser(state, playload) {
    state.list.push(playload.user)
  }
}
```

2. 模块中的 `getters` 的第一个参数接收的也是本模块的 `state` 第二个参数 `getters` 可以访问 `所有模块的` `getters`， 第三个参数，`rootState` 可以访问所有模块的状态
```js
// users.js
limitedUserCoumtStr(state, getters, rootState) {
  console.log(getters)
  console.log(rootState)
  // 访问的是 blogs.js 中的 getters
  return getters.limitdBlogCountStr + '用户名'
}
```

3. 模块中的 `actions`, 中的第一个参数结构出来的 `{ commit }` 触发所有模块中的 `mutations` ,`{ dispatch }` 触发所有模块中的 `actions`，`{ rootState }` 来访问其他模块的 `state`，通过 `getter` 可以访问所有模块的 `getters` 
- 注意 `actions` 中 `context` 的 `state` 参数只能访问本模块的状态，要想访问其他模块的状态，使用 `context` 解构出来的 `rootState`
```js
// users.js
actions: {
  adduserAsync({commit, dispatch, rootState, getters}, payload) {
    setTimeout(() => {
      setTimeout(() = {
        commit('addUser', playload)
        dispatch('addBlogAsync', {blog: 'bfremUser'})
      }, 1000)
    })
  }
}
```

#### 总结-写在最后
:::info 总结
本模块中的 `mutations` 只能修改本模块的中的  `state`
 `actions` `getter` 可以通过参数来访问所有模块的 `mutations` , `actions`, `getters`
:::