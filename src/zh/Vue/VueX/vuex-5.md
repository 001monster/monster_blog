---
title: （五）Vuex 中的Actions
order: 5
date: 2022-11-26
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211261221957.png)

### Vuex 中的计的Actions
:::info 说明
`actions` 和 `mutations`  整体上是一样的，但是`actions` 支持异步代码 `mutations` 只支持同步代码，另外 `actions` 不会直接修改全局状态 而是出发 `mutations` 来修改全局状态
:::

#### 一、示例远程异步加载数据
```js
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from "./App.vue"

const store = createStore({
  state() {
    return {
      user: []
    }
  },

  mutations: {
    loadusers(state, payload) {
      state.user = paload.user
    }
  }

  // 定义actions 进行远程操作修改全局数据
  actions: {
    // context 可以触发 mutations 修改全局状态等
    fetchUser(context) {
      setTiomeout(() => {
        context.comit('loadusers', {user: 157****7802})
      }, 3000)
    }
  }
})

const app = createApp(App)
app.use(store)
app.mount("#app")
```

#### 触发 `actions`
```js
<script>
  export default {
    created() {
      {/* dispatch 是制定用来触发 actions的 里面的参数则是在store 中 actions 中定义的函数名字 */}
      this.$store.dispatch('fetchUser')
    }
  }
</script>
```


#### 二、通过 `mapActions` 来访问 `actions`
```js
<script>
  import { mapActions } from 'vuex'
  export default {
    // 直接在页面加载的时候调用
    created() {
      this.fetchUser()
    }

    // 把actions 中的函数映射到methods 中就可以直接通过this 来调用了
    methods: {
      mapActions(['fetchUser'])
    }
  }
</script>
```


#### 三、`actions` 传递参数
:::info 说明
`actions` 也可以向 `mutations` 一样传递参数，都是通过第二个参数来传递
:::


#### 四、在 `actions` 中触发其他 `actions` 
:::info 说明
如果要在 `actions` 中触发其他的 `actions` 直接通过 `context` 来调用就可以了，如果需要按顺序执行 `actions` 可以通过 `promise` 的 `async` 和 `await` 来操作，并且返回一个 `promise`，当上一个 `actions` 执行完了在调用其他需要执行的 `actions`.
:::
#### 注意
:::info 注意
需要注意的是如果在 `actions` 内部调用其他 `actions` 就不能结构 `dispatch` 二十 直接 `dispatch('其他dispatch名字')`
:::

- 示例代码
```js
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { users } from "./data/users";
import { blogs } from "./data/blogs";

const store = createStore({
  state() {
    return {
      users: [],
      blogs: [],
    };
  },
  mutations: {
    loadUsers(state, payload) {
      state.users = payload.users;
    },
    loadBlogs(state, payload) {
      state.blogs = payload.blogs;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadUsers", { users });
    },
    async fetchUsersAndBlogs({ dispatch, commit }) {
      await dispatch("fetchUsers");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadBlogs", { blogs });
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");

```