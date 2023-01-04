---
title: （十二）响应性props
order: 12
date: 2022-11-04
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 响应性props
:::info 说明
我们之前通过`props`传递的数据都是固定的，但是我们开发的过程中数据都是动态
:::

1. 子组件，这里的子组件是一个翻页组件，接收一个总页数来显示按钮
```html
<template>
  <div>
    <p>当前页： {{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
        // 要想子组件改变父组件的传递过来的值，就需要手动维护一个数据，默认值是父组件传递过来的值
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(n) {
        // 现在去修改data里面的数据就可以修改了，不会报错了
      this.currentPage = n;
    },
  },
};
</script>
```
2. 父组件
:::info 说明
需求1. 现在我们父组件当中有一个按钮，每当我们点击一次页数就加一
需求2. 我们在子组件当点击按钮切换当前页，发现vue发出警告说我们尝试修改defaultCurrentPage
如果我们确实要在子组件修改父组件传递过来的值的话，就需要我们手动在组件的data里面维护一个数据，初始值使用父组件传递过来的值，后续改变就改变子组件data里面的数据

:::
```html
<template>
  <main>
    <div class="container">
      <PaginationComponent
        :totalPage="totalPage"
        :defaultCurrentPage="currentPage"
      />
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
1. vue的数据是单向数据流，允许从父组件流向子组件，子组件不能直接修改父组件的值，我们只能在子组件中定义一个新属性，把他的默认值设置为父组件传递进来的默认，之后修改子组件自己维护的值
 2. 父组件属性变化，子组件自动刷新
 3. 子组件不能直接修改父组件的值