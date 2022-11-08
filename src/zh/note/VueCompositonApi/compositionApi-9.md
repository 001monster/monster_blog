---
title: （九）setup中的methods
order: 9
date: 2022-11-08
category:
    - VueCompositonApi
---

## setup中的methods
:::info 说明
因为 `methods` 本来就是普通的 `javaScript` 函数，所以可以直接在 `setup` 中定义

```js
setup() {
    cosnt fn = () => {
        // 业务逻辑，如果需要在模板中使用，则需要通过return 返回出去
        // return 
    }
}
```
:::