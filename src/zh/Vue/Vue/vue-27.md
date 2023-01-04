---
title: （二十七） Mixins组件配置的复用
order: 27
date: 2022-11-07
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

##  `Mixins`组件配置的复用

### 一、局部注册 `mixins`

:::nfo 说明
`Mixins` 到现在已经不推荐使用了,后面学习了 `vue3` 的组合式 `api` 会有更好的方法解决;
`mixins` 是一个普通的 `JavaScript` 对象,和组件的配置是一样的
:::
 1. minxins
 ```js
// minxins 是一个普通JavaScript对象,里面的配置和组件的配置是一样的, 然后暴露出去在组件中使用

 const PaginationMixin = {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};

export default PaginationMixin;

 ```

 2. 组件使用 `minxins`
 ```html
 <template>
  <div>
    <p>当前页：{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  // mixins 是一个数组,可以又多个配置
  mixins: [PaginationMixin],
};
 ```

 ### 二、全局注册 `mixins`
 ```js
 import { createApp } from "vue";
import App from "./App.vue";
import PaginationMixin from "./mixins/PaginationMixin";

const app = createApp(App);

// 全局挂载 Mixin
app.mixin(PaginationMixin);

app.mixin({
  siteTitle: "我的 Vue 应用",
  computed: {
    siteTitle() {
      return this.$options.siteTitle;
    },
  },
});

app.mount("#app");
 ```


### 总结: 写在最后
:::info 总结
如果使用 `mixins` 来抽离公共逻辑, 在组件中使用的时候, 如果组件中有同名的属性时, 组件的属性会覆盖掉 `mixins` 也就是说以组件自己的属性为主
但是如果是生命周期钩子,就会先执行 `mixins` 中的生命周期钩子,在执行组件自己的生命周期钩子
:::
