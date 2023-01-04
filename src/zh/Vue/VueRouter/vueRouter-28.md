---
title: （二十八）CompositionApi 路由
order: 28
date: 2022-11-14
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211142325430.png)

#### CompositionApi 路由
:::info 说明
因为在 `compositionApi` 当中无法访问 `this` 所以在 `compositionApi` 当中使用路由时另外一种方式
:::

#### 一、 `compositionApi` 使用 `route` 的语法
```js
// 1. 需要引入
import { useRouter } from 'vue-router'

// 使用 useRouter 返回的实例
const route  = useRoute()

route.params.postId
```

#### 二、监听数据的变化从新获取数据
```js
watchEffect( () => {
  blogPost.value = getBLogPostById(route.params.postId)
})
```

#### 三、编程式导航，访问 `router` 对象
```js
const route = useRouter()
function next() {
  router.push(`/${blogPost.value.id + 1}`)
}
```

#### 四、组件导航守卫
```js
onBeforeRouteUpdate( (to, from) => {
  console.log(to, from)
})

onBeforeRouteLeave( (to, from) => {
  console.log(to, from)
})
```

#### 五、`routerLink`
```js
// 对自定义封装 router-link 参数那些可以使用 useLink 获取
import { useLink  } from 'vue-router'
setup(props) {
  const { navigate } = useLink(posts)
  return { navigate }
}
```
- `beforeRouteEntrer`, 因为在 `script setup` 中无法定义，可以通过 `script` 共存的特性把他定义在 `setup` 外面
```js
<script>
  export default {
    beforeRouteEntrer: (to, from ) => {
      console.log(to, from)
    }
  }
</script>
<script>/* ... */</script>
```