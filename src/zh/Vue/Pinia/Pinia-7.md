---
title: （七）Getters/computed 计算状态
order: 7
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、定义 `Getters/computed` 计算状态
:::info 说明
`getters` 课以对一些状态进行一些复杂的逻辑计算，然后在各个组件中进行复用
:::

- 做一个过滤的功能来看一下 `getters` 是怎么使用的

```js
import { ref, computed } from 'vex
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


### 二、使用 `Getters/computed` 计算状态
```js
<template>
    <div>{{newNoteList.searchNotes}}</div>
</template>

<script setup>
import { useNoteStore } from '@/store/note.js'

// 把返回值放到一个新的变量里面
const newNoteList = useNoteStore()
</script>
```