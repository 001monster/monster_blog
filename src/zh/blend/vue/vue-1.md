---
title: （一）地板式扫盲了vue3所有API盲点
date: 2022-12-24
category:
    - vue常用代码

description: 本本原作者： 星期一研究室
---


![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2328f178147743228f9d7457391154c1~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?)

# 📍前言

最近在一次理解 `vue`项目的代码时，发现周一对好多 `API`都不太熟悉。这间接导致的问题是，代码理解速度要比平常要慢很多。于是乎，赶忙把 `vue API`的学习提上了日程。

在下面的文章中，将地板式地扫盲 `vue3`文档中 `API`模块的所有内容，融入周一的理解进行深入介绍。下面就来一起看看吧~🍬

# 一、🖇框架搭建

## 1、关于文档

首先附上官方文档的具体材料：[cn.vuejs.org/api/](https://link.juejin.cn?target=https%3A%2F%2Fcn.vuejs.org%2Fapi%2F "https://cn.vuejs.org/api/")

## 2、VUE3 API整体盘点

在 `vue3`的全新 `API`中，有部分在 `vue2`的基础上沿用了。还有另外一部分，是 `vue3`所新增加的。我们先来看 `vue3 API`文档主要包含哪些内容？

`vue3 API`主要包含以下六个部分：

* 全局API —— 全局会用到的API
* 组合式API —— vue3所拥有的组合式API
* 选项式API —— vue2所拥有的选项式API
* 内置内容 —— 指令、组件、特殊元素和特殊属性
* 单文件组件 —— 语法定义、
* 进阶API —— 渲染函数、服务端渲染、TS工具类型和自定义渲染

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a558d668bdb4098b5906856113fa41a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

下面将依据上面提到的六大点内容，来进行相应的剖析和讲解。

# 二、🎨全局API

vue3的全局API包含两个部分：应用实例和通用API。那它们各自都有哪些内容呢？

## 1、应用实例

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48d3faec9e3e4347bab736c6a56ad4c1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、通用API

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22e0ba81bdb0419ab7db3683e96c677e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 三、🚲组合式API

谈到 `vue3` ，相信大家最为熟悉的就是 `composition API` 了，也就是 `&#x7EC4;&#x5408;&#x5F0F; API` 。那么， `vue3` 的 `&#x7EC4;&#x5408;&#x5F0F; API` 都给我们带来了什么呢？

## 1、setup

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c40e772cbf184b75bf6e6a869f317c03~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、响应式：核心

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14078b9e9ca14b5caf2ed92692bc40a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 3、响应式：工具函数

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b1b1da9b608e449ca8f21038fd761e59~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 4、响应式：进阶

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f1183e88624bc69a930897b47ee2ae~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 5、生命周期钩子

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d78d13c852c4a6eab6a44a6601015c9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 6、依赖注入

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b40f6eedb6f4046af0645c5564c09e0~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 四、🌠选项式API

`&#x9009;&#x9879;&#x5F0F;API` 即 `options API` 。可能有的小伙伴会觉得它在 `vue2` 项目下会更为常见一些。但在 `vue3` 项目中，也是有一些 `&#x9009;&#x9879;&#x5F0F;API` 值得我们去挖掘的。那都有哪些内容呢，我们来一探究竟。

## 1、状态选项

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f7209eb996134846a80afdccdc1cf88a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、渲染选项

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1af1316b37249dbba7add34476ba36b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 3、生命周期选项

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4cdbd423f5441a88535af4c9c48d45a~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 4、组合选项

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b0ff576506d49dbb9a37ef0e99aba2e~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 5、其他杂项

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b2246ebc65344cb93f1f1d4ef024a10~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 6、组件实例

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/037d0d3a71ea4129a64dd6c8aea93abd~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 五、🏕内置内容

`vue3` 的内置内容包括 **指令**、 **组件**、 **特殊元素element**和 **特殊属性attributes**。如果要谈在什么场景下会用到内置内容，那周一可能觉得，在一般的 `vue` 项目开发中，基本都会用到 **内置内容**。较为常见的是用v-if和v-else-if来判断什么时候显示某个组件，什么时候不显示某个组件。

还有像 `v-model` 、 `v-on` 和 `v-for` 等指令，都是在 `vue` 项目中非常高频率使用的指令。那 `vue3` 的内置内容都还有哪些东西呢？请看下方介绍。

## 1、指令

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/434b8e6051904290a8d878becfa183cf~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、组件

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3d10419800648108118383899dd6a58~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 3、特殊元素

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e30e4b2adbbd43508cb50d2c5b194394~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 4、特殊属性Attributes

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3064e1d58d8421cb4d15026bdcea024~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 六、📸单文件组件

对于 `vue` 来说，相信大家都会非常熟悉它的组件化思想，似乎有一种理念是：万物皆可组件。那对于一个组件来说，我们都需要了解它的什么内容呢？比如，我们写的 `<template></template>` 是什么，用 `<script setup></code>` 和 `<code><script lang="ts"></code>` 都分别是什么含义，`<code><style></code>` 用了 `<code>scoped</code>` 是什么意思，`<code>:slotted</code>` 插槽选择器又在什么情况下使用呢？我们一起来一探究竟

## 1、`SFC` 语法定义

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ba637efb1d0432b9bfaf9156f2a5d67~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、单文件组件 `script setup`
 
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/24cd675bd15f462bbf1bdea7a2fa38df~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 3、`css` 功能

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb956ae4b93a433ca01be19cbc47480b~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 七、📈进阶 `API` 上面我们了解了

上面我们了解了 `vue3` 的基础API，准确来说，上面的 `API` 可以解决实际工作中 `80%` 的问题。那下面，我们就再来看一些较为进阶的 `api` 操作。下面所涉及到的这些 `API` ，更多的是可以在 `某些定制化的场景` 下，做一些高阶的操作。比如：我们可以在一个 `headless` 组件里，用 `render` 和 `h()` 函数，来渲染自定义的页面。那 `进阶 API` 都还有哪些东西呢，来看下面的内容。

## 1、渲染函数

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ede9874e71314de5abaa8694e928b237~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 2、服务端渲染

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ca5312a130b41239b47e73c4da823bb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 3、TypeScript工具类型

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/814883d4d24e44c99d1d12cac9932f81~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

## 4、自定义渲染

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68153183f580470aafbb0697f640ac6c~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image)

# 🐣彩蛋
思维导图 `github` 地址 [github.com/Jacqueline7...](https://github.com/Jacqueline712/vue3-api)

`vue3` 入门指南文章推荐：[焕然一新的 Vue 3 中文文档要来了🎉](https://juejin.cn/post/7077701166397653028)

# 总结
本文原作者：星期一研究室

原文地址：[花了一天的时间，地板式扫盲了vue3所有API盲点](https://juejin.cn/post/7164159759619194893)