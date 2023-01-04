---
title: （十一）定义多个 store
order: 11
date: 2022-11-28
category:
    - pinia 状态管理工具
tag: 
    - Vue和Pinia
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、定义多个 `store`
:::info 说明
我们在开发大型项目的时候会有很多的状态，比如说关于用户的，关于产品的，等等之类的，如果我们把他放在一个 `store` 里面就会变得非常难以维护
:::

- 在原有的 `note.js` `store` 上在加一个关于用户登录的 `user.js`
```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const user = ref({
        name: 'bob',
        phone: '157****7802',
        email: '2966211270@qq.com'
    })

    return {
        user
    }
})
```

### 二、使用 `store`
```html
<template>
    <div>{{userStore.name}}</div>
</template>

<script setup>
import { useUserStore } from '@/store/user.js'

const userStore = useUserStore()
</script>
```