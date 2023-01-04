---
title: （八）集成第三方库动画
order: 8
date: 2022-11-11
category:
    - Vue动画过渡
tag: 
    - Vue动画
---

![](https://image.zswei.xyz/img/202211121823045.webp)

### 集成第三方库动画
:::info 说明
集成第三方库，需要做一些配置，因为配置 `Transition` 和 `TransitionGroup` 是一样的，所以这里拿 `Transition` 做演示，他们可以通过 `props` 的方式来自定义 `class` 参数为一下6种
:::
- props参数图

![](https://image.zswei.xyz/img/202211112212705.png)
![](https://image.zswei.xyz/img/202211112212919.png)

- 示例图，如设置 `dev` 的进程动画为 `fadeIn`

![](https://image.zswei.xyz/img/202211112216014.png)

- 同时支持设置多个 `class` 多个 `class` 使用空格隔开，跟使用普通多个 `class` 一样

![](https://image.zswei.xyz/img/202211112218764.png)

##### 集成 `animate.css`

```html
<template>
  <main>
    <div class="container">
      <button @click="show = !show">{{ show ? "隐藏" : "显示" }}</button>
      <Transition
        name="fadeAndScale"
        enter-active-class="animate__animated animate__bounceIn"
        leave-active-class="animate__animated animate__bounceOut"
      >
        <div v-if="show" class="box"></div>
      </Transition>
    </div>
  </main>
</template>

<script setup>
  // 在这里引入全局都可以使用
import "animate.css";
import { ref, Transition } from "vue";

const show = ref(false);
</script>
```