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

```html
<template>
  <main>
    <div class="container">
      <button @click="show = !show">
        {{ show ? "隐藏" : "显示" }}
      </button>
      <!-- 自定义一个名字 zsw Transition 这个组件需要引入-->
      <Transition name="zsw">
        <div v-if="show" class="box"></div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
  import { ref, Transition } from "vue";
  const show = ref(false);
</script>

<style>
/* 进入页面之前的状态 */
.zsw-enter-from{
  opacity: 0;
}
/* 进入页面中的样式 会在 from 和 to 之间一直存在 */
/* 设置不同的进场参数 */
.zsw-enter-active{
  transition: all 0.3s ease-in-out;
  animation: scale 0.3s ease-in-out;
}
/* 进入页面之后的状态 */
.zsw-enter-to{
  opacity: 1;
}

/* 离开页面之前的状态 */
.zsw-leave-form{
  opacity: 1;
}
/* 离开页面中的样式 会在 from 和 to 之间一直存在 */
/* 设置不同的离场参数 */
.zsw-leave-active{
  transition: all 0.3s ease-in;
  animation: scale 0.3s ease-in reverse;
}
/* 离开页面后的状态 */
.zsw-leave-to{
  opacity: 0;
}

/* 自定义动画 */
/* 在 xxx-enter/leave-active 之中使用 */
@keyframes scale {
  0%{
    transform: scale(0),
  }
  33%{
    transform: scale(1.1);
  }
  66%{
    transform: scale(0.9);
  }
  33%{
    transform: scale(1);
  }
}
</style>
```
:::

![](https://image.zswei.xyz/img/202211101730565.png)
![](https://image.zswei.xyz/img/202211101730547.png)