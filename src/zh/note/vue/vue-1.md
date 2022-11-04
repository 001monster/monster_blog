---
title: （一）传统的网页开发方式的弊端
icon: code
date: 2022-11-02
category:
    - vue
---

## 传统网页开发的弊端
1. 传统网页的开发步骤 编写`编写HTML`编写`css`编写`javascript`脚本交互
有与JavaScript交互的`DOM`需要指定id并且id还不能重复
2. 编写的css 是全局的容易样式覆盖，后面命名的样式会覆盖掉前面名字一行的样式
3. 繁琐的获取dom元素，大量重复的代码，同样会出现命名冲突

## 下面就简单看一下传统网页开发的步骤吧
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>列表项1</li>
      <li>列表项2</li>
      <li>列表项3</li>
    </ul>
    <input type="text" placeholder="请输入内容" />
    <button id="btn">添加</button>
    <script>
      const ul = document.querySelector("ul"); // 这个是使用选择器选择元素
      const input = document.querySelector("input");
      const btn = document.getElementById("btn");

      const data = ["列表项1", "列表项2", "列表项3"]; // 默认数据

      btn.addEventListener("click", () => {
        const content = input.value;
        const newLi = document.createElement("li");
        newLi.innerHTML = content;
        ul.append(newLi);
        data.push(content);
        console.log(data);
      });

      // 其它地方可能删除了数组中的元素，但是没有删除 HTML DOM 元素
      // 鼠标双击事件
      document.addEventListener("dblclick", () => {
        data.pop();
        console.log(data);
      });
    </script>
  </body>
</html>
```

## 总结
为了解决上面所说的这些问题呢，于是vue横空出世了，解决了这些问题，后面的文章将会详细介绍vue开发的过程由浅入深