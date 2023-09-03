---
title: （四）、Props 穿透
order: 4
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、Props 穿透

1. 在日常开发中我们可能子组件中又嵌套了子组件，中间的组件只是作为过渡，真正的 `props` 是在最底层的数据使用，这个时候就需要使用 `props` 穿透了，以便于一次性传递到需要使用数据的子组件

2. 使用 `props` 逐层传递
```jsx
// 父组件
function App() {
    const userDate = {
        name: '张三',
        age: 18
    }

    return (
        <UserDate1 userDate={userDate}/>
    )
}

// 子组件【转发props】
function UserDate1(props) {
    return (
        <UserDate2 {...props}/>
    )
}

// 子组件的子组件
function UserDate2({userDate}) {
    return (
        <div>
            <h1>名字：{userDate.name}</h1>
            <p>年龄：{userDate.age}</p>
        </div>
    )
}
```

3. 使用 `props` 穿透传递
   1. 如果中层组件有自己需要的组件就要使用结构的方式来进行传递

```jsx
// 父组件
function App() {
    const userDate = {
        name: '张三',
        age: 18
    }

    return (
        <UserDate1 userDate={userDate} msg="hello word"/>
    )
}

// 子组件-把自己有要用的数据结构出来，其他的通过结构的方式在传递下去
function UserDate1({msg, ...rest}) {
    return (
        <div>
            <UserDate2 {...rest}/>
            <h2>{msg}</h2>
        </div>
    )
}

// 子组件的子组件
function UserDate2({userDate}) {
    return (
        <div>
            <h1>名字：{userDate.name}</h1>
            <p>年龄：{userDate.age}</p>
        </div>
    )
}
```