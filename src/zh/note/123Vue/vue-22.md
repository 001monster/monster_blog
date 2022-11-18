---
title: （二十二）自定义指令
order: 22
date: 2022-11-06
category:
    - vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 自定义指令-增强的 `HTML` 功能
```html
<template>
  <main>
    <div>
      <!-- <p v-fsize="18">这是一个段落</p> -->
      <!-- <p v-fsize="fontSize">这是一个段落</p> -->
      <!-- v-fsize:[参数] 可以传递动态参数 -->
      <p v-fsize:[unit]="fontSize">这是一个段落</p>
      <button class="btn increase" @click="fontSize += 1">A</button>
      <button class="btn decrease" @click="fontSize -= 1">a</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 18,
      unit: "em",   // 这里可以传递动态参数
    };
  },
};
</script>
```

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// app.directive("fsize", {
//   mounted(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
//   // 这样在 data 更新时，才会触发指令更新
//   updated(el, binding) {
//     el.style.fontSize = binding.value + "px";
//   },
// });

// 如果 mounted 和 updated 的代码相同，可以合并为一个：
// app.directive("fsize", (el, binding) => {
//   el.style.fontSize = binding.value + "px";
// });

// 带有 args：是自定义指令后面[]带的动态参数
app.directive("fsize", (el, binding) => {
  el.style.fontSize = binding.value + (binding.arg || "px");
});

app.mount("#app");

```

### 总结：写在最后
:::info 总结
`v-fsize:[参数]` 可以传递动态参数
`args：` 是自定义指令后面[]带的动态参数

如果 mounted 和 updated 的代码相同，可以合并为一个, 写成函数形式
```js
app.directive("fsize", (el, binding) => {
  el.style.fontSize = binding.value + "px";
});
```
:::