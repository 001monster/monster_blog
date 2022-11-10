---
title: （二十三）动态组件渲染不同HTML标签
order: 23
date: 2022-11-07
category:
    - vue
---

## 使用动态组件渲染不容的HTML标签

### 一、渲染不同的标签

1. 子组件
```html
<template>
    <!-- is后面可以绑定动态的值，is里面就是渲染的不同的标签名字，比如 div、h1、i标签等 -->
  <Component :is="heading"><slot></slot></Component>
</template>

<script>
export default {
  props: ["level"],
  computed: {
    // 也可以通过计算属性去拼接标签
    heading() {
      return `h${this.level}`;
    },
  },
};
</script>
</style>
```

2. 父组件
```html
<template>
  <main>
    <div>
      <!-- 动态 HTML 元素  -->
      <TextHeading level="h1">一级标题</TextHeading>
      <!-- <TextHeading level="div">我是div</TextHeading>
      <TextHeading level="i">我是i</TextHeading> -->
    </div>
  </main>
</template>

<script>
import TextHeading from "./components/TextHeading.vue";
export default {
  components: {
    TextHeading,
  },
};
</script>
```

![渲染不同的标签](https://image.zswei.xyz/img/vue-23-1.png)


### 二渲染不同组件
1. 子组件一
```html
<template>
  <form @submit.prevent>
    <label>手机号：<input type="number" /></label>
    <label
      >验证码：<input type="number" /><button class="sendSMSCodeBtn">
        发送验证码
      </button></label
    >
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
.sendSMSCodeBtn {
  margin-left: 24px;
}
</style>

```

![渲染不同的标签](https://image.zswei.xyz/img/vue-23-2.png)

2. 子组件二
```html
<template>
  <form @submit.prevent>
    <label>昵称：<input type="text" /></label>
    <label>生日：<input type="date" /></label>
    <label>地址：<input type="text" /></label>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>

```

![渲染不同的标签](https://image.zswei.xyz/img/vue-23-3.png)

3. 父组件使用
```html
<template>
  <main>
    <div>
      <!-- 展示不同的组件 -->
      <component :is='contentData'></component>
      <!-- 动态切换上一步，下一步；并且赋予新的组件的值 -->
      <button v-if="contentData === 'RegisterForm'" @click="contentData = 'ProfileForm'">下一步</button>
      <button v-else @click="contentData = 'RegisterForm'">上一步</button>
    </div>
  </main>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'
import ProfileForm from './components/ProfileForm.vue'
export default {
  components: {
    RegisterForm,
    ProfileForm
  },

  data() {
    return {
      contentData: "RegisterForm"
    }
  }
};
</script>
```

### 总结：写在最后
:::info  总结
通过vue 给我们提供的内置组件标签 `<component :is="组件名字">` 通过他的is属性来切换不同的标签，或者是不同的组件
:::