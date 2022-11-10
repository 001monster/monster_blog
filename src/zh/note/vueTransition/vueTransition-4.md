---
title: （四）处理组件进场和离场动画 <Transition />
order: 4
date: 2022-11-10
category:
    - Vue背后的机制
---

### 使用 `vue` 处理组件进场和离场动画
:::info 说明
我们先来看一下啊 `<Transition />` 的作用

```html
<!-- 如果我们把一个组件 或者是html元素 放到 Transition 这个标签里面 那么里面的组件会在元素挂载和卸载的时候自动应用或者是移除一些class类名 -->
<Transition>
  <div v-if="show" class="box"></div>
</Transition>

<!-- Transition 还接收一个名字 -->
<Transition name="zsw">
  <div v-if="show" class="box"></div>
</Transition>
<!-- 当上面那个标签设置了名字的时候，vue默认的class名字的 v 就会变成以设置的那个名字开头 -->
<style>
  /* 变成以自定义的name 开头的class */
  zsw-enter-from {}
  zsw-enter-to {}
  zsw-enter-active {}
</style>
```
:::
### 具体 `class` 样式参考下表
:::info 说明
`v-enter-active` 和 `v-leave-active` 会一直啊在 `to` 和 `form` 一直存在
:::

![](https://image.zswei.xyz/img/202211101730565.png)
![](https://image.zswei.xyz/img/202211101730547.png)