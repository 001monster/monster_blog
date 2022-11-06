---
title: （十七）动态插槽
order: 17
date: 2022-11-04
category:
    - vue
---

## 在传递 `slot` 模板中，访问子组件的属性值（作用域插槽）
1. 数据在子组件当中定义，通过 `slot` 自定义属性传递给父组件提供模板的地方使用
```html
<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <slot :contacts="contacts/>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@domain.com",
        },
        {
          id: 2,
          name: "Karen Williams",
          email: "kwill@domai.com",
        },
        {
          id: 3,
          name: "Steve Rogers",
          email: "stevrog@domain.com",
        },
      ],
    };
  },
};
</script>
```
2. 父组件给子组件提供模板并且使用子组件的数据渲染模板
```html
<template>
  <main>
    <div>
        <!-- 简写结构语法 -->
      <ContactList v-slot="{ contact }">
        <!-- 只有一个propss可以简写 -->
        <!-- <ContactList v-slot="props"> -->
        <!-- 正常写法-只有一个slot 的时候可以直接写在组件标签上 -->
        <!-- <ContactList v-slot:default="props"> -->
        <!-- 正常写法 -->
        <!-- <template v-slot:default="props"> -->
        <!-- <p>{{ props.contact.name }}</p>
        <p>{{ props.contact.email }}</p> -->
        <p>{{ contact.name }}</p>
        <p>{{ contact.email }}</p>
        <!-- </template> -->
      </ContactList>
    </div>
  </main>
</template>

<script>
import ContactList from "./components/ContactList.vue";

export default {
  components: {
    ContactList,
  },
};
</script>
```