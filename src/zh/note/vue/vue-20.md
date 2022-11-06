---
title: （二十）让组件支持v-model
order: 20
date: 2022-11-06
category:
    - vue
---

## 让组件至此v-model指令

### 一、组件使用一个 `v-model`
1. 封装表单控件
```html
<!-- 要想让组件支持v-model 只需要在子组件接收 modelValue 并且监听一个update:modelValue 的属性就可以给组件使用v-model了 -->

<template>
  <label
    ><span>搜索：</span
    ><input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
<script>
export default {
  // 这两个名字是固定的
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}
</style>

```

2. 使用封装的 `seatchInput` 组件
```html
<template>
  <main>
    <div>
      <SearchInput v-model="searchTerm" />
      <p>{{ searchTerm }}</p>
    </div>
  </main>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
};
</script>
```
![使用一个v-model](https://image.zswei.xyz/img/vue-20-1.png)

### 二、组件使用多个 `v-model`
1. 封装表单组件
```html
<template>
  <label
    ><span>搜索：</span
    ><input
      type="text"
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
    />
  </label>

  <label>
    <span>类别：</span>
    <select :value="category" @input="$emit('update:category', $event.target.value)">
      <option value="default">默认</option>
      <option value="fontend">前端</option>
      <option value="backend">后端</option>
      <option value="fullstack">全栈</option>
    </select>
  </label>
</template>
<script>
export default {
  // 这里的名字要和，使用表单组件v-model: 后面传的值是一样的。如v-model: name，那么props接收就要接收 name ，监听就是update:name
  props: ["searchTerm", "category"],
  emits: ["update:searchTerm", "update:category"],
};
</script>
```
2. 使用表单组件
```html
<template>
  <main>
    <div>
      <!-- 这里传递v-model：后面的值就是表单组件 props 接收的值 -->
      <SearchInput 
        v-model:searchTerm="searchTerm"
        v-model:category="category"
      />
      <p>{{ searchTerm }}</p>
      <p>{{ category }}</p>
    </div>
  </main>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      searchTerm: "",
      category: "default"
    };
  },
};
</script>
```
![使用一个v-model](https://image.zswei.xyz/img/vue%20-20-2.png)


### 总结：写在最后
:::info 总结
1. 使用一个v-model
要想让自己封装的组件支持v-model, 以下写法是固定的, 但是只支持一个v-model，如果需要支持多个v-model 则需要改动一下配置
```html
<input
  type="text"
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/>
```

接收和监听的这个两个元素也是固定的写法
```html
<script>
export default {
  // 这两个名字是固定的
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>
```

2. 使用多个v-model
```js
// 这里的名字要和，使用表单组件v-model: 后面传的值是一样的。如v-model: name，那么props接收就要接收 name ，监听就是update:name
props: ["searchTerm", "category"],
emits: ["update:searchTerm", "update:category"],
```

```html
<!-- 这里传递v-model：后面的值就是表单组件 props 接收的值 -->
<SearchInput 
  v-model:searchTerm="searchTerm"
  v-model:category="category"
/>
```
:::