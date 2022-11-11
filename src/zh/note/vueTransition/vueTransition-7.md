---
title: （七）列表项的进场/离场动画
order: 7
date: 2022-11-11
category:
    - Vue动画过渡
---

### 处理列表项的进场/离场动画
:::info 说明
列表进场离场动画经常使用，vue 也给我们提供了这个组件 `<TransitionGroup />` 

- 其中这个组件也有两个参数 `<TransitionGroup name="" tag="" />` 
 1. 参数一：重命名 `class` 前缀名称
 2. 参数二：把 `<transitionGroup />` 这个组件解析成某个标签

- 该组件他一共有7个 `class` 状态
```css
/* 元素进入之前的动画 */
.fade-enter-from {
  opacity: 0;
}
/* 进入中 */
.fade-enter-active {
  transition: all 0.7s ease-in-out;
}
/* 进入之后 */
.fade-enter-to {
  opacity: 1;
}
/* 元素离开之前 */
.fade-leave-from {
  opacity: 1;
  transform: rotate(0);
}
/* 离开中 */
.fade-leave-active {
  transition: all 0.3s ease-in;
}
/* 离开之后 */
.fade-leave-to {
  opacity: 0;
  transform: rotate(360deg);
}
/* 移动元素的动画 */
.fade-move {
  transition: transform 0.3s ease-out;
}
```
:::


- 子组件组件
```html
<template>
  <div class="box"><slot></slot></div>
</template>

<script setup></script>
```

- 父组件使用并设置动画
```html
<template>
  <main>
    <div class="container">
      <!-- <div> -->
      <TransitionGroup name="fade" tag="div">
        <RectangleBox
          v-for="(num, index) in nums"
          :key="num"
          @click="nums.splice(index, 1)"
          >{{ num }}</RectangleBox
        >
      </TransitionGroup>
      <!-- </div> -->

      <button @click="nums.splice(next % nums.length, 0, next++)">
        添加元素
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import RectangleBox from "./components/RectangleBox.vue";

const next = ref(7);

const nums = ref([0, 1, 2, 3, 4, 5, 6]);
</script>
```
![](https://image.zswei.xyz/img/202211112150310.png)