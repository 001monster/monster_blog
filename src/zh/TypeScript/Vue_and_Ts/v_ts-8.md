---
title: （八）computed 类型定义
order: 8
date: 2022-11-30
category:
    - TypeScript
tag: 
    - Ts和Vue
---


### 一、`computed` 计算属性类型定义

#### computed 可以根据返回值来自动推断类型，所以就不用手动定义类型了
```html
<script setup lang="ts">
import { computed } from 'vue'

const xxx = computed(() => {
    // 一业务逻辑
    ...
})
</script>
```