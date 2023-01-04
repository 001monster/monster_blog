---
title: （二）compositionApi 的入口
order: 2
date: 2022-11-08
category:
    - VueCompositonApi
tag: 
    - Vue3
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## compositionApi 的入口
1. 子组件
```html
<!-- composition api 的入口文件是 setup 他是一个函数通过返回值可以在模板中访问返回之后的值 -->
<template>
  <ul>
    <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
  </ul>
</template>
<script>
export default {
  setup() {
    const messages = [
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ];

    return { messages };
  },
};
</script>
```

2. 父组件
```html 
<template>
  <main>
    <div class="container">
      <MessageList />
    </div>
  </main>
</template>

<script>
import MessageList from "./components/MessageList.vue";

export default {
  components: {
    MessageList,
  },
// 以为setup 只是替换了 data computed 这些选项中的属性，其他components props emit 这些配置项还是向以前的写法，但是后面会有方法解决的
  setup() {},
};
</script>
```