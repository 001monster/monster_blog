---
title: （三）定义和触发 Mutations
order: 3
date: 2022-11-15
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211271446997.png)

#### 定义和触发 `Mutations`

#### 一、通过 `mutations` 来修改全局数据 `state`
:::info 说明
全局的 `state` 数据必须调用 `mutations` 来修改才能修改成功，否在修改不会生效
:::

#### 二、定义 `mutations`
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { INCREMENT } from "./mutation_types";

const store = createStore({
  state() {
    return {
      num: 1,
      arr: [1, 2, 3],
      user: {
        id: 1,
        name: "John",
        age: 25,
      },
    }
  },
  mutations: {
    // 给 num 进行自增操作
    increment(state) {
      state.num++;
    },
  }
})

const app = createApp(App);
app.use(store);
app.mount("#app");
```

#### 三、触发 `mutations` 里面定义的函数来修改 `state` 数据
- 通过 `this.$store.commit('mutations里面定义的方法')` 来修改数据
```html
<button @click="$store.commit('increment')">增加数量</button>
```

- 触发 `mutations` 修改数据的第二种方法
```js
import { mapMutations } from "vuex"
export default {
  // dom元素直接调用这些方法来进行修改传递单数
  methods: mapMutations(['increment']),
}
```


#### 三、`mutations` 带参数
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { INCREMENT } from "./mutation_types";

const store = createStore({
  state() {
    return {
      num: 1,
      arr: [1, 2, 3],
      user: {
        id: 1,
        name: "John",
        age: 25,
      },
    };
  },
  mutations: {
    // 第二个参数是调用时传递的参数
    pushToArr(state, payload) {
      state.arr.push(payload.ele);
    }
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
```

#### 四、给 `mutations` 传递参数
```html
<button @click="pushToArr({ ele: arr.length + 1 })">追加元素</button>

<script>
  import { mapMutations } from "vuex"
  export default {
    // dom元素直接调用这些方法来进行修改传递单数
    methods: mapMutations(['increment', 'pushToArr']),
  }
</script>
```

#### 五、使用动态的名字 `redux`
- `redux` [官网](https://cn.redux.js.org/)
```js
// 1. 首先创建一个保存常量名字的 js 文件，然后通过 分别暴露来暴露出去
export const INCREMENT = "increment"      // 这里统一设置名字

// 2. 使用
import { INCREMENT } from "./mutation_types"  // 导入需要用的常量名字
export default {
  // 使用也是使用这个
  methods: mapMutations([INCREMENT])
}

// 3. 定义的时候也发生了变化，通过中括号来使用
import { INCREMENT } from "./mutation_types"  // 也需要导入
[INCREMENT](state) {
  state.num++;
}
```