---
title: （七）、总结 props
date: 2023-01-011
category:
    - react之props
tag: 
    - react
---

### 🐷一、总结 props
1. 批量传递 `props` 采用扩展运算符方式 `{...}`
- [快速了解扩展运算符](../../blend/js/js-9.md)
```jsx
ReactDOM.render(<Person />, document.getElmentById('test'))
```

2. 对传递值进行限制
```jsx
propsTypes = {
    key: PropsTypes.类型.是否必传
    key: PropsTypes.string.isRequired
}
```


3. `props` 设置默认值
```jsx
defaultProps = {
    key: 默认值
}
```

4. [props简写方式](./React-4.md)

