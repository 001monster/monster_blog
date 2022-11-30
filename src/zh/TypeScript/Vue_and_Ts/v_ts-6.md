---
title: （六）定义 emits 类型&原生 DOM 元素类型
order: 6
date: 2022-11-30
category:
    - TypeScript
---


### 一、定义 emits 类型&原生 DOM 元素类型

#### 定义自定义触发事件（调用签名）
```js
const emit = defineEmits<{
    (e: "事件名字"): void
    (e: "事件名字"): void
    (e: "事件名字", 传递字段名: 类型): void
}>()

// 获取 DOM 元素的时候需要进行强制转换类类型
function sendEmit() {
    emit('事件名字', 传递单数)
}
```

#### 强制转换 `DOM` 类型（DOM 类型查看文档）
```js
const emit = defineEmits<{
    (e: "事件名字"): void
    (e: "事件名字"): void
    (e: "事件名字", 传递字段名: 类型): void
}>()

// 获取 DOM 元素的时候需要进行强制转换类类型
function sendEmit(e: Event) {
    const value = (e.target as HTMLSelectElement).value // 这里获取到的是 true 或 false
    emit('事件名字', 字段名: 类型)
}
```