---
title: （二十五） 在其他DOM元素挂载组件
order: 25
date: 2022-11-07
category:
    - vue
---

##  在其他DOM元素挂载组件
在我们日常开发中有些组件是不属于任何容器，他是直接挂在 `body` 上的，比如父组件使用一个自定义信息提示弹窗

### 一、单词传送组件
1. 子组件信息弹窗
```html
<template>
  <!-- vue 内置标签<Teleport>，通过 to 属性 改变组件挂在的DOM元素 -->
  <Teleport to="body">
    <div v-if="show" class="alertBox">
      <div class="closeIcon" @click="show = false">X</div>
      <div class="content">
        <slot>消息提示框组件</slot>
      </div>
    </div>
  </Teleport>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
```

2. 父组件使用信息弹窗
```html
<template>
  <main>
    <div class="container">
      <!-- 虽然组件是放在这个容器里面的，但是子组件设置了 Teleport 把他自定挂在到了body 上 -->
      <AlertBox>这是一段消息</AlertBox>
    </div>
  </main>
</template>

<script>
import AlertBox from "./components/AlertBox.vue";
export default {
  components: {
    AlertBox,
  },
};
</script>
```

### 二、多次传送组件
1. `html` 文件 设置一个专门的 `div` 容器来接收信息
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>

<body>
  <div id="app"></div>

  <!-- 接收信息的容器 -->
  <div id="messages"></div>
  <script type="module" src="/src/main.js"></script>
</body>

</html>
```

2. 子组件
```html
<template>
  <!-- 还是一样的通过 to 去指定挂载的 DOM 元素，这里指定id 为message的div -->
  <Teleport to="#messages">
    <div v-if="show" class="alertBox">
      <div class="closeIcon" @click="show = false">X</div>
      <div class="content">
        <slot>消息提示框组件</slot>
      </div>
    </div>
  </Teleport>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },

  // 组件挂载完毕后3秒钟关闭消息弹唱
  mounted() {
    setTimeout( () => {
      this.show = false
    }, 3000)
  }
};
</script>
```

3. 父组件
```html
<template>
  <main>
    <div class="container">
      <button @click="msgs.push(`新信息${msgs.length + 1}`)">添加一条信息</button>
      <AlertBox v-for="(item , i) in msgs">{{item}}</AlertBox>
    </div>
  </main>
</template>

<script>
import AlertBox from "./components/AlertBox.vue";
export default {
  components: {
    AlertBox,
  },

  data() {
    return {
      msgs: []
    }
  }
};
</script>
```
![多次传送组件](https://image.zswei.xyz/img/vue-25.png)

### 总结：写在最后
:::info 总结
我们有时候开发需要把组件挂载到其他 `DOM` 元素上，`vue` 给我们提供了一个内置组件 `<Teleport>` 通过他的 `to` 属性来指定挂载组件的容器
:::