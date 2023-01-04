---
title: （四）在 pinia 里面创建状态
order: 4
date: 2022-11-28
category:
    - pinia 状态管理工具
tag: 
    - Vue和Pinia
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、在 pinia 里面创建状态
- 在 `defineStore` 里面定义状态就跟在组件当中定义是一样的，使用 `vue` 的 `ref` 函数来定义，然后通过 `return` 来返回出去

```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
    const nodeList = ref([
        {
            // ...
        }
    ])

    return {
        nodeList
    }
})
```
