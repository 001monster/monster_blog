---
title: （十九）样式绑定响应性数据
order: 19
date: 2022-11-06
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 在样式绑中定响应性数据
:::info 注意
给css 绑定动态的响应性数据是在 vue3.2 之后的版本才支持
:::

```html
<template>
  <main>
    <div class="box"></div>
    <div class="control">
      <!-- 给input 设置 type="range" 并把值通过v-model 与data 数据中的 degree 绑定-->
      <input type="range" min="0" max="360" v-model="degree" />
    </div>
    <p>当前角度：{{ degree }}</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      // 角度数据
      degree: 0,
    };
  },

  computed: {
    newDegredd() {
      return this.degree + 'deg'
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

main {
  display: grid;
  place-items: center;
  row-gap: 24px;
}

.box {
  width: 250px;
  height: 250px;
  border-radius: 8px;
  background-color: hsl(280deg, 100%, 60%);
  box-shadow: 0 0 24px hsl(280deg, 100%, 70%, 0.5);
  /* 对元素进行旋转 */
  /* transform: rotate(v-bind(degree + "deg")); */
  transform: rotate(v-bind(newDegredd));
}

.control {
  margin-top: 64px;
}
</style>

```

![示例图](https://image.zswei.xyz/img/vue-19.png)

### 总结：写在最后
:::info 总结
在css中绑定动态的数据，通过v-bind 绑定，同时在css 中v-bind是一个函数，他接收一个参数，就是data中需要响应的参数，参数支持任意的js表达式

如果css 中的动态数据表达式太长了可以使用computed 计算属性计算，使用方式是和在模板中使用是一样的
:::