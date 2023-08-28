---
title: （二）数据传递(子传父)
date: 2023-03-13
category:
    - 数据传递(子传父)
tag: 
    - react
order: 3
---


### 一、数据传递(子传父)
1. 父组件
```js
class App extends React.Component {
  saveUsers = (users) => {
    console.log(user, '我收到了子组件发过来的数据')
  }

  render() {
    return (
      <di>
        <Child saveUsers={this.saveUsers}></Child>
      </div>
    )
  }
}
```

2. 子组件
```js
class App extends React.Component {
  sub = () => {
    // 接收父组件传递过来的一个方法，然后把值返回出去
    this.props.saveUsers('我返回给父组件的值')
  }

  render() {
    return (
      <di>
        <h2 onClick={this.sub}>xxx</h2>
      </div>
    )
  }
}
```

### 总结
当子组件要给父组件传递数据的时候，就需要父组件提前传递过来一个函数，在子组件调用父组件传递过来的函数的时候给他返回需要传递的数据