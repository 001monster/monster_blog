---
title: （五）在 React 中绑定事件
date: 2022-12-31
category:
    - react之state
tag: 
    - react
---


### 🥥一、在 `React` 中绑定事件
- 接着上一章的案例，给他绑定事件，动态的切换 `boolea` 

###  🥮二、预热原生事件绑定

#### 原生事件绑定的几种方式
```html
<button id="btn1">按钮一</button>
<button id="btn2">按钮二</button>
<button onclick="demo()">按钮三</button>

<script>
// 方法一 兼容性最好
const btn1 = document.getElmentById('btn1')
btn1.addEventListener('click', () => {
    alert('按钮一被点击了')
})

// 方法二
const btn2 = document.getElmentById('btn3')
btn2.onClick = () => {
    alert('按钮二被点击了')
}

// 方法三
function demo() {
    alert('按钮三被点击了')
}
</script>
```


```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    constructor(props) {
        super(props)
        // 初始化状态
        this.state = {
            isMood: true
        }
    }

    render() {
        // 结构赋值 读取状态
        const { isMood } = this.state
        return <h1 onCLick={demo}>今天心情很{isMood ? '开心' : '伤心'}</h1>
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))

function demo() {
    alert('按钮被点击了')
}
```


### 🍧总结
1. `React` 中绑定事件可以使用原生的写法，但是不推荐使用原生的写法，推荐使用 `React` 的写法
2. `React` 中的写法和原生的写法有所区别--请看下面的例子
```js
// 原生的 onclick 要写成小驼峰形式 onClick
// 原生的 onbluer 要写成小驼峰形式 onBluer
```
3. `React` 绑定方法不能直接调用方法，因为 `React` 一上来就会嗲用 `return` 里面的返回代码，所有就会造成页面一开始就执行
```js
class Mood extends React.Component {
    ...

    render() {
        ...
        // 此处直接写函数名字就可以，不用加 () 调用
        return <h1 onCLick={demo}>今天心情很{isMood ? '开心' : '伤心'}</h1>
    }
}
```