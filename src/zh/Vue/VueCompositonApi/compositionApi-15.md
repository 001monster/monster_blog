---
title: （十四）组件逻辑复用Composables
order: 15
date: 2022-11-10
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 最佳组件逻辑复用 `Composables`

### `composables` 的基本使用
:::info 说明
1. 在 `compostionApi` 中我们可以使用 `composables` 来实现逻辑代码的复用，一个`composable` 就是一个普通 `JavaScript` 函数，所有能在 `setup` 中编写的代码都可以在 `composable` 当中编写，所以我们就可以把一组相关逻辑的代码放到一起；
:::
:::info 说明
2. 在 `composable` 中可以使用 `vue` 库中提供的所有方法如 `ref reactive onMounted provide inject` ,每个组件在使用相同的 `composable` 的时候都不用会互相影响,他们是独立存在的，因为他们是个函数，是通过 `return` 来返回数据的；
::::
:::info 说明
3. 同时一个组件可以使用多个 `composables` ,并且前面 `composables` 返回的值，可以作为后面 `composables` 的参数使用。
::::
:::info 说明
4. 下面我们来看一下 `composables` 是如何使用的
- 创建文件 `composables`
```js
// 第一步先在 src 根目录下创建一个 composables 文件夹
// 第二步在 composables 文件夹下建立需要抽离代码的 js 文件吗，文件夹名字推荐 use 开头
```

![](https://image.zswei.xyz/img/202211100946029.png)

- 定义 `composables`
```js
// 定义composables
import { ref } from 'vue'
function userListData() {
    // 定义数据
    const messages = ref([
        { id: 1, content: "这是一条消息提醒1" },
        { id: 2, content: "这是一条消息提醒2" },
        { id: 3, content: "这是一条消息提醒3" },
        { id: 4, content: "这是一条消息提醒4" },
    ]);

    // 操作方法
    function removeMessage(id) {
        messages.value = messages.value.filter((msg) => msg.id !== id);
    }

    // 返回数据和方法
    return { messages, removeMessage }
}

// 使用默认方式导出
export default userListData
```

- 使用 `composables`
```js
// 导入 composables方法
import useListData from 'useListData'

setup() {
    // 在setup中调用 useListData 方法， 并把返回值结构出来
    const { messages, removeMessage } = useListData()

    // 返回方法给 模板使用
    return { messages, removeMessage }
}
```

![](https://image.zswei.xyz/img/202211101010857.png)

::::


### 二、真正意义上的抽离复用
:::info 说明
从上面的代码来看，虽然我们把组件当中的代码抽离出来了，但是里面的数据啊还是写死的，下面我们来处理一下，实现真正意义上的逻辑复用

- 改造
```js
// 我们让 userListData 接收一个参数, 让使用这个 composables 的组件自行传递数据
import { ref } from 'vue'
function userListData(data) {
    // 定义数据
    const dataRef = ref(data);
    

    // 操作方法
    function removeItem(id) {
        dataRef.value = dataRef.value.filter((item) => item.id !== id);
    }

    ... 还可以添加其他的公共函数

    // 返回数据和方法
    return { data: dataRef, removeItem }
}

// 使用默认方式导出
export default userListData
```

- 使用组件自行传递数据
```js
// 导入 composables方法
import useListData from 'useListData'

setup() {
    // 这里让使用的组件自行传递数据
    // 同时使用结构赋值的重命名语法，给返回的参数重命名
    const { data: messages, removeItem: removeMessage } = useListData([
        { id: 1, content: "这是一条消息提醒1" },
        { id: 2, content: "这是一条消息提醒2" },
        { id: 3, content: "这是一条消息提醒3" },
        { id: 4, content: "这是一条消息提醒4" },
    ])

    // 返回方法给 模板使用
    return { messages, removeMessage }
}
```
:::

![](https://image.zswei.xyz/img/202211101046761.png)


### 总结：写在最后
:::info 总结
1. `composables` 是一个普通的 `js` 函数
2. `setup` 中的代码全部可以放在 `composabels` 中去编辑
3. `composables` 逻辑独立越好
4. 能减少组件文件的代码，增强复用性
:::