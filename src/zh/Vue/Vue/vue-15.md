---
title: （十五）组件的生命周期
order: 15
date: 2022-11-04
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 组件的生命周期
:::info 说明
请求数据一般在 `create` 和 `mounted` 中进行
:::

### 组件生命周期
```js
beforeCreate        -组件实例被创建之初，data 和 methods 中的数据还没有初始化

created             -组件实例已经完全创建，data 和 methods 都已经初始化好了

beforeMounte        -模板渲染，相关的 render 函数首次被调用，模板已经在内存中编译好了，但是尚未挂载到页面中去

mounted             -el 被新创建的 vm.el 替 换 ，真实dom已经生成，el 替换，真实 dom 已经生成，el替换，真实dom已经生成，el 可用，组件脱离创建阶段，进入运行阶段

beforeupdate        -组件数据更新之前调用， 此时页面中显示的数据还是旧的，但 data 是最新的，页面尚未和最新的数据保持同步

update              -组件数据更新之后，页面和 data 数据已经保持同步，都是最新的

beforeUnmount       -组件写在之前

unmount             -组件写在完成
```