---
title: 总结新生命周期钩子
date: 2023-02-25
category:
    - react之 生命周期
tag: 
    - react
order: 10
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612291&page=47" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🐷一、总结新生命周期钩子

1. 初始化阶段：由`ReactDOM.render()` 触发---初次渲染
   1. `constructor`
   2. `getDerivedStateFromProps`
   3. `render()`
   4. `componentDidMounte()`  ====> 常用
      - 一般这个钩子做一些初始化的事，例如：开始定时器、发送网络请求、订阅信息

2. 更新阶段：由组件内部 `this.setState()` 或组件重新`render` 触发
   1. `getDerivedStateFromProos`
   2. `shouldComponentUpdate()`
   3. `render()`
   4. `getSnapshotBeforeUpdate`
   5. `componentDidUpdate()`

3. 卸载组件：由 `ReactDOM.unmountCOmponentAtNode()` 触发
   1. `componentWillUnmount()`
      - 一般这个钩子做一些收尾的事，例如：关闭定时器、取消订阅信息


![](https://image.zswei.xyz/img/202302252221858.png)