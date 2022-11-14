---
title: （二十四）封装 router-link 组件
order: 24
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211132216232.png)

#### 封装 router-link 组件

#### 一、自定义`router-link` 样式
```html
<template>
  <!-- 使用 custom 来告诉组件我们要开始使用自定义样式了 -->
  <router-link custom v-bind="$props" v-slot="{ navigate }">
    <button @click="navigate">
      <!-- 可以自定义内容 -->
      <slot/>
    </button>
  </router-link>
</template>

<script>
  export default {
    // 因为我们知道，当没有定义props 的值的元素会默认全部放到 根元素身上，所以这里可以这么写
    props： {
      ...RouterLink.props
    }
  }
</script>
```
- 使用封装成按钮的route-link
```html
<ButtonLink to="/index">跳转详情页</ButtonLink>
```


#### 二、判断用户是否登录，或者权限来展示路由
```html
<template>
  <router-link v-if="!private || isLoggedIn()" v-bind="$props">
    <slot />
  </router-link>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props,
    private: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isLoggedIn() {
      // 真实开发中可以判断用户是登录或者是否有权限
      // localStorage.getItem("user") !== null;
      return false;
    },
  },
};
</script>
<style scoped></style>

```