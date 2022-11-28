---
title: （一）pinia 简介
order: 1
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### pinia 官方简介
:::info 说明
`pinia` 由 `store` `state` `getters` `actions` 组成
:::


1. 在组件中通过获取 `store` 的 `sate` 来获取状态和修改状态


2. 通过 `gtters` 可以对数据进行复杂的计算并进行应用，例如实现过滤和排序等


3. 也可以通过 `actions` 复用更复杂的修改逻辑，进行几步的状态修改


4. 与 `Vuex` 不同的是 `pinia` 里面没有 `mutations` 的概念，或者说不需要我们手动去编写修改 `state` 状态的代码，`pinia` 自动去生成的


5. 我们在组件中可以利用 `pinia` 对状态直接修改，或者是调用 `actions` 进行异步修改


6. `Vuex` 的 `store` 是集中的，`pinia` 是离散的，也就是说 `pinia` 本身就是模块化的，就不用进行空间命名了，也可以防止命名冲突


7. `pinia` 使用 `setup` 的话，就跟编写 `compositionApi` 是一样的，也就是说在组件中可以使用的 `ref` `computed` 等这些东西，在 `pinia` 中也可以使用，他的编写方式就是一个普通的函数，当然 `pinia` 也支持 `optionsApi` 就跟 `vuex` 一样可以定义 `state` `getters` `actions` 这些对象形式的配置