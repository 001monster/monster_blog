---
title: （五）计算属性
order: 5
date: 2022-11-08
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 计算属性 `computed()`
```js
// 定义 computed , 定义computed 和定义普通函数是一样的，使用computed 需要给他传递一个无参数的回调函数
import { computed } from 'vue'  // 需要导入这个函数

// 直接在模板中使用 newComputed 就可以了
cosnt newComputed = computed( () => {
    return 业务逻辑
})
```