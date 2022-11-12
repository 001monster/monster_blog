---
title: （十二）Provide 和 Inject
order: 12
date: 2022-11-09
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## Provide 和 Inject

### 一、Provide 和 Inject 传递普通类型的数据
:::nfo 说明
在之前的 `optionsApi` 中 `Provide` 是函数形式，而 `Inject` 是数组的形式，在 `compositionApi` 中 `Provide` 和 `Inject` 都变成了函数形似

```js
// provide 接收两个函数， 第一个参数：要个下层组件提供参数的名字，第二个参数：是属性值
provide('sendName', '张三')

// inject 接收一个参数：属性名字
inject('sendName')
```
:::
### `optionsApi` 方式

![](https://image.zswei.xyz//img/compostiotnApi-12.png)


### 二、Provide 和 Inject 传递响应式数据
:::info 说明
如果需要传递响应式数据，则传递数据需要使用 `ref` 定义 传递的才是响应式的，同时如过我们传递的数据是 `ref` 对象的某一个属性，那么这个时候他就会失去响应性，这个和之前的学习的 `watch` 是一样的
```js
// 父组件发送, 响应性数据
setup() {
    const data = ref({
        title: '精品梅！！！'
    })
    provide('data', data)

    // 秒后更新数据
    setTimeout(() => {
        data.value.title = '真好看'
    }, 2000)
}

// 子组件接收使用
<div>{{data.title}}</div>
setup() {
    inject('data')

    return{title}
}
```


此时我们会发现，响应式数据不起总作用了，这个和 `watch` 是一样的，因为某一个单独的属性是一个字符串所以不会响应
```js
// 发送ref 中的一个某个属性
setup() {
    cosnt data = ref({
        title: '精品梅！！！'
    })
    provide('title', data.value.title)

    // 秒后更新数据-会发现更新失败
    setTimeout(() => {
        data.value.title = '真好看'
    }, 2000)
}

// 子组件接收使用
<div>{{title}}</div>
setup() {
    inject('title')

    return{title}
}
```


解决上面这个传递对象中的某个值不响应的问题，只需要把传递需要响应的数据加上一个  `toRef(要转换的对象, 要转换的属性命)` 他会把这个对象中对应的属性命转换成 `ref` 的形式 
```js
// 发送ref 中的一个某个属性
setup() {
    cosnt data = ref({
        title: '精品梅！！！'
    })
    provide('title', toRef(data.value, 'title'))

    // 秒后更新数据-会发现更新成功了
    setTimeout(() => {
        data.value.title = '真好看'
    }, 2000)
}

// 子组件接收使用
<div>{{title}}</div>
setup() {
    inject('title')
    
    return{title}
}
:::


### 总结：写在最后
:::info 总结
在 `optionsApi` 中传递的数据也都失去了响应性，如果需要保留响应性的话可以调用 `ref()`、 `toRef()`、 `reactive()` 来把传递的数据转换成响应性的数据
:::