---
title: （二）定义和访问状态（state）
order: 2
date: 2022-11-15
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271445704.png)

#### 定义和访问状态（state）

#### 一、添加 `state` 数据
:::info state
所有的全局数据都在 `state` 中，保存数据需要添加 `state` 函数，这里的 `state` 和 `data` 函数是一样的，里面可以是任何 `javaScript` 代码
:::
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      num: 1,
      str: "string",
      bool: true,
      arr: [1, 2, 3],
      user: {
        id: 1,
        name: "John",
        age: 25,
      },
    };
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
```

#### 二、访问 `state` 数据
- 需要使用 `computed` 计算属性来获取 `state` 值，这样 `state` 的值改变了才会动态响应
```js
computed: {
  num() {
    return this.$store.state.num;
  }
}
```

- 访问 `state` 数据的第二种方法
```js
// 如果像上面一个一个的去获取非常麻烦
// 这时候 vue 给我们提供了一个 mapState 函数来把全局的数据映射到computed中
import { mapState } from "vuex"
export default {
  computed: {
    ownComputed() {
      return "自己的计算属性";
    },
    // 把state 中的数据映射到组件中 数组中的就是 state中的数据
    ...mapState(["num", "str", "bool", "arr", "user"]),
  }

  如果有复杂的逻辑，就需要写成对象函数的形式
  computed: mapState({
    num: (state) => state.num,
    num: "num",
    count: "num",
  })
}
```