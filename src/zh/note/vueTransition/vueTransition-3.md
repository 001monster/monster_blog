---
title: （三）纯 CSS 进场/离场动画的问题
order: 3
date: 2022-11-10
category:
    - Vue动画过渡
---

### 使用纯 `css` 实现进场/离场动画的问题
:::info 说明
- 使用 `css` 虽然可以实现大部分的动画，但是很多复杂的动画还是需要使用 `javasctipt` 来实现

- 对于使用 `v-if` 来控制的元素，添加动画会更加棘手
:::

```html
<!-- 通过v-if 来控制 动画过度的问题 -->
 <template>
  <main>
    <div class="container">
      <button @click="show = !show">{{ show ? "隐藏" : "显示" }}</button>
      <div v-if="show" :class="animationClasses"></div>
    </div>
  </main>
</template>

<script setup>
import { ref, watchEffect } from "vue";
// 控制元素的显示与隐藏
const show = ref(false);

// 动态设置class
const animationClasses = ref(["box"]);

watchEffect(() => {
  if (show.value) {
    // 显示添加这个动画
    animationClasses.value = ["box", "box-enter"];
  } else {
    // 不显示添加这个动画
    animationClasses.value = ["box", "box-leave"];
  }
});
</script>

<style>
  .box-enter {
  animation: fade 0.5s;
}

.box-leave {
  animation: fade 0.5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
```
- 发现 显示的时候，可以淡出有动画，但是隐藏的时候就没有动画了，这是因为 v-if 是直接就将 dom 元素移除了执行不了动画了，如果要执行离场的画的话，就需要通过 js 来控制当 dom 元素动画执行完毕了在移除

![](https://image.zswei.xyz/img/202211101651424.png)