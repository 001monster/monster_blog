---
title: （八）传递和访问 Props 属性
order: 8
date: 2022-11-08
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 传递和访问 `Props` 属性
### `props` 基本使用
:::info props
optionsApi 和 compositionApi 传值的方式是一样的，不一样的是接收变化了一下
:::
```js
// 在学习 compositionApi 使用 props 传值之前我们我们先来回顾一下 optionsAPi 使用 props 传值的方法

<h1>{{title}}</h1>
{
    props: ['title', 'msg']
}

// compostionsApi 接收方法
// 使用方法是一样的
<h1>{{title}}</h1>      
{
    props: ['title', 'msg']
    
    setup(props) {
        // 访问props值
        console.log(props.title)
    }
}
```

### 二、转换非响应性 `props` 为响应性
:::info 说明1
如果我们传递是数据是通过 `ref` 或者是 `reactive` 定义的数据的话，那么他是响应的，子组件收到过后，无论是否通过结构它都是响应性的
```js
// 子组件接收到的是响应性的
const data = ref({
    title: 'props'
})
```
:::

:::info 说明2
如果我们传递是数据是普通的数据，没有定义响应式的那么通过 `watch` 是无法监听到它响应变化的
```js
<FatherComponent title="标题" />

const { title } = props
// cosnt title = props.title
watch(
    () => title,
    (newVal, oldVal) => {
        // 传递的不是响应性的数据，watch 无法监听到
        console.log('不会执行')
    }
)

cosnt newCompued = computed( () => {
    // computed 同样也不会生效，因为他们依赖的都是响应性数据
    console.log('同样也不会生效')
})
```
:::

:::info 说明3
如果需要把它转换成响应的数据，那么就需要使用 `vue` 提供的 `toRefs()` 方法来把他变成响应性的数据

```js
<FatherComponent title="标题" />

cosnt { title } = props
// const title = props.title

// 转换成响应的数据
cosnt { title } = toRefs(props)

watch(
    () => title,
    (newVal, oldVal) => {
        // 监听的数据转换成响应性的数据了，监听可以生效
        console.log('不会执行')
    }
)

```
:::


### 三、`ref`/`reactive` 创建的数据在 `props` 中的响应性
:::info 说明
如果父组件通过给子组件传递是数据是通过 `ref`/`reactive` 创建的数据，那么无论子组件是否结构它都是响应性的；需要注意的是，当props 传递到子组件的值，通过 `template` 处理结构，props 的值就不在是一个 `ref ` 格式的值了，而是一个 `proxy` 所以在使用 `watch` 监听的时候，不能直接把他作为第一个参数传递进去，二十需要把他写成回调函数的形式 `() => props.title`。如如果需要把传递进来的某一个属性转换成 `ref` 形式的数据那么 `toRefs(props, 'title')` 就需要接收两个参数了, 第一个参数是响应性对象，第二个参数是需要装换成 `ref` 的属性名；同时需要注意的是，如果父组件通过 `ref` 定义传递的是普通类型的值， 如数字，字符串，那么子组件接收的时候，它就不是响应性的了，需要调用 `toReds` 来给他装换成响应性的
:::


### 总结：写在最后
:::info 总结
如果我们传递的数据不是通过 `ref` / `reactive` 来创建的，那么现在它就不是响应的值了， 如果需要把它变成响应的值，就需要调用 `toRefs()` 来把它变成响应性的数据，`props` 作为参数给他传递进去；需要注意的是，传递的数据只有是数组 或者是 对象的时候传递到子组件的数据才是响应性的，并且通过 `ref` 定义的数据传递到子组件的时候传递的是 它的 `value` 值
:::