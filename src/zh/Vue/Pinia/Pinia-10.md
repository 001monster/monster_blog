---
title: （十）使用 Actions 异步修改状态
order: 10
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、使用 `Actions` 异步修改状态

- `store.js` 异步的先清空搜索框在异步的添加数据
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


    /**
     * 使用 actions 执行异步操作
    */
   function addNote(title, desc) {
        setTimeout(() => {
            noteList.value.push({
                title: '标题x',
                desc: '详情内容x'
            })
        }, 2000)

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