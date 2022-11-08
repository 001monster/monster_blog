---
title: （二十九）组件错误处理
order: 29
date: 2022-11-07
category:
    - vue
---

##  组件错误处理,全局错误处理

### 一、全局处理错误

1. 我们正在组件当中,自定义一个未抛出的错误
```html
<template>
  <ul>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  components: {
    AppListItem,
  },
  mounted() {
    // 自定义一个未捕获的错误
    throw new Error("发生了异常");
  },
};
</script>
<style scoped></style>
```

2. 全局处理错误
```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.errorHandler = (err, vm, info) => {
  console.log(err)    // 错误信息
  console.log(vm)     // vue 实例
  console.log(info)   // 错误位置
}

app.mount("#app");

```

### 、局部处理错误(错误边界)
:::info 说明
错误边界就像是事件冒泡一样,会一直网上冒到父组件,直到错误事件被捕获处理
:::

3. 边界捕获处理
```html
<template>
  <li><slot></slot></li>
</template>
<script>
export default {
  mounted() {
    throw new Error("AppListItem 组件异常");
  },
};
</script>
<style scoped></style>
```

4. 组件处理错误
```html
<template>
  <p v-if="error">啊哦，出错了！</p>
  <ul v-else>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  data() {
    return {
      error: false,
    };
  },
  components: {
    AppListItem,
  },

  // 错误处理生命周期
  errorCaptured(err, instance, info) {
    console.log(err)          // 错误信息
    console.log(instance)     // 组件的实例
    console.log(info);        // 错误位置

    // 出错了通过错误DOM元素向用户说出错了
    this.error = true;
    // 停止错误事件错误向上传递
    return false;
  },
};
</script>
<style scoped></style>

```

### 总结:写在最后
:::info 总结
全局处理错误是直接在main.js 里面进行统一处理

如果是边界处理的话(也就是组件错误自己处理)的话,就需要用到生命周期钩子 `errorCaptured()` 来处理,如果错误没有处理的话他会一直网上冒泡, 到` App.vue` 如果 `App.vue` 没有处理的话,就会把错误出现在控制台, 或者是组件当中处理错误了但是没有 `return false` 错误还是会一直网上冒泡的
:::