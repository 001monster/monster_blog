---
title: （十七）compositionApi 总结
order: 17
date: 2022-11-10
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## compositionApi 总结
:::info compositionApi 总结

- `ref()` 、`reactive` 定义响应式数据

- `ref()` 定义的数据需要访问 `value` 属性获取

- 使用 `computed` 计算属性

- 使用 `watch` 和 `watchEffect()` 监听响应性数据

- 非响应性 `props` 和响应性 `props` 的响应性

- 定义 `methods`

- `setup()` 函数中的第二个参数，`context`

- 生命周期钩子函数

- `provide/inject` 函数

- `template ref`

- `slots` 和 `attrs`

- `composables` 抽离公共方法

- `vue@3.2` 语法糖
1. `components` 注册组件可以省略
2. 使用 `defineProps` 定义 `props`
3. 使用 `defineEmits` 定义 `emits` 之定义事件
4. `defineProps` 和 `defineEmits` 无需导入
5. `vue@3.2` 访问 `setup` 第一个参数 `useSlots` 和 `useAttrs`
:::
