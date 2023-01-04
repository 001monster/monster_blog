---
title: （六）组件的切换动画
order: 6
date: 2022-11-11
category:
    - Vue动画过渡
tag: 
    - Vue动画
---

![](https://image.zswei.xyz/img/202211121823045.webp)

### 在多个 组件 间切换动画
:::info 说明
在多个组件之间切换动画原理和 元素切换是一样的
:::

![](https://image.zswei.xyz/img/202211111433918.png)

#### 圆形组件
```html
<!-- 圆形组件 -->
<template>
  <div class="dot"></div>
</template>

<script setup></script>

<style scoped>
.dot {
  width: 100px;
  height: 100px;
  padding: 0.5em 1.4em;
  border-radius: 50%;
  color: white;
  background: linear-gradient(
    45deg,
    hsl(140deg, 60%, 50%),
    hsl(200deg, 90%, 50%)
  );
}
</style>

```

#### 方形组件
```html
<!-- 方形组件 -->
<template>
  <div class="box"></div>
</template>

<script setup></script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
}
</style>

```

#### 动态切换组件
```html 
<template>
  <main>
    <div class="container">
      <Transition name="fade" mode="out-in">
        <!-- 使用vue 的动态切换组件 -->
        <componentS :is="shape"></componentS>
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, Transition } from "vue";
// 引入两个组件
import CircleDot from './components/CircleDot.vue'
import RectangleBox from './components/RectangleBox.vue'

const boxes = [CircleDot, RectangleBox];

const current = ref(0);

const shape = computed(() => boxes[current.value]);

setInterval(() => {
  current.value = (current.value + 1) % boxes.length;
  console.log(current.value)
}, 1500);
</script>
```