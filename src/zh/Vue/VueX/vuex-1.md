---
title: （一）第一个 Vuex 示例
order: 1
date: 2022-11-15
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271445062.png)

#### 第一个 `Vuex` 示例

#### 一、安装 `Vuex`

::: tabs
@tab:active npm
```sh
npm install add vuex@next
```

@tab Yarn
```sh
yarn add vuex@next
```

:::

#### 二、`main.js ` 导入配置 `vuex`
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

// 这里是状态管理
const store = createStore({
  // 把 state 当成 data
  state() {
    return {
      color: [100, 100, 100],
    };
  },

  // 修改 state 把 mutations 当成 methods 里面是一个一个的方法
  mutations: {
    // 默认接收一个参数 state 参数，他是上面的 state 参数
    randomColor(state) {
      state.color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
    },
  },
});

const app = createApp(App);

// 把state 添加到实例当中
app.use(store);

app.mount("#app");
```

#### 三、访问全局 `state`
- 使用 `this.$store.state.xxx` 来访问
```js
computed: {
    // 模板 或者样式中通过 bgColor 来获取颜色
    bgColor() {
        const colors = this.$store.state.color
        return `rgb(${colors.join(", ")})`
    }
}

.app{
    whidth: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    // 使用计算属性中计算出来的颜色
    background-color: v-bind(bgColor);
}
```

#### 四、修改 `state` 数据
- 使用 `this.$store.commit("mutations中定义的函数")` 来修改

```js
methods: {
    changeColor() {
        // 调用 mutations 中的方法来修改 state
      this.$store.commit("randomColor");
    },
}
```