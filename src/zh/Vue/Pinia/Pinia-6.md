---
title: （六）在组件中直接修改状态
order: 6
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、在组件中直接修改状态
:::info 说明
- `pinia` 允许我们直接修改 `store` 里面的 `state`，不像 `vuex` 必须通过 `mutations` 才可以修改

- 因为我们定义的时候是使用 `ref` 来定义的他本身就是一个响应式数据，所以可以直接修改
:::

- `store.js` 
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

    return {
        noteList
    }
})
```

- 在组件中修改 `store`
```js
<script setup>
import { reactive } from 'vue'
import { useNoteStore } from '@/store/node.js'

const formData = reactive({
    title: '标题',
    desc: '详细内容'
})


cosnt noteStore = useNoteStore()
function addNote() {
    noteStore.noteList.push({
        title: formData.title,
        desc: formDta.desc
    })
}
</script>
```
