---
title: （九）插槽
order: 9
date: 2022-11-04
category:
    - vue
---

## 插槽
在项目开发种我们只使用props 进行传值往往是完成不了功能需求的，要想开发高阶组件就需要使用插槽了`slot`，比如在子组件当中动态添加html 文件就需要使用插槽了

### 一、给组件使用插槽的方法（默认插槽）适用于只有一个插槽的组件
1. 子组件
```js
// 需要在子组件当中使用 <slot></slot> 标签进行占位
<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>

      // 插槽也可以设置默认值内容，当父组件没有像插槽中添加html 元素时就显示默认值内容
      <!-- <slot>
        <p>默认卡片内容</p>
      </slot> -->
    </div>
  </div>
</template>
```
2. 父组件传递html标签
```js
<template>
  <main>
    <div>
      // 这里标签当中的内容会默认放到子组件标签中slot 标签的位置
      <BaseCard title="卡片容器">
        <p>这是卡片的内容</p>
        <p>可以插入任何 HTML 模板</p>
        <a href="#">这是一个超链接</a>
      </BaseCard>
    </div>
  </main>
</template>
```


### 二、使用多个插槽占位（命名插槽）适用于有多个插槽的组件
1. 子组件
```html
<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
```
2. 父组件
```html
<template>
  <main>
    <div>
      <BaseCard>
        <!-- <template v-slot:title> -->
        <template #title>
          <h2>卡片标题</h2>
        </template>
        <!-- <template v-slot:content> -->
        <template #content>
          <p>这是卡片的内容</p>
          <p>可以插入任何 HTML 模板</p>
          <a href="#">这是一个超链接</a>
        </template>
      </BaseCard>
    </div>
  </main>
</template>
```

### 三、插槽返回值（作用域插槽）适用于父组件自定义插槽内容又要使用子组件数据
1. 子组件
```html
<template>
  <div class="card">
    <div class="title">
      <slot name="title" msg="hello我是插槽子组件向父组件传递的内容的内容"></slot>
    </div>
    <div class="content">
      <slot name="content" title="我也是"></slot>
    </div>
  </div>
</template>
```
2. 父组件
```html
<template>
  <main>
    <div>
      <BaseCard>
        <template #title="msg">
        <!-- 这里的内容就是子组件向父组件传递的内容 -->
        <div>{{msg}}</div>
        </template>
      </BaseCard>
    </div>
  </main>
</template>
```


### 总结：写在最后
```html
<!-- 我们使用不带名字的插槽的时候，其实有一个默认的名字 -->
<template v-slot:default>
<template/>

<!-- 命名插槽也是一样的通过 v-slot 来绑定插槽的名字 -->
<template v-slot:title>
<template/>

<!-- 同时以上这些所有v-slot都可以简写为 # -->
<template #:default>
<template/>

<template #:title>
<template/>
```