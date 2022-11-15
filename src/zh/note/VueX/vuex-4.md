---
title: （四）Vuex 中的计算属性getters
order: 4
date: 2022-11-15
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211121823045.webp)

#### Vuex 中的计算属性 `getters`
:::info 说明
可以把 `veux` 中的 `getters` 当成计算属性，他定义在全局状态管理中，一来可以复用逻辑代码，二来可以减少组件的代码量
:::

#### 一、定义 `getters` 方法
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      users: [
        {
          id: 1,
          name: "John",
          age: 25,
        }
      ],
    };
  },
  getters: {
    // 筛选出所有大于23的人
    usersOlderThan23(state) {
      return state.users.filter((user) => user.age > 23);
    }
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
```

#### 二、使用 `getters`
- 通过 `this.$store.getters.getters中的名字`来获取
```html
<!-- 因为 getters 就跟计算属性一样，使用的时候不用加括号 -->
<p v-for="user in $store.getters.usersOlderThan26">
  user: <span>{{ user }}</span>
</p>
```

- 使用 `getters` 的第二中方式
```html
<script>
  // 直接使用映射数组中的名字 usersOlderThan23
<p v-for="user in usersOlderThan26">
  user: <span>{{ user }}</span>
</p>

// getters vue 同样也提供了 映射函数
import { mapGetters } from 'vuex'
export default {
  // 也是通过 computed 来访问
  computed: mapGetters(['usersOlderThan23'])
}
</script>
```

#### 三、`getters` 中的第二个参数
- 在 `geters` 中的第二个参数可以传递其他所有的 `getters`
```js
getters: {
  // 筛选出所有大于23的人
  usersOlderThan23(state) {
    return state.users.filter((user) => user.age > 23);
  },
  // 调用其他的getters 也是把他当成普通数据来使用不用加括号
  numberOfUsersOlderThan23(state, getters) {
    return getters.usersOlderThan23.length;
  }
}
```

#### 四、用户传递参数自定义计算条件
```js
getters: {
  usersOlderThan(state) {
    // 通过返回一个方法去让用户自己也条件
    // 这种情况不会缓存结果
    return (age) => state.users.filter((user) => user.age > age);
  }
}
```
- 使用传参
```html
<!-- 因为 usersOlderThan 返回的是一个函数，所以可以直接调用传参-->
<p v-for="user in usersOlderThan(25)">
  user: <span>{{ user }}</span>
</p>

<script>
computed: mapGetters([
  "usersOlderThan26",
  "numberOfUsersOlderThan26",
  "usersOlderThan",
])
</script>
```