---
title: 7.Vue单文件应用续
icon: code
date: 2022-11-03
category:
    - vue
---

## vue单文件应用续
### 一、创建模板
```js
// 模板
<template>
  <div>
    <input v-model="content" />
    <p>你共输入了 {{ count }} 个字符</p>
  </div>
</template>


// 脚本
<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
};
</script>


// 样式
<style scoped>
</style>
```

### 二、使用模板
```js
// 使用模板
<template>
  <main>
    <div>
      <h1>字符统计应用</h1>
      <WordCount />
    </div>
  </main>
</template>


<script>
// 引入注册组件
import WordCount from "./components/WordCount.vue"
export default {
  components: {
    // 注册组件
    WordCount,
  },
};
</script>


// 样式
<style>
</style>
```