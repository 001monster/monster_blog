---
title: （十）向父组件传递数据
order: 10
date: 2022-11-04
category:
    - vue
---

## 向父组件传递数据

### 一、子组件向父组件传值
1. 子组件
```html
<template>
  <div>
    <a :href="link">{{ title }}</a>
    <button @click="setUpFater(id)">删除</button>
  </div>
</template>
<script>
export default {
  // 接收父组件传递的值
  props: ["id", "link", "title"],

  // 自定义事件修改父组件传递的值
  emits: ["deletePost"],

  methods: {
    setUpFater(id) {
      // 自定义事件
      this.$emit('deletePost', id)
    }
  }
};
</script>
```
2. 父组件
```html
<template>
  <main>
    <div>
      <BlogPostItem
        v-for="post in posts"
        :key="post.id"
        v-bind="post"
        @deletePost="handleDeletePost"
      />
    </div>
  </main>
</template>

<script>
  // 引入子组件
import BlogPostItem from "./components/BlogPostItem.vue";

export default {
  // 注册子组件
  components: {
    BlogPostItem,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Post 1", link: "https://some.url.com" },
        { id: 2, title: "Post 2", link: "https://some.url.com" },
        { id: 3, title: "Post 3", link: "https://some.url.com" },
      ],
    };
  },
  methods: {
    // 嗲用子组件传递过来的方法，里面的参数就是子组件传递过来的参数
    handleDeletePost(id) {
      this.posts = this.posts.filter((p) => p.id !== id);
    },
  },
};
</script>
```