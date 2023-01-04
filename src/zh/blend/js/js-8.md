---
title: （八）类中方法 this 的指向
date: 2022-12-12
category:
    - this
order: 8
tag:
    - js
    - js类的基本知识
---

### 🐆类中方法 this 的指向
```js
class Person {
    constructore(name, age) {
        this.name = name
        this.age = age
    }

    speck() {
        // speck 方法放在哪里？ --- 类的原型对象上，供实例使用
        // 通过 person 实例调用 speck 时， speck 中的 this 就是 Person 的实例
        console.log(this)
    }

    const p1 = new Person('tom', 18)
    p1.speck()  // 通过实例调用 speck 方法
}
```

![](https://image.zswei.xyz/img/202301021253410.png)


### 二、为什么把函数实例对象赋值给新变量，`this` 变成了 `undefiend`

```js
class Person {
    constructore(name, age) {
        this.name = name
        this.age = age
    }

    speck() {
        // speck 方法放在哪里？ --- 类的原型对象上，供实例使用
        // 通过 person 实例调用 speck 时， speck 中的 this 就是 Person 的实例
        console.log(this)
    }

    const p1 = new Person('tom', 18)
    p1.speck() // 通过实例调用 speck 方法
    const x = p1.speck  
    x()
}
```

![](https://image.zswei.xyz/img/202301021257538.png)

- `p1.speck` 属于实例调用，所有能读取到 `this`
```js
p1.speck()
```

- `x` 通过赋值拿到了 `p1.speck` 这个函数，然后通过 `x()` 去调用这个方法，称为直接调用，又应为使用了类，类中的函数，自动开启了严格模式，所以不允许 `this` 指向 `window` 所以 `this` 是 `undefiend`
```js
const x = p1.speck  
x()  // 直接调用
```


#### 函数是可以开启局部严格模式的 `use strict`

![](https://image.zswei.xyz/img/202301021305814.png)

![](https://image.zswei.xyz/img/202301021306440.png)