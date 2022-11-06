---
title: （二十一）获取DOM和子组件实例
order: 21
date: 2022-11-06
category:
    - vue
---

## 获取DOM和子组件实例
:::info 获取DOM和子组件实例
vue 的数据流向是单项的从父组件流向子组件，也就是 `props down`， `emit up` 的原理机制，但是 `vue` 中提供在父组件中访问子组件实例的方法，`ref` 它可以访问到子组件的实例，也可以访问到 `DOM` 的原生对象，但是不到万不得已不推荐使用这个 `ref` 来访问子组件，因为这样会改变数据的流向，基本 `99%` 的业务用不到这个
:::
1. 子组件
```html
<template>
  <input type="text" v-model="inputText" ref="inputControl" />
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  mounted() {
    this.$refs.inputControl.focus();
  },
  methods: {
    blur() {
      this.$refs.inputControl.blur();
    },
  },
};
</script>
```
2. 父组件
```html
<template>
  <main>
    <div>
      <AutoFocus ref="autofocus" />
    </div>
  </main>
</template>

<script>
import AutoFocus from "./components/AutoFocus.vue";
export default {
  components: {
    AutoFocus,
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$refs.autofocus.inputText);
      this.$refs.autofocus.blur();
    }, 5000);
  },
};
</script>
```

### 总结：写在最后
:::info 总结
这样使用虽然非常方便，但是不到万不得以不建议这样使用，因为这样会改变数据的流向，出现错误时，难以排查
:::