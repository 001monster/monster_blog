---
title: （三）虚拟 DOM 的两种创建方式
date: 2022-12-25
category:
    - react基础
tag: 
    - react
order: 3
---

### 🍈 一、使用 `jsx` 创建

```html
<script type="text/babel">
    // 1. 创建虚拟DOm - 此处不能写 '' 因为 jsx 可以和 js 混合写
    const VDOM = <h1 id="title">Hell,react</h1>
    
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```

### 🥭二、使用 `js` 创建，`React.createElment`
- 使用 `React.createElment` 创建虚拟 `DOM` 就跟 `vue` 的 `h` 函数是一样的

```html
<script type="text/javaScript">
    // 1. 创建虚拟DOm
    // const VDOM = React.createElment(标签名, 标签属性, 标签体内容)
    const VDOM = React.createElement('h1', {id: 'title'}, 'Hello,React')
    
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```


### 🥦三、为什么要使用 `jsx` 而不是使用 `js`
- 有的同学会说为什么不直接使用 `js` 还要使用 `jsx` 呢还得去学习规则，那么下面这个案例就可以看出 `jsx` 的好处了

- 在上面的基础上，在 `h1` 标签内部加一个 `span` 标签

#### `jsx` 写法
```html
<script type="text/babel">
    // 1. 创建虚拟DOm - 此处不能写 '' 因为 jsx 可以和 js 混合写
    const VDOM = (
        <h1 id="title">
            <span>Hell,react</span>
        </h1>
    )
    
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```

#### `js` 写法
```html
<script type="text/javaScript">
    // 1. 创建虚拟DOm
    // const VDOM = React.createElment(标签名, 标签属性, 标签体内容)
    const VDOM = React.createElement('h1', {id: 'title'}, React.createElement('span', {}, 'Helo,React'))
    
    // 2.渲染虚拟DOM到页面
    ReactDOM.render(VDOM, document.getElementById('test'))
</script>
```

看了上面的两个案例我想大家应该就知道为什么 `React` 要打造 `jsx` 了，因为他写模板就像我们写原生 `html` 一样，但是因为我们浏览器是不认识 `jsx` 的，最终还是会通过 `babel` 编译成 `js` 写的那样，所以说 `jsx` 是原生 `js` 创建虚拟 `DOM` 的语法糖