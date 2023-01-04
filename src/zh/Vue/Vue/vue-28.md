---
title: （二十八） 按需加载组件
order: 28
date: 2022-11-07
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

##  按需加载组件代码,减少文件体积
:::info 说明
当我们使用普通的引入组件的方式的时候,是页面第一次加载就把所有的源文件都加载出来了,这样当项目大的时候,首次加载会变得非常的缓慢,影响用户体验,为了解决这个问题,`vue` 使用了 `es6` 语法的异步加载
:::
```js
// 正常导入组件
import ProductPage from "./components/ProductPage.vue"

// 使用异步加载
import { defineAsyncComponent } from "vue"
// 使用异步加载需要引入vue的defineAsyncComponent
const ProductPage = defineAsyncComponent(() =>
  import("./components/ProductPage.vue")
)

export default {
  components: {
    ProductPage,
  },
  data() {
    return {};
  },
}
```