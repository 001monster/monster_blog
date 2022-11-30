---
title: （七）处理 emit 传递的方法类型
order: 7
date: 2022-11-30
category:
    - TypeScript
---


### 一、定义 emits 类型&原生 DOM 元素类型

#### 触发自定义事件
```html
<script setup lang="ts">
function 事件名(传递的字段名: 类型) {
    // 逻辑代码
    ...
}
</script>
```