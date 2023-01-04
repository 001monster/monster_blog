---
title: （十三）template ref
order: 13
date: 2022-11-09
category:
    - VueCompositonApi
tag: 
    - Vue3
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## `template ref` 获取 `dom` 和 `组件实例` 
:::info 说明
在 `compositionApi` 中 获取组件实例对象、或者是 `dom` 元素都非常简单
```js
<input ref="newDom">获取实例对象</input>

setup() {
    cosnt newDom  = ref(null)

    // 成功获取到dom 元素，并在组件加载完成的时候获取焦点
    onMounted( () => {
        newDom.value.focus()
    })

    return {newDome}
}
```
:::
