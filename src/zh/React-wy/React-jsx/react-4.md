---
title: （四）、导出子组件的方式
order: 4
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)


## 一、导出子组件 `MyComponent.SubComponent/>`
1. 我们在开发中会看到以下这样的组件 `<menu.item/>`

```jsx
function App() {
    return (
        <div>
            <Menu.item/>
        </div>
    )
}

export default App
```

2. 这样的组件的意思就是，`item` 是 `Menu` 里面导出的一个子组件

3. 这样写的好处就是方便阅读，方便管理同类的组件

## 二、`MyComponent.SubComponent/>` 组件的定义方式
```jsx
function Menu({children}) {
    return <nav>{children}</nav>
}

function Item({children}) {
    return <a href="#">{children}</a>
}

// 导出前挂载到 Menu 身上
Menu.Item = Item

export default Menu
```