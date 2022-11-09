---
title: （十）Emit 自定义事件
order: 10
date: 2022-11-09
category:
    - VueCompositonApi
---

## Emit 自定义事件
:::info 说明
因为在 `setup` 中无法访问 `this` 所以 `setup` 现在接收第二个参数

```js
emit: ['newMethods']
setup(props, { emit }) {
    emit('newmethods')
}
```

因为在模板中，可以访问this, 所以使用 `emit` 的方式保持不变
```js
// 可以直接在模板中发送事件
@click="$emit('newMethods')"
```
:::