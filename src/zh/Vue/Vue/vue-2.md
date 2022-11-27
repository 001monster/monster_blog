---
title: （二）第一个vue3.x应用
order: 2
date: 2022-11-02
category:
    - vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

### 第一个vue3.x 应用
我们上一节说了传统网页的开发的弊端，那么我从现在开始就来解决这写弊端，来创建我们的第一个vue3.x应用

### 引用vue.js
这里呢我们先采用传统网页使用vue.js 来编写代码，先体验一下vue

## html代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
  <script src="lib/vue.global.js"></script>
</head>

<body>
  <div id="app">
    <h1>播放列表</h1>
    <input type="text" placeholder="请输入要查找的歌曲名" class="search" v-model="searchTerm" />
    <ul>
      <li v-for="song in filterList">{{ song }}</li>
    </ul>
  </div>
  <script src="index.js"></script>
</body>

</html>
```

## css样式
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background: #ebfafe;
  display: grid;
  place-items: center;
  height: 100vh;
}

#app {
  min-width: 375px;
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 48px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 28px;
}

#app h1 {
  font-size: 16px;
  color: #878b91;
  font-weight: 500;
}

.search {
  width: 100%;
  background: #f8f8f8;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin: 24px 0;
  font-size: 14px;
  outline: none;
}

.search::placeholder {
  color: #d5dbe3;
}

#app ul {
  color: #425066;
  list-style: none;
}

#app ul li {
  margin-bottom: 24px;
}
```

## js 脚本

```js
const dataList = {
    // 数据
    data() {
        return {
            playlist: ["What about now", "一千万个可能", "Me llamas"],
            searchTerm: "",
        }
    },

    // 计算属性
    computed: {
        filterList() {
            if (this.searchTerm) {
                return this.playlist.filter((song) =>
                    song.toLowerCase().includes(this.searchTerm.toLowerCase())
                )
            } else {
                return this.playlist
            }
        }
    }
}
Vue.createApp(dataList).mount("#app");
```

## 效果图