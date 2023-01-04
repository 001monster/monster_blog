---
title: （五）jsx 语法规则
date: 2022-12-25
category:
    - react基础
tag: 
    - react
order: 5
---

### 🍈 一、什么是 `jsx`
1. `jsx` 全称叫做 `JavaScript XML`
2. 是`React` 定义的一种类似于 `XML` 的 `js` 扩展语法：`JS+XML`
3. 本质是 `React.createElment(标签名, 标签属性, 标签体内容)` 方法的语法糖


### 🍧二、什么是 `XML`
1. `XML` 早期用于存储和传输数据

```xml
<student>
    <name>TOM</name>
    <age>18</age>
</student>
```

### ☕三、`jsx` 语法规则
1. 数据写死
```js
// 创建虚拟 DOM
const VDOM = (
    <h2 id="atuguigu">
        <span>Hello,React</span>
    </h2>
)

// 渲染虚拟 DOM 到页面
ReactDOM.render(VDOM, document.getElmentById('test'))
```

2. 数据写活，读取变量 需要使用 `{}` 形式, `toLowerCase()` 英文大写转小写
```js
const myId = 'aTuguigu'
const myData = 'HeLlo,rEact'

// 创建虚拟 DOM
const VDOM = (
    <h2 id="{myId.toLowerCase()}">
        <span>{myData}</span>
    </h2>
)

// 渲染虚拟 DOM 到页面
ReactDOM.render(VDOM, document.getElmentById('test'))
```

3. 使用 `jsx` 使用 `class` 不能写 `class` 要写 `className`
```js
// 创建虚拟 DOM
const VDOM = (
    <h2 className="test" id="title">Hello,React</h2>
)
// 渲染虚拟 DOM 到页面
ReactDOM.render(VDOM, document.getElmentById('test'))
```

4. 使用 `jsx` 写内联样式
```js
// 创建虚拟 DOM
// 这里 style 里面的第一层 {} 表示混入 js 第二层 {} 表示是 js 对象
const VDOM = (
    <h2 className="test" id="title">
        <span style={{color: 'white', fontSize: '20px'}}>Hello,React</span>
    </h2>
)
// 渲染虚拟 DOM 到页面
ReactDOM.render(VDOM, document.getElmentById('test'))
```


### 🍅总结：`jsx` 语法规则
1. 定义虚拟 `DOM` 时，不要写引号
2. 标签中混入 `JS` 表达式时要使用 `{}`
3. 样式的类目指定，不能使用 `class` 需要使用 `className`
4. 内联样式，要用 `style="{{key: value, key1: value}}"`, 如果是像 `font-size` 这里的属性 需要使用小驼峰的形式 `fongSize`
5. 虚拟 `DOM` 只能有一个根标签，学过 `VUE` 的同学都知道，`VUE` 只能有一个根标签，和这里是一样的
6. 标签必须闭合
7. 标签首字母
- 1. 若小写字母开头，则将标签转换为 `html` 同名元素，如果没有找到同名的 `html` 标签，则报错
- 2. 若大写字母开头，则 `React` 就去渲染组件，如果没有找到，就报错