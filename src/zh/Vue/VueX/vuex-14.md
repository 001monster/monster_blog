---
title: （十四）Vuex CompositonApi
order: 14
date: 2022-11-27
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271429420.png)

#### 一、如何在 `compositionApi` 中获取 `store`
```js
<script setup>
const store = userSore()

// 模板直接使用
const users = computed( () => store.state.users)
cosnt blogs = computed( () => store.state.blogs)
</script>
```

#### 二、获取 `getter`
```js
<script setup>
const store = userSore()

// 不带命名空间直接访问
cosnt limitUserContStr = computed( () => store.getters.limitUserContStr)

// 访问带命名空间的
const limitBlogsContStr = comuted( () => store.getters["blogs/limitBlogsContStr"])
</script>
```

#### 三、使用 `mutations` `actions`
```js
<script setup>
const store = userStore()

// 触发 mutations
cosnt addUser = (payload) => store.commit('addUser', playload)

// 触发 actions
const addBlogs = (playload) => store.dispatch('addBlogs', playload)
</script>
```