---
title: （二十六） render渲染函数
order: 26
date: 2022-11-07
category:
    - vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

##  render渲染函数 `jsx`
1. `template` 模板写法
```html
<template>
  <div class="card">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
}
```

2. `h` 函数使用 `jsx` 写法
```js
// 引入 vue 的 h 函数可以让 vue 支持，jsx 写法，也就是底层写法，这个是 react的默认语法
<script>
import { h } from 'vue'
export default {
  props: ["title"],
  render() {
    return h('div', {class: 'card'},
    [
      h('div', {class: 'title'}, this.title),
      h('div', {class: 'content'}, this.$slots.default()),
      // map 代替 v-for，if/else 代替 v-if，children 可以是数组
      [1,2,3,4].map(item => h('h', + item, {}, item))
    ])
  }
};
</script>
```

![render渲染函数](https://image.zswei.xyz/img/vue-26.png)

3. 父组件
```html
<template>
  <main>
    <div>
      <BaseCard title="卡片标题">这是卡片内容</BaseCard>
    </div>
  </main>
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>
```

### 总结：写在最后
:::info 总结
要想  `vue` 支持 `jsx` 语法，就需要引入一个 `vue` 的 `h` 函数
他接收三个值
```js
import { h } from 'vue'
h('div', {class: 'title'}, this.title)

// 第一个值是标签名字
// 第二个值是 标签属性,如class等, 不用必填
// 最后一个参数可以是 文字, 组件, 或者是下一个组件的回调
```
:::