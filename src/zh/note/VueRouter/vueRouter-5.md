---
title: （五）动态路由匹配和获取参数
order: 5
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211131236709.png)

#### 动态路由
- 使用同一个页面展示不同的数据，只是根据路由来动态切换，说白了就是详情页

![](https://image.zswei.xyz/img/202211131238698.png)

- 动态匹配 `/:postId` ，匹配 `/` 后面所有的路径，如`name` `id` 等

![](https://image.zswei.xyz/img/202211131237617.png)

- 在对应的组件中可以通过 `this.$route.params.postId` 来获取动态传递的参数

![](https://image.zswei.xyz/img/202211131242150.png)