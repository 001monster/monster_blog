---
title: 8.props 属性
icon: code
date: 2022-11-04
category:
    - vue
---

## props 属性：自定义组件内容

### 一、传递固定的值
```js
// props 传值 组件传值
<MyComponent 
  name="张三"
  age="18"
/>

// props 接收使用 传值数据
// 第一种写法 数组写法
props: ['name', 'age']

// 第二种写法 对象写法
// 第二种写法可以规定传值的类型，和默认值
props: {
  name: {
    type: String,
    default: '李四'
  },
  age: {
    type: Number,
    default: 18
  }
}

// 在模板中使用
<div>{{name}}<div/>
<div>{{age}}<div/>

// 在生命周期中访问props 传递过来的值
mounted() {
  console.log(this.name)
}

// 总结 props 只能由父组件传递值给子组件，同时子组件不能修改父组件传递进来的值
```


### 二、传递动态的值
```js
// 子组件
<template>
  <div>
    <p>{{ sender }}</p>
    <span>{{ time }}</span>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  props: ["sender", "msg", "time"],
};
</script>
<style scoped>
</style>


// 父组件
<template>
  <main>
    <div>
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :sender="message.sender"
        :msg="message.msg"
        :time="message.time"
      />
    </div>
  </main>
</template>

<script>
import MessageItem from "./components/MessageItem.vue";

export default {
  components: {
    MessageItem,
  },
  data() {
    return {
      messages: [
        {
          id: 1,
          sender: "张三",
          msg: "你好呀!",
          time: "19:38",
        },
        {
          id: 2,
          sender: "李四",
          msg: "Hi!",
          time: "19:40",
        },
        {
          id: 3,
          sender: "王五",
          msg: "最近怎么样？",
          time: "19:42",
        },
      ],
    };
  },
};
</script>

<style>
</style>
```