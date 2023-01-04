---
title: （十三）watch监听props
order: 13
date: 2022-11-04
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 使用watch监听props
:::info 说明
watch 不仅可以监听自身属性的变化，还可以监听props传递过来的数据
:::
1. 子组件
```html
<template>
  <div>
    <p>当前页：{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="currentPage = n">
      {{ n }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  watch: {
    // 通过watch监听属性去监视props 数据的变化
    totalPage(newVal, oldVal) {
      // 控制台可以发生改变，说明监视属性能够监听到父组件传递过来的属性
      console.log(newVal, oldVal);
      this.currentPage = 1;
    },
  },
};
</script>
```
2. 父组件
```html
<template>
  <main>
    <div class="container">
      <PaginationComponent
        :totalPage="totalPage"
        :defaultCurrentPage="currentPage"
      />
      <!-- 当父组件点击按钮totalPage 属性加一，数据发生改变watch开始监听 -->
      <button @click="totalPage += 1">增加页数</button>
    </div>
  </main>
</template>

<script>
import PaginationComponent from "./components/PaginationComponent.vue";

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      totalPage: 6,
      currentPage: 4,
    };
  },
};
</script>
```

### 总结：写在最后
watch监听的必须是动态的属性，就是在父组件data中定义过的值，如果是静态的值是监听不到的