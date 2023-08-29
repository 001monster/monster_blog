---
title: （一）、什么是组件
order: 1
date: 2023-08-29
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230829095510.png)

## 一、什么是组件
组件是 `React` 的基本单元，可以把他理解成为我们 `自定义` 的 `html` 组件，只是里面的逻辑需要我们自己来完成

## 二、React 组件的两种形势
1. 函数式组件
```jsx
// function components
function App(props) {
    return <div>hello{props.name}</div>
}
```

2. 类式组件
```jsx
// class components
class App extends React.Components {
    render() {
        return <div>hello{props.name}</div>
    }
}
```

- 注意：在 `React` 出现 `Hooks` 之后 `Class` 组件就很少使用了，我们经常使用的都是 `函数式` 组件【函数式组件更为简洁，并且更容易理解，更容易编写测试】

## 三、组件说明
1. 子组件和父组件

![](https://image.zswei.xyz/img/20230829100433.png)

2. 组件传值

![](https://image.zswei.xyz/img/20230829100516.png)


## 总结
组件是编写 `React` 的核心，只有更好的编写组件才能更好的利用 `React` 进行开发