---
title: （十一）生命周期钩子
order: 11
date: 2022-11-09
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 生命周期钩子
:::info 说明
在 `compositionApi` 生命周期钩子变成了函数的形式，在 `setup` 中直接使用，这些生命周期钩子，都接收一个回调函数作为参数，我们的业务逻辑在回调函数中编写；与 `optionsApi` 中不同的是，`compositionApi` 中的所有生命周期钩子都加上了 `on`; 同时需要注意的是，在 `compositionApi` 中没有 `beforeCreate` 和 `create` 生命周期钩子， 因为 `setup` 本来就是在这两个生命周期中执行的，所以在这两个生命周期中的业务逻辑直接在 `setup` 中编写就可以了
```js
setup{
    onMounted( () => {
        // 业务逻辑代码
    })
}
```
:::

### 具体的生命周期钩子对应关系，请参考这两张表

![](https://image.zswei.xyz//img/compositionApi-11-2.jpg)
![](https://image.zswei.xyz//img/compositionApi-11-1.png)