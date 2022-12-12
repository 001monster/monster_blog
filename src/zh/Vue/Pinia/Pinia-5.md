---
title: （五）在组件中访问状态
order: 5
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、在组件中访问状态
- `store.js`
```js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
    const noteList = ref([
        {
            // ...
        }
    ])

    return {
        noteList
    }
})
```

- 在组件当中访问
```html
<tempate>
    <div>{{noteStore.noteList}}</div>
</tempate>

<script setup>
// 导入 我们定义好的 store
import { useNoteStore } from '@/store/note.js'
// 把他的返回值放到一个新的变量里面就可以直接使用了
const noteStore = useNoteStore()
</script>
```