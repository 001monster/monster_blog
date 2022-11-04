---
title: 3.计算属性watch区别
icon: code
date: 2022-11-02
category:
    - vue
---

### methods、computed、watch：他们三者的区别
1. 他们三者都可以完成一些相同的功能
2. methods可以把他当作原生的js方法或者是函数来使用，可以把watch 里面的代码写成方法放到methodsd当中通过this.xxx 的方式去调用，这样可以减少watch带代码，更加方便维护
3. computed他是有缓存的，如果依赖的tata数据不改变他就会一直使用缓存，computed使用的数据需要return出去才可以使用，在页面上可以直接使用computed 里面的属性
3. watch 可以用来做一些比较费时的操作，比如网络请求等等之类的，watch没有返回值，他是去修改data里面的数据，data里面的数据变了，页面所依赖data的地方也会发生响应的变化

### methods 写法
```js
// 这里使用的是vue2的写法，后面时使用组合式api了就使用vue3的写法
methods: {
    方法名(调用时候可以传递参数) {
        业务逻辑
    }
}
```

### computed 的两种写法
```js
// 一般需求都是使用简写方式，方法写法，就是使用 get 只读取数据
computed: {
    方法名直接在模板页面使用() {
        return 业务逻辑
    }
}

// 第二种写法是，对象写法，可以使用 get 和 set 方法
computed: {
    方法名直接在模板页面使用: {
        get() {
            return 业务逻辑
        },

        // 接受一个参数
        set(value) {
            当有操作修改了当前的这个方法属性机会触发这个函数
            vlaue指的是是该过后的值
        }
    }
}
```


### watch的两种写法
```js
// watch 基本写法 只能读取到最外层的属性
watch: {
    监听的data当中的数据(newVal, oldVal) {
        没有返回值
        耗时的业务逻辑
        newVal：新值
        oldVal：改变之前的值
    }
}

// 第二种写法，对象写法，深度监听可以读取到内层的数据
watch: {
    监听data种的数据: {
        handler(newVal, oldVal) {
            没有返回值
            耗的业务逻辑
            newVal：新值
            oldVal：改变之前的值
        }
        //深度监听，可以监听多层
        deep: true
    }
}
```

## 总结
:::info 总结
何时使用computed，何时又使用watch呢
1. computed：依赖的数据发生改变才会触发回调
2. watch：监听的变量发生改变就会触发回调
根据以上说明自行在合适的地方选择使用
:::