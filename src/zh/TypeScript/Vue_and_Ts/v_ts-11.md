---
title: （十一）组件 ref 类型定义
order: 11
date: 2022-11-30
category:
    - TypeScript
tag: 
    - Ts和Vue
---


### 一、组件 `ref` 类型定义


#### 使用 `TypeScript` 来定义组件的类型
- 语法: `ref<InstaceType<typeof 组件名字> | null>(null)`

```html
<template>
    <MyTemplate>这是一个组件</MyTemplate>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const myTemplate = ref<InstaceType<typeof MyTemplate> | null>(null)
</script>
```