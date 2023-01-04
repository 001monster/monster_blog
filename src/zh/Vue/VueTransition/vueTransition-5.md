---
title: （五）元素的切换动画
order: 5
date: 2022-11-10
category:
    - Vue动画过渡
tag: 
    - Vue动画
---

![](https://image.zswei.xyz/img/202211121823045.webp)

### 在多个 html 原生原生元素之间切换动画

#### 一、在多个dom 元素之间切换动画
:::info 
```html
<template>
  <main>
    <div class="container">
      <Transition name="fade">
        <!-- 第一种通过判断写法 -->
        <!-- <div v-if="box === 'box1'" class="box box1"></div>
        <div v-else-if="box === 'box2'" class="box box2"></div>
        <div v-else class="box box3"></div> -->
        
        <!-- 第二中写法, 动态使用class, 但是我们发现class切换
        了，但是页面没有变化，因为元素一直都是这一个元素，
        如果西药动态切换就给他加个 key -->
        <div= class="box" :class="box" :key="box">
      </Transition>
    </div>
  </main>
</template>

<script setup>
import { ref } from '@vue/runtime-core'
import { computed } from '@vue/runtime-core'
import { Transition } from 'vue'

// 定义一个容器来判断
const boxes = ['box1', 'box2', 'box3']
// 定义响应式数组下标
const current = ref(0)
// 使用计算属性动态计算数组下标
const box = computed(() => boxes[current.value] )

// 定义一个计数器当作触发机制
setInterval(() => {
  // 通过取模的方式来循环在0-2之间动态切换
  current.value = (current.value + 1) % boxes.length
  console.log(current.value)
}, 1500)
</script>

<style>
  .box {
  width: 100px;
  height: 100px;
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
}
.box1 {
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
}
.box2 {
  background: linear-gradient(
    45deg,
    hsl(140deg, 60%, 50%),
    hsl(200deg, 90%, 50%)
  );
}
.box3 {
  background: linear-gradient(
    45deg,
    hsl(0deg, 60%, 50%),
    hsl(50deg, 90%, 50%)
  );
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.7s ease-in-out;
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>
```

- 我们发现通过上面的方式能够动态的切换多个元素的 `css` 但是前面的元素还没有消失后面的元素就出现了，导致页面卡顿一下

![](https://image.zswei.xyz/img/202211102212638.png)

- 解决上面的这个问题有很多方法
  1. 我们可以使用 绝对定位 `absolute`
  2. 使用 `grid` 定位
  3. 也是推荐的一种用法，就是在 `Transition` 标签中有一个元素 `mode` 里面有两种状态的值
  ```html
  <Transition name="fade" model=""> 
    <!-- out-in: 在上一个元素离开之后下一个元素在进场 -->
    <!-- in-out: 下一个元素先进程，上一个元素才离开-->
    <!-- 默认是同时进行的 -->
  ```
:::

![](https://image.zswei.xyz/img/202211102245721.png)