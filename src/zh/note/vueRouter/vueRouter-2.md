---
title: （二）一个不用VueRouter的例子
order: 2
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211131205948.png)

```html
<template>
  <nav>
    <a
      v-for="(route, path) in routes"
      :href="path"
      @click.prevent="changeRoute(path)"
      >{{ route.label }}</a
    >
  </nav>
  <component :is="currentPage" />
</template>

<script setup>
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

import { ref, computed } from "vue";

const routes = {
  "/": {
    component: PageOne,
    label: "页面1",
  },
  "/2": {
    component: PageTwo,
    label: "页面2",
  },
  "/3": {
    component: PageThree,
    label: "页面3",
  },
};

const currentPath = ref(location.pathname);

const currentPage = computed(
  () => routes[currentPath.value].component || PageOne
);

function changeRoute(path) {
    // 使用浏览器自带的api 来实现
  history.pushState(null, null, path);
  currentPath.value = location.pathname;
}
</script>
```


#### 总结：写在最后
- 对于小型应用可以使用这样的方式来实现，大型应用还是使用 `VueRouter`