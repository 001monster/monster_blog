---
title: （十五）与 TypeScript 集成
order: 15
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、与 TypeScript 集成
:::info 说明
因为 `pinia` 与 `TypeScript` 集成的很好了，所以在 `pinia` 里面用到 `TypeScript` 的地方很少，就是定义数据的时候，如果不指定使用的时候就判断不出来是什么类型
:::

```js 
import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Note {
    title: string,
    desc: string
}

export default function useNoteStore('note', () => {
    // 使用泛形 Note 的数组类型
    cosnt noteList = ref<Note[]>([
        {
            title: '标题',
            desc: '详情内容'
        }
    ])

    functions addnote(title: string, desc: string) {
        // ...
    }

    return {
        noteList
    }
})
```