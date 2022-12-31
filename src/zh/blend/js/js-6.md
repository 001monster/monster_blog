---
title: （六）类的基本知识
date: 2022-12-31
category: 
    - js
article:
    - js类的基本知识
---

### 🥥一、类的基本知识
1. 定义一个类
```js
// 这里就创建了 Person 类
class Person {

}
```

2. 用类创建一个实例对象
```js
// 这里就创建了 Person 类
class Person {

}

const p1 = new Person()
console.log(p1)
```
控制台将会打印出，这里是那个类 `new` 之后创建出来的

![](https://image.zswei.xyz/img/202212312129844.png)


3. 给 `person` 创建的实例传递参数，初始化类
```js
// 这里就创建了 Person 类
class Person {
}

// 传递 name 和 age
const p1 = new Person('tome', 18)
console.log(p1)
```


4. 使用构造器函数 `constructor` 来接收传递的参数
```js
// 这里就创建了 Person 类
class Person {
    // 使用构造器函数接收参数
    constructor（name, age） {
        this.name = name
        this.age = age
    }
}

const p1 = new Person('tome', 18)
console.log(p1)
```

5. `constructor` 构造器中的 `this` 是谁？
- `constructor` 构造器中的 this 是谁？类的实例对象，谁 new  出阿里的类，this 指向就是谁
```js
// 这里就创建了 Person 类
class Person {
    // 使用构造器函数接收参数
    constructor (name, age) {
        // 构造器中的 this 是谁？类的实例对象，谁 new  出阿里的类，this 指向就是谁
        this.name = name
        this.age = age
    }
}

const p1 = new Person('tome', 18)
console.log(p1)
```

6. 类可以不写 `constructor` 构造函数吗
- 理论上是可以不写的，但是此处的 `person` 类没有继承任何其他类，如果不写就接收不到参数


7. 类的一般方法
- 什么是一般方法？除了自带的两个 `constructor` 构造器函数 程序根据自己的业务场景写的方法都叫做：一般函数/一般方法
```js
class Person {
    // 自带的构造器函数
    constructor(name ,age) {
        this.name  = name 
        this.age = age
    },

    // 一般方法/一般函数，程序员根据自己的业务场景定义的
    speck() {
        console.log(`我叫${this.name}`, `我的年龄是${this.age}`)
    }

    // 创建 person 的实例对象
    const p1 = new Person('tom', 18)

    console.log(p1)
    // 调用 Person 类的 speck 方法
    p1.speck()
}
```

8. 上述的一般方法 `speck` 方法放在了哪里
- 他放在了 `Person` 这个类的原型对象上-供实例使用，他在自身找不到，就沿着原型链 `__proto__` 找


![](https://image.zswei.xyz/img/202212312149918.png)


9. 上述 `speck` 方法的 `this` 是谁
- 通过上面的示例我们可以看到在调用 `speck` 方法的时候，能正常打印出 `speck` 方法里面的内容，证明一般函数的 `this` 也是示例对象（通过 `Person` 示例调用 `speck` 时，`speck` 中的 `this` 就是 `Person` 的示例）

- 但是不能说成：`speck` 中的 `this` 就是 `Person` 实例，为什么呢，看代码说话
```js
// 自带的构造器函数
    constructor(name ,age) {
        this.name  = name 
        this.age = age
    },

    // 一般方法/一般函数，程序员根据自己的业务场景定义的
    speck() {
        console.log(`我叫${this.name}`, `我的年龄是${this.age}`)
    }

    // 创建 person 的实例对象
    const p1 = new Person('tom', 18)

    console.log(p1)
    // 使用 call 改变this  指向
    p1.speck.call({a:1, b:2})
```
- 一因为使用 `call` 改变了　`this` 指向，所以此处的 `this` 变成了 `undefined` 
![](https://image.zswei.xyz/img/202212312158220.png)


10. 判断函数 `this` 的指向
- 看函数是怎么调用的
- `call` 可以更改 `this` 的指向
- `apply` 可以更改 `this` 的指向
- `bind` 可以更改 `this` 的指向

[🍈call、bind、apply三者的区别](./js-7.md)


#### 🥥(一)、类的继承
1. 创建一个 `student` 类继承 `person` 类
```js
const Person {
    constructor(name, age) {
        this.name = name 
        this.age = age
    },

    speck() {
        console.log(`我叫${this.name}`, `我的年龄是${this.age}`)
    }
}

// 定义个 student 类，继承了 person 类 studen 就拥有了 person 类里面的所有东西
const Student extends Person {

}
```
- 这里的 `student` 类就可以不用写构造器了，因为他继承了 `person` 类，直接就吧父类的 `constudtor` 的构造器直接搬过来就用了
```js
const Person {....}

// 定义个 student 类
const Student extends Person {

}

const s1 = new Student('小张', 18)
console.log(s1)
```

![](https://image.zswei.xyz/img/202212312216620.png)


2. 什么时候子类需要写 `constructor` 构造器？
- 当子类要接收参数时，就需要写 `constructor` 构造器了
```js
const Person {....}

// 定义个 student 类
const Student extends Person {
    // 因为下面使用的时候是按照顺序传递的，需要按顺序接
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }
}

const s1 = new Student('小张', 18, '高三')
console.log(s1)
```

![](https://image.zswei.xyz/img/202212312221220.png)

##### 🥔super 必须调用，什么意思呢？
1. 定义了一个类
2. 继承了一个类
3. 使用了构造器 `constructor`
- 符合了这三个条件之后，子类构造器中必须调用 `super` 
```js
const Person {....}

// 定义个 student 类
const Student extends Person {
    // 因为下面使用的时候是按照顺序传递的，需要按顺序接
    constructor(name, age, grade) {
        // 这里这样写不对，难道说，父类有 50 个参数要重复写吗？
        // this.name = name
        // this.age = age

        // 调用 super 帮我们调用父类的 constructor
        super(name, age)   // super 必须在第一个调用
        this.grade = grade
    }
}

const s1 = new Student('小张', 18, '高三')
console.log(s1)
s1.speck()
```

#### 🍅子类如何继承父类的一般方法 `speck`
- 通过 `__proto__` 原型链一层一层的往下找，就找到了 `speck` 这个方法

![](https://image.zswei.xyz/img/202212312230391.png)

##### 🍆子类重写重父类继承过来的方法
- `student` 不仅想说出自己的 名字 年龄 还想说出自己的年纪，这个时候就不能调用父级的 `speck` 函数了，就需要自己定义 `speck` 函数了
```js
const Person {....}

// 定义个 student 类
const Student extends Person {
    // 因为下面使用的时候是按照顺序传递的，需要按顺序接
    constructor(name, age, grade) {
        // 这里这样写不对，难道说，父类有 50 个参数要重复写吗？
        // this.name = name
        // this.age = age

        // 调用 super 帮我们调用父类的 constructor
        super(name, age)   // super 必须在第一个调用
        this.grade = grade
    }

    // 一般方法
    speck() {
        console.log(`我叫${this.name}`, `我的年龄是${this.age}`, `我读的是${this.grade}`)
    }
}

const s1 = new Student('小张', 18, '高三')
console.log(s1)
s1.speck()
```

![](https://image.zswei.xyz/img/202212312236382.png)
![](https://image.zswei.xyz/img/202212312238387.png)

- `student` 类想拥有一个自己独有的类
```js
const Person {....}

// 定义个 student 类
const Student extends Person {
    // 因为下面使用的时候是按照顺序传递的，需要按顺序接
    constructor(name, age, grade) {
        // 这里这样写不对，难道说，父类有 50 个参数要重复写吗？
        // this.name = name
        // this.age = age

        // 调用 super 帮我们调用父类的 constructor
        super(name, age)   // super 必须在第一个调用
        this.grade = grade
    }

    // 一般方法
    speck() {
        console.log(`我叫${this.name}`, `我的年龄是${this.age}`, `我读的是${this.grade}`)
    }

    // 自己的独有的方法
    // s这里的this是谁 通过 `Student` 示例调用 `study` 时，`study` 中的 `this` 就是 `Student` 的示例
    study() {
        console.log('我很努力的学习')
    }
}

const s1 = new Student('小张', 18, '高三')
console.log(s1)
s1.speck()
s1.study()
```

![](https://image.zswei.xyz/img/202212312240198.png)

### 🌽总结
1. 类中的构造器 `constructor` 不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写
2. 如果 `子类` 继承了 `父类` 且 `父类` 中写了构造器 `constructor`，那么 `子类` 的 `super` 是必须要调用的
3. 类中定于的方法，都是放在了类的原型对象上，供实例去使用