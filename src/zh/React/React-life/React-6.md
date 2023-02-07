---
title: （六）总结生命周期（旧）
date: 2023-01-11
category:
    - react之 生命周期
tag: 
    - react
order: 6
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611830&page=42" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


## 🐷一、初始化阶段
1. 由 `ReactDOM.render()` 触发初次渲染
    1. `constructor` 构造器
    2. `componentWillMount` 组件将为挂载
    3. `render` 渲染页面
    4. `componentDidMount` 组件挂载完毕

## 🐷二、更新阶段
1. 由组件内部 `this.setState()` 或父组件重新 `rendr` 后触发
    1. `shouldComponentUpdate()` 修改状态更新页面阀门
        - 不写这个 `shouldComponentUpdate` 这个钩子，`react` 底层会自动补一个，并且默认返回 `true`
        - 写了 `shouldComponentUpdate` 这个钩子，就需要手动指定返回值，返回 `true` 允许跟新页面，返回 `false` 不允许更新页面
    2. `componentWillUpdate()`
    3. `render` 
    4. `componentDidUpdate()`

## 🐷三、卸载组件
1. 由 `ReactDOM.unmontComponentAtNode()` 触发
    1. `unmontComponentAtNode('卸载的节点名称')`

## 🐷四、常用生命周期函数
1. `componentDidMount` 组件挂载完毕调用
    1. 一般在这个钩子里做一些操作，例如
        1. 开启定时器
        2. 发送网络请求
        3. 订阅信息等

2. `unmontComponentAtNode` 做一些收尾操作
    1. 关闭定时器
    2. 取消消息订阅

3. `render` 这个不仅常用，而且是必须要用，页面更新一直要调用它