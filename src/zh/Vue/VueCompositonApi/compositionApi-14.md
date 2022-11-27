---
title: （十四）setup中第二个参数context
order: 14
date: 2022-11-09
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## `setup` 中第二个参数 `context` 中的 `slots` 属性
### 一、`context` 中的 `slots`
:::info 说明
`setup` 的第三个参数主要是用于渲染函数访问父组件传递过来的 `slots` 如果不使用渲染函数，可以跳过这章


使用渲染函数来编写模板
1. 子组件使用渲染函数 来渲染模板
```html
<!-- <template>
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
</template> -->

<script>
import { h } from "vue";

export default {
  setup(props, { slots }) {
    // console.log(slots);
    console.log(slots.header);
    console.log(slots.default);

    return () => [
      h("header", {}, slots.header()),
      h("main", {}, slots.default()),
    ];
  },
};
</script>
```

2. 父组件传递模板
```html
<!-- 父组件传递模板 -->
<template>
  <main>
    <div>
      <BaseLayout>
      <!-- 这里是模板 -->
        <template v-slot:header>
          <nav>
            <a href="#">首页</a>
            <a href="#">关于</a>
            <a href="#">联系</a>
          </nav>
        </template>
        <template v-slot:default>
          <p>这是内容</p>
        </template>
      </BaseLayout>
    </div>
  </main>
</template>

<script>
import BaseLayout from "./components/BaseLayout.vue";
export default {
  components: {
    BaseLayout,
  },
};
</script>
```
:::

![](https://image.zswei.xyz/img/202211091527444.png)


### 二、`context` 的另外一个属性 `attrs`
:::info 说明
它用来获取没有在  `props` 中定义的其他属性

1. 父组件
```html 
<template>
  <main>
    <div class="container">
      <MessageList class="messageList" :test="test" data-title="消息列表" />
    </div>
  </main>
</template>
```

2. 子组件，我们可以看到，单独打印 `attrs` 他是一个 `proxy` 的值说明它是一个响应性的值，而直接打印它里面的某个值是直接打印出来，说明它的属性值不是一样响应性的数据，如果使用结构语法来结构出 `attrs` 的值，它的值也会失去响应性
```js
setup(props, { attrs }) {

    // 打印父组件冲传递的props 未接收的属性
    console.log(attrs)
    console.log(attrs.class);
    // 如果有中划线，所以需要使用中括号来访问
    console.log(attrs["data-title"]);
}
```
:::

![](https://image.zswei.xyz/img/202211091538520.png)
![](https://image.zswei.xyz/img/202211091538242.png)


### 总结：写在最后
:::info 总结
`attrs` 它本身是响应性的，它里面的属性不是，所以使用结构语法结构出来的属性也不是响应性的
:::