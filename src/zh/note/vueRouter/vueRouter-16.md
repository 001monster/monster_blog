---
title: （十六）导航守卫
order: 16
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211132216232.png)

#### 导航守卫-路由生命周期钩子
:::info 说明
导航守卫有三种配置方式
:::

#### 一、路由导航的认识
1. 全局路由导航
```js
// 导航刚触发、组件还没有加载，且导航发生实际跳转之前
router.beforeEach((to, form) => {
  console.log('全局路由守卫')
})

// 导航守卫执行完毕，且组件加载完成，组件中的导航守卫执行完毕之后，且导航实际跳转前执行
router.beforeResolve((to) => {
  if(to.path.startsWith('blogs')) {
    console.log('用户已经登录')
  }
})

// 导航确认并实际跳转之后执 - 可以操作 DOM 可以进行埋点统计数据，可以创建多个他们会按照顺序执行
router.afterEach((to) => {
  document.title = to.path
})
```

2. 按路由配置
```js
const routers = [
  {
    path: '/blog',
    component: BlogListPage,
    // 进入对应的路由时，页面实际跳转前
    beforeEnter: (to from) => {
      console.log('按路由配置')
    }
  }
]
```

3. 在组件中配置
```js
export default {
  // 导航跳转时，组件创建前
  beforeRouteEnter(to, from ) {}
  // 导航跳转时，且复用组件时
  beforeRouteUpdate(ro, from) {}
  // 在页面即将跳转之前，用来提示用户有未 保存的数据
  beforeRouteLeave(to, from) {}
}
```


#### 二、路由导航的参数
```js
to: 导航要跳转到的路由对象
from: 导航跳转前的当前路由对象

// 如果到行守卫返回 false 会阻止导航的跳转,如果导航没有返回，或者是返回undefined等就会继续执行
router.beforeEach((to, from) => {
  if(true) {
    return false
  } else {
    // 或者也可以返回一个路由导航对象
    return {
      name: 'blogs'
    }
  }
})

// @4已经不推荐使用了 next()，除非在非必要的时候，还需要注意的是，使用 next() 参数就必须调用，使用了 next() 就不能使用 return了

```

#### 总结：写在最后
:::info 总结
1. 先执行组件中的 `beforeRouteLeave` 导航守卫（如果有的话）

2. 执行全局的 `beforeEach()` 导航守卫

3. 在复用组件中，执行 `beforeRouteUpdate()` 导航守卫

4. 执行路由对象中的 `beforeEnter` 导航守卫

5. 解析异步的导航组件

6. 执行组件中的 `beforeRouterEnter()` 导航守卫

7. 执行全局的 `beforeResolve` 导航守卫

8. 确认导航，并发生页面跳转

9. 执行全局的 `afterEach` 导航守卫

10. 更新 `DOM` 节点

11. 执行组件中 `beforeRouterEnter` 中的 `next()` 回调函数中的回调
:::