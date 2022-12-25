---
title: （二）vuex 使用 Ts推断类型
date: 2022-12-24
category:
    - vue常用代码
---


## vuex 使用 Ts推断类型
在使用 `vue3` 开发项目过程中会使用到状态管理，在 `vue3` 中官方推荐使用 `pinia` 作为状态管理工具，`pinia` 很好的支持了 `ts` 所以直接安装就可以使用，但是 `vuex` 要使用 `ts`  进行类型推断的话就需要进行一些配置

### 💕1.项目安装 `vuex` @4.0
::: tabs

@tab:active npm
```sh
npm install vuex@next --save
```


@tab Yarn
```sh
yarn add vuex@next --save
```

:::

### 😋2.配置 `vuex`
- 1.在 `src` 文件夹下面常见 `store` 文件夹

- 2.创建 `store` 入口文件
```ts
import { createStore } from "vuex"

export const store = createStore({
    state: () => {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {}
})
```

- 3.在 `main.ts` 注册 store
```ts
import { createApp } from "vue";
import App from "./App.vue";
import { store } from './store.index'


const app = createApp(App);
// 把state 添加到实例当中
app.use(store);

app.mount("#app");
```


### ❤‍🔥3.做好了以上准备就可以开始配置 `ts` 进行类型推断了
- 1.先按照官方的配置方法配置一个
:::tabs
@tab:active compositionApi

- store.ts
```ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// 为 store state 声明类型
export interface State {
  count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  }
})
```

- main.ts
```ts
import { createApp } from 'vue'
import { store, key } from './store'

const app = createApp({ ... })

// 传入 injection key
app.use(store, key)

app.mount('#app')
```

- `vue` 组件使用
```ts
import { useStore } from 'vuex'
import { key } from './store'

export default {
  setup () {
    const store = useStore(key)

    store.state.count // 类型为 number
  }
}
```

- 引入 InjectionKey 并将其传入 useStore 使用过的任何地方，很快就会成为一项重复性的工作。为了简化问题，可以定义自己的组合式函数来检索类型化的 store

```ts
// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
```

- `vue` 组件
```ts
import { useStore } from './store'

export default {
  setup () {
    const store = useStore()

    store.state.count // 类型为 number
  }
}
```


@tab optionsApi
```js
// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```
:::


### 💭4.以上是官方的配置方法
- 但是官方的配置方法并没有如何配置模块的示例代码，接下来怪兽给大家配置一个模块化的示例代码

- 先创建一个 `vuex` 的模块，模块具体创建方法：[vuex模块化创建步骤](https://zswei.xyz/zh/Vue/VueX/vuex-8.html)

- store.ts
```ts

```