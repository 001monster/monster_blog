---
title: （四）发送请求的几种方式
date: 2023-03-13
category:
    - 兄弟组件传值
tag: 
    - react
order: 3
---


### 一、发送请求的几种方式
:::tabs
@tab:active xhr
1. jQuery
对 `xhr` 封装


2. axios
对 `xhr` 封装 

@tab fetch
[fetch参考文件](https://segmentfault.com/a/1190000003810652)
```js
fetch('https://www.xxx.com/xxx/xxx').then(
    response => {
        console.log('zsw-联系服务器成功', res)
    },
    error => {
        console.log('zsw-联系服务器失败', error)
    }
)
```

1. 联系服务器成功了但是并不能直接拿到数据，下面是如何拿到 `fetch` 数据，拿到数据之后获取到的是一个 `Promise` 的数据
```js
fetch('https://www.xxx.com/xxx/xxx').then(
    response => {
        console.log('zsw-联系服务器成功', response.json())
        // zsw-联系服务器成功 Promise{<pending>}
        // 返回成功的数据
        return response.json()
    },
    error => {
        console.log('zsw', error)
        // return error.json()
        // 数据请求失败了中断Promise，返回一个初始的 Promise
        return new Promise(()=>{})
    }
).then(
    response => {
        console.log('zsw-获取服务器数据成功', response)
    },
    error => {
        console.log('zsw-获取服务器数据失败', error)
    }
)
```

2. 使用 `Promise` 统一处理错误，不用每一个 `.then` 都去处理失败的回调
```js
fetch('https://www.xxx.com/xxx/xxx').then(
    response => {
        console.log('zsw-联系服务器成功', response.json())
        // zsw-联系服务器成功 Promise{<pending>}
        // 返回成功的数据
        return response.json()
    }
).then(
    response => {
        console.log('zsw-获取服务器数据成功', response)
    }
).catch((error) => {
    console.log('统一处理错误，不管是联系服务器错误，还是请求数据错误都到这里处理')
})
```

:::

