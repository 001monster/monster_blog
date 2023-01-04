---
title: （四）原生 WEB 拖动排序
date: 2022-11-02
category: 
    - 拖动排序
tag:
    - js
    - 原生拖拽
order: 4
---

#### 使用原生的拖动排序
- 在我们网页开发中经常需要做拖动排序

![](https://image.zswei.xyz/img/202211151346020.png)

- 源码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>排序</title>
</head>

<body>
    <div class="root">
        <div draggable="true" class="item">1</div>
        <div draggable="true" class="item">2</div>
        <div draggable="true" class="item">3</div>
        <div draggable="true" class="item">4</div>
        <div draggable="true" class="item">5</div>
    </div>
</body>

</html>

<script>
    const list = document.querySelector('.root')
    let onElment     // 记录当前正在拖动的元素
    // 事件委托监听
    list.ondragstart = (e) => {
        setTimeout(() => {
            // 异步来添加样式，防止拖动的样式耶也变化了
            e.target.classList.add('moving')
        }, 0)
        onElment = e.target
        // 给拖动的默认行为变为拖动 - 让默认行为的是复制
        e.dataTransfer.effectAllowed = 'move'
    }

    // 阻止默认行为允许拖动
    list.ondragover = (e) => {
        e.preventDefault()
    }

    // 元素会发生改变，事件委托监听
    list.ondragenter = (e) => {
        // 阻止默认行为允许拖动
        e.preventDefault()
        // 判断是否拖动到了自身元素或者是父元素-如果是就直接 return
        if (e.target === list || e.target === onElment) return
        // 调用 Array.forem 来将一个类数组转换成一个真正的数组
        const children = Array.from(list.children)
        // 获取当前拖动这个元素的下标
        const sourceIndex = children.indexOf(onElment)
        // 获取被覆盖的元素下表
        const targetIndex = children.indexOf(e.target)
        // 判断他两个下标来判断是向上拖动还是向下拖动
        if (sourceIndex < targetIndex) {
            console.log('向下拖动')
            // 向下拖动给他放到覆盖元素的下面
            list.insertBefore(onElment, e.target.nextElementSibling)
        } else {
            console.log('向上拖动')
            // 向上拖动给他放到覆盖元素的上面
            list.insertBefore(onElment, e.target)
        }
    }

    // 拖动完成把样式变回来
    list.ondragend = (e) => {
        e.target.classList.remove('moving')
    }
</script>

<style>
    .root {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        color: #fff;
        text-align: center;
    }

    .item {
        padding: 15px;
        margin-top: 10px;
        background-color: rgb(0, 158, 79);
        border-radius: 5px;
    }

    .moving {
        border: 1px solid rgb(150, 150, 150);
        background-color: transparent;
        color: #000;
    }
</style>
```