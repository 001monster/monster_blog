---
title: （十二）store 之间互相访问
order: 12
date: 2022-11-28
category:
    - pinia 状态管理工具
tag: 
    - Vue和Pinia
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、store 之间互相访问
- `note.js`
```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
    cosnt noteList = ref([
        {
            title: '标题',
            desc: '详情内容'
        }
    ]),

    return {
        noteList
    }
})
```


- `user.js`
```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useuserStore = defineStore('user', () => {
    cosnt user = ref(
        {
            name: 'bob',
            phone: 15729837802,
            emial: '2966211270@qq.com'
        }
    ),

    return {
        user
    }
})
```

### 二、只有当用户登录了才能进行添加
```js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useuserStore = defineStore('user', () => {
    cosnt user = ref(
        {
            name: 'bob',
            phone: 15729837802,
            emial: '2966211270@qq.com'
        }
    ),

    function isLoggedIn() {
        return user.value != null
    }

    return {
        user,
        isLoggedIn
    }
})
```

### 三、在 `note.js` 中访问其他 `store`
- 获取方法和在组件当中获取是一样的
```js
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user.js'

export const useNoteStore = defineStore('note', () => {
    cosnt noteList = ref([
        {
            title: '标题',
            desc: '详情内容'
        }
    ]),


    const userStore = useUserStore()
    function addNote() {
        if(userStore.isLoggedIn) {
            setTimeout(() => {
                noteList.push({
                    title: '标题x'
                    desc: '详情内容x'
                })
            }, 2000)
        }
    }

    return {
        noteList
    }
})
```