---
title: （十）state 总结
date: 2023-01-03
category:
    - react之state
tag: 
    - react
---


### 🍧一、`state` 总结

1. `state` 是组件最重要的属性，他的值是一个对象（`key--value` 的形式）

2. 组件被称为 `状态机`，通过更新组件的 `state` 来更新对应的页面显示内容（重新渲染组件）

2. 组件中 `render` 方法中的 `this` 为组件实例对象

3. 组件自定义的方法中的 `this` 为 `undefiend` 如何解决？
    - （1）、强制绑定 `this `，通过函数对象的 `bind()` 来改变 `this`
   - （2）、赋值语句加上箭头函数

4. 不能直接修改或者更新 `state` 里面的数据，需要通过 `setState` 来修改