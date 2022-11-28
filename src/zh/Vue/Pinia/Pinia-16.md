---
title: （十七）OptionsApi 创建 Pinia
order: 16
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、OptionsApi 创建 Pinia
:::info 说明
- 其实 `optionsApi` 配置 `pinia` 和 `vuex` 是一样的，如果已经会配置 `vuex` 了，那么 `pinia` 的 `optionsApi` 也已经会了

- 需要注意的是，当使用 `optionsApi` 配置的时候，`defineStore` 的第二个参数是一个 `对象`
:::

```js
import { defineStore } from 'pinia'

export default useNoteStore = defineStore('note', {
    state() {
        return {
            noteList: [
                {
                    title: '标题',
                    desc: '详情'
                }
            ],

            seachText: ''
        }
    },

    getters: {
        // 普通的方法
    },

    actions: {
        // 逻辑处理
    }
})
```

### 二、使用箭头函数的形式
- 如果使用箭头函数的话，就不能通过 `this` 来访问上面的状态，此时箭头函数接收一个，`state` 作为参数，通过这个参数来访问 `state` 的值

```js
getters: {
    searchNotes: (state) => {
    // 如果搜索框为 空 就展示所有 noteList
    if(state.searchText === '') {
        return state.noteList
    } else {
        return state.noteList.filter(note => {
            return state.noteList.title.includes(state.searchText)
        })
    }
}
}
```

### 三、使用普通函数的形式
- 如果使用普通函数的形式的话就可以使用 `this` 来访问了

```js
getters: {
    searchNotes() {
        // 如果搜索框为 空 就展示所有 noteList
        if(this.searchText === '') {
            return this.noteList
        } else {
            return this.noteList.filter(note => {
                return this.noteList.title.includes(this.searchText)
            })
        }
    }
}
```

### 四、获取其他 `state`
- 获取其他 `state` 不能放在 `defineStore` 外面获取, 只能在单个方法里面获取，获取的方法如下

```js
import { useUserStore } from '@/store/user.js'

actions: {
    addNote(title, desc) {
        cosnt userStore = useUserStore()

        if(userStore.isLoggedIn) {
            // ...
        } else {
            // ...
        }
    }
}
```