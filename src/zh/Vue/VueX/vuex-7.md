---
title: （七）表单处理注意事项
order: 7
date: 2022-11-26
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211261700470.png)

#### 一、全局数据管理表单
:::info 说明
在大部分开发中，都不会把表单数据放到全局的 `vuex` 中，只需要在组件内部来定义保存就可以了，如果确实需要和 `vuex` 打交代，可以在表单提交之后把整体的表单数据保存到 `vuex` 中，如果业务确实需要保存到 `vuex` 中那么需要注意以下几点
:::
- 定义 `store`
```js
import { createApp } from 'vue'
import { createStore, createLogger } from 'vuex'
import App from './App.vue'

const store = createStore({
  plugins: [createLogger()]

  state() {
    return {
      user: {
        userName: "",
        gender: "",
        occupation: ""
      }
    }
  }
})
```
- 在组件中双向绑定 `veux` 里面的数据
```html
<!-- 双向绑定vuex 中的user数据 -->
<input id="username" type="text" v-model="user.username" />

<div class="result">
  <ul>
    <!-- 动态展示vuex中数据 -->
    <li>用户名：{{ user.username }}</li>
    <li>性别：{{ user.gender }}</li>
    <li>职业：{{ user.occupation }}</li>
  </ul>
</div>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(["user"])
  }
}
</script>
```
- 我们可以看到可以动态的去绑定，但是 `createLogger` 插件并没有捕获到改变的过程，这种操作是十分不推荐的

![](https://image.zswei.xyz/img/202211261712865.png)


#### 二、使用 `mutations` 来捕获表单修改数据的过程
- 配置 `vuex`
```js
import { createApp } from 'vue'
import { createStore, createLogger } from 'vuex'
import App from './App.vue'

const store = createStore({
  plugins: [createLogger()]

  state() {
    return {
      user: {
        userName: "",
        gender: "",
        occupation: ""
      }
    }
  },

  mutations:{
    updateUser(state, payload) {
      state.user[payload.field] = payload.value
    }
  }
})
```

- `组件使用`
```html
<!-- 使用传统的方式去绑定 -->
<input
  id="username"
  type="text"
  :value="user.username"
  @input="updateUser({ field: 'username', value: $event.target.value })"
/>

<div class="result">
  <ul>
    <!-- 动态展示vuex中数据 -->
    <li>用户名：{{ user.username }}</li>
    <li>性别：{{ user.gender }}</li>
    <li>职业：{{ user.occupation }}</li>
  </ul>
</div>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  computed: {
    ...mapState(["user"])
  },
  methods: {
    ....mapMutations(['updateUser'])
  }
}
</script>
```
- 我们可以看到这样做虽然可以捕获到改变的过程，但是没有使用到 `v-model` 的简洁性，下面一个实例通过 `computed` 的 `get` 和 `set` 来完成

![](https://image.zswei.xyz/img/202211261717656.png)


#### 三、通过 `computed` 的 `get` 和 `set` 来简化上面的操作
- 简化操作
```html
<!-- 可以使用简写 v-model 了 -->
<input id="username" type="text" v-model="userName"/>

<div class="result">
  <ul>
    <!-- 动态展示vuex中数据 -->
    <li>用户名：{{ user.username }}</li>
    <li>性别：{{ user.gender }}</li>
    <li>职业：{{ user.occupation }}</li>
  </ul>
</div>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  computed: {
    ...mapState(["user"]),

    userName: {
      get() {
        return this.user.username
      },
      set(value) {
        this.updateUser({field: "username", value})
      }
    }
  },
  methods: {
    ....mapMutations(['updateUser'])
  }
}
</script>
```

::: info  总结
我们可以看到，以上的操作都非常的麻烦，所以我们的表单数据尽量的放在自己组件的本身
:::