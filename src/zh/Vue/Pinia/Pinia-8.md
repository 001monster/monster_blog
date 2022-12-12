---
title: （八）使用 $patch 同时修改多个状态
order: 8
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、使用 `$patch` 同时修改多个状态

- `store.js`
```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
    const noteList = ref([
        {
            title: '标题1',
            desc: '详情内容1'
        }
    ])

    /**
     * 定义一个保存搜索词的响应的 ref ，并使用 getters
     */
    const searchText = ref('')
    const searchNotes = computed(() => {
        // 如果搜索框为 空 就展示所有 noteList
        if(searchText.value === '') {
            return noteList
        } else {
            return noteList.value.filter(note => {
                return noteList.title.includes(state.searchText)
            })
        }
    })

    return {
        noteList,           // state 数据
        searchText,         // 搜索框内容
        searchNotes,        // 过滤过后的计算属性
    }
})
```


- 在组件中同时修改多个 `state`
```html
<template>
    <div>{{newNoteList.searchNotes}}</div>
</template>

<script setup>
import { useNoteStore } from '@/store/note.js'

// 把返回值放到一个新的变量里面
const noteStore = useNoteStore()

functions addNote() {
    noteStore.$patch({
        notes: [
            ...noteStore.noteList,
            {
                title: '标题',
                desc: '详细内容'
            }
        ],
        searchText: ''
    })
}
</script>
```

### 总结-写在最后
:::info 总计
`$patch` 是一个对象，里面修改的就是 `store` 当中 `state` 的状态了
:::