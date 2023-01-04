---
title: （六）解决路由组件切换刷新问题
order: 6
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211131247196.png)

#### 路由组件不刷新
- 可以从地址栏看到，`url` 改变了，但是租价你的内容却没有改变，`vueRouter` 对于这种同组件的跳转时不会在重新销毁常创建的

![](https://image.zswei.xyz/img/202211131249742.png)

- 通过 `watch` 监听解决
```html
<template>
  <article>
    <h2>
      {{ blogPost.title }}
    </h2>
    <p>{{ blogPost.body }}</p>
    <footer>
      <router-link to="/">回到主页</router-link>
      <router-link :to="`/${blogPost.id - 1}`">上一篇</router-link>
      <router-link :to="`/${blogPost.id + 1}`">下一篇</router-link>
    </footer>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";

export default {
  data() {
    return { blogPost: {} };
  },

  // 方式一，和 vue 3 的使用基本一样
  // created() {
  //     this.$watch(
  //       () => this.$route.params,
  //       function (params, OldParams) {
  //         this.blogPost = getBlogPostById(this.$route.params.postId);
  //       },
  //       {
  //         immediate: true,
  //       }
  //     );
  // },
  // 方式二
  watch: {
    "$route.params": {
      handler(params, oldParams) {
        this.blogPost = getBlogPostById(params.postId);
      },
      immediate: true,
    },
  },
};
</script>
```