---
title: （九）使用 Actions 来修改状态
order: 9
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、使用 `Actions` 修改状态
:::info 说明
- 为什么需要 `actions` 呢，我们明明可以在组件中直接修改 `store` 里面的数据

- 原因就是他和 `getters` 是一样的，为了复用，同样的逻辑只用触发 `actions` 就可以修改了
:::

### 二、如何在 `pinia` 定义 `actions`

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
        if(searchText.vaue === '') {
            return noteList
        } else {
            return noteList.value.filter(note => {
                return noteList.title.includes(state.searchText)
            })
        }
    })


    /**
     * 使用 actions
    */
   function addNote(title, desc) {
        noteList.value.push({
            title: '标题x',
            desc: '详情内容x'
        })

        searchText: ''
    }


    return {
        noteList,           // state 数据
        searchText,         // 搜索框内容
        searchNotes,        // 过滤过后的计算属性
        addNote,            // actions
    }
})
```

### 三、在组件中使用
```html
<template>
    <div>{{newNoteList.searchNotes}}</div>
</template>

<script setup>
import { useNoteStore } from '@/store/note.js'

const noteList = ref([
    {
        title: '标题1',
        desc: '详情内容1'
    }
])

// 把返回值放到一个新的变量里面
const noteStore = useNoteStore()

functions addNote() {
    noteStore.addNote(noteList.title, noteList.desc)

    // 通过 actions 就不用手动去修改了，直接去调用 actions 传值就可以了
    // noteStore.$patch({
    //     notes: [
    //         ...noteStore.noteList,
    //         {
    //             title: '标题',
    //             desc: '详细内容'
    //         }
    //     ],
    //     searchText: ''
    // })
}
</script>
```