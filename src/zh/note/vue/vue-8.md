---
title: （八）props 属性
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
// 第二种写法可以规定传值的类型，和默认值，是否为必传项，这个类型规定不是强制的，当传错值的时候，vue会发出警告
props: {
  name: {
    type: String,
    default: '李四',
    required: true,
    validator(value) {
      // 验证通过返回true 不通过返回 false
      reurn value>0
    }
  },
  age: {
    type: Number,
    default: 18,
    required: true
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

#### props 传值验证
```js
// 如果需要需要对传递进来的值进行验证，就需要把props 写成对象形式
props: {
  name: {
    type: String,
    default: '李四',
    required: true,
    validator(value) {
      // 验证通过返回true 不通过返回 false
      reurn value>0
    }
  }
}

// type 验证传递的数据类型 如果验证多个类型通过数据 ['String', 'Number']
// default 默认值，如果事一个对象、数组、或者事方法，就需要写成函数形式 通过return 返回，即使是一个空对象或空数组也需要写成函数 返回
default() {
  return [] // 空数组也需要返回
}
// required 验证值是否为必传项， true是必传，false是非必传
// validator 自定义验证器 验证通过返回true 不通过返回 false
validator(value) {
  // 验证通过返回true 不通过返回 false
  reurn value>0
}

// 以上验证呢都不是强制性的，即使是传值错误同样也会渲染出来，只是vue会发出警告
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

      // 可以使用简写形式，vue 会根据props 里面接收的数据自行拆解，没有接收的将会自动忽略
      <!-- <MessageItem
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      /> -->
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


### 三、给组件传递未定义的属性发生的变化
给组件传递未定义的属性，值得是子组件未通过props 接收的属性，长用来定义claa 来修改子组件的class 样式
```js
// 默认未定义的属性默认是放在子组件的最外层容器上如
// 父组件使用子组件
<FatherComponent class="blogColor" />

// 子组件 写在父组件的class 默认出现在子组件的最外层
<div class="blogColor">
  <a>你好啊<a/>
<div/>

<style>
.blogColor > a{
  color: red;
}
<style/>

// 子组件访问未定义的属性
mounted() {
  // 这里是子组件的生命周期
  console.log(this.$attrs.class)
}

// 阻止未定义的属性放到最外层容器上 inheritAttrs 改为false 就无法把未定义的属性放到子组件的最外城了
mounted() {
  // 这里是子组件的生命周期
  inheritAttrs: false
}
```