---
title: （九）vuex 模块命名空间
order: 9
date: 2022-11-26
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211261821943.png)

#### 一、创建命名空间

:::info 说明
在我们上一章中我们学习了 `vuex` 的模块化，他最终都会汇总成为一个 `store` 使用和之前在一个文件当中的写法是一样的！但是当模块多了里面可能会有重复命名的方法和数据，所以这个时候就需要使用模块化命名
:::
- 像这个如果触发一个 `mutations` 因为他们两个名字相同，所以就会同时触发两个

![](https://image.zswei.xyz/img/202211262115354.png)

- 为了解决上面这中问题就需要在子模块中启用命名空间
```js
// 启用命名空间
export const blogs = {
  // 开启命名空间
  namespaced: true
}

// 调用的时候就是
// 这里的 blogs 是子模块导出的命名
this.$store.commit('blogs/add')
```

#### 二、防止命名冲突
- 通过开启命名空间就可以防止重复命名的冲突，但是在使用的时候又麻烦了，都需要加上前缀 `blogs/xxx`，为了解决上面这种问题，`mapState` 就有第二种映射方法
```js
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    // 第一种写法 这样访问的时候在模板中要加 / 就不好访问 但是不带命名空间的还是可以直接放在里面
    ...mapState(['blogs/add'])

    // 第二种写法, 第一个参数传递空间名字，第二个参数个数据，放的是空间里面的 state
    ...mapState('blogs', ['add'])
  }
}
</script>
```

#### 三、命名空间使用其他模块的 `getter`
- 启用了命名空间的话，在使用 `getter` 的时候就不能使用他的第二个参数 `getters` 来访问全局的 `getter` 了，他就只能方便自身模块的 `getter` 了，如果启用了命名空间还需要访问其他命名空间的， `getter` 的话，就需要使用 `第四个` 参数了， `rootGetters`
```js
export const users = {
  getters: {
    // users.js
    limitedUserCoumtStr(state, getters, rootState, rootGetters) {
      console.log(rootGetters)
      console.log(rootState)
      // 访问的是 blogs.js 中的 getters
      // return getters.limitBlogCountStr + '用户名'

      // 启用了名空间需要使用 rootGetters 来访问其他模块的 getter
      return rootGetters["blogs/limitBlogCountStr"] + '用户名'
    }
  }
}
```

#### 四、命名空间使用其他模块的 `state` 
:::info 说明
在模块中访问其他模块的 `state` 都可以通过 方法参数中的 `rootState` 来访问其他模块中的 `state`
:::info 说明
```js
export const users = {
  actions: {
    // 这些数据都是从 context 里面结构出来的
    getBlogs({commit, dispatch, rootState, getters}){
      console.log(rootState, '命名空间内访问其他模块的state')
    }
  },

  getters: {
    updateUsers(state, getters, rootState){
      console.log(rootState, '命名空间内访问其他模块的state')
    }
  }
}
```

#### 五、命名空间触发其他模块的 `actions`
:::info 说明
访问命名中的 `actions` 和在模板中访问是一样的，有命名空间的就使用命名空间的方式，使用本空间的 `actions` 就正常使用
:::
```js
export const usner = {
  actions: {
    getblog({commit, dispatch, rootState, getters}, payload) {
      // 和在模板中使用是一样的，前面要加上 命名空间
      commit('blogs/addBlog', {blog: 'bfromUser'})

      // 如果过是调用本空间的 actions 的话就用正常的写法
      commit('addBlogAsync', {blog: 'bfromUser'})
    }
  }
}
```

#### 六、在命名空间中定义全局可以触发的 `actions`  不带命名空间
```js
export const user = {
  actions: {
    // 此时 actions 里面的方法就不在是函数的写法，而是一个对象
    addBlogGlobal: {
      root: true,
      handler({ commit }, payload) {
        setTimeout(() => {
          comit('addBlog', payload)
        }, 1000)
      }
    }
  }
}
```

#### 七、在命名空间中访问其他模块的 `mutations`
```js
export const user = {
  actions: {
    addBlogGlobal({commit, despatch, rootState, getters}) {
      commit('blogs/addBlog', {blog: 'newBlog'})
    }
  }
}
```


#### 总结-写在最后
:::info 
如果开启了命名空间，不管是 `state` 或者 `mutations` 再或者 `actions`，`getters` 使用的方式都是大同小异的
:::
```js
<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  export default {
    methods: {
      ...mapMutations('空间名字', ['方法名']),
      ...mapActions('空间名字', ['方法名'])
    }，
    computed: {
      ...mapState('空间名字', ['state数据名']),
      ...mapGetters('空间名字', ['getters 名字'])
    }
  }
</script>
```
:::info 说明
如果要启用命名空间，只需要在该模块中将 `namespaced` 设置为 `true`
使用的时候需要加上命名空间的前缀
:::
```js
export const user = {
  namespaced: true,
}
```