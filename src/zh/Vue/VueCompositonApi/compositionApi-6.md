---
title: （六）监听响应数据的变化
order: 6
date: 2022-11-08
category:
    - VueCompositonApi
tag: 
    - Vue3
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## `watch` 监听响应性数据的变化
### 一、监听基本类型的响应性数据
```js
const data = ref('')

// 监听基本类型的参数，第一个传递的参数是需要监听的值， 第一个参数是一个回调函数，回调函数又两个值，一个是，监听数据变化过后的值，第二个是变化之前的值
watch(data, (newVal, oldVal) => {
    console.log(newVal, oldVal)
})


// 监听 ref 的 value 属性， 例如通过组件props 传递进来的, 这个时候第一个参数需要使用回调函数的形式
watch(
    () => data.value,
    (newVal, oldVal) => {
        console.log(newVal, oldVal)
    }
)


// 监听基本类型数据的方法有两种，第一种是直接监听 ref 的值
// 第二种是监听 ref 拆解过后的值，也就是value ，监听拆解过后的值需要使用 回到函数的形式监听 
```


### 二、监听对象中的基本类型的响应性属性
:::info 说明
监听对象中的基本类型的响应性属性，就是说只监听对象中的某一个属性，比如说只监听
`options.value.user.naem` ，并且如果是监听对象中的基本类型的响应性属性的时候，第一个参数需要使用 回调函数的形式 `() => options.value.user.name` 
:::
```js
<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    const options = ref({
      // const options = reactive({
      title: "消息列表",
      user: {
        name: "张三",
        active: true,
      },
    });

    watch(
        () => options.value.title，
        (newVal, oldVal) => {
            console.log(newVal, oldVal)
        }
    )

    watch(
        () => options.value.use.naem,
        (newVal, oldVal) => {
            console.log(newVal, oldVal)
        }
    )

    return { messages, options };
  },
};
</script>
```

### 三、监听对象类型的响应性属性
```js
<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "这是一条消息提醒1" },
      { id: 2, content: "这是一条消息提醒2" },
      { id: 3, content: "这是一条消息提醒3" },
      { id: 4, content: "这是一条消息提醒4" },
    ]);

    const options = ref({
      // const options = reactive({
      title: "消息列表",
      user: {
        name: "张三",
        active: true,
      },
    });

    return { messages, options };
  },
};
</script>
```

#### 普通监听
:::info 普通监听
这样写的话，当用户修改对象中的某一个属性，`watch` 是起不到任何作用的，因为，对象是一个引用地址，我们修改的是在原对象上修改，对象地址是没有发生改变的，所以 `watch` 监听不到。
```js
watch(
        () => options.value,
        (newVal,oldVal) => {
            console.log(newVal, oldVal)
        }
    )
```
:::

#### 深度监听
:::info 深度监听
深度监听第一种方法
这里虽然监听到了，但是我们改变数据打印的时候会发现，`newVal` 和 `oldVal` 是一样的，这是因为虽然 watch 监听到了属性里面值的变化了，但是对象始终是一个引用对象，所以打印出来的值是一样的，并且是修改过后的值
    
```js
watch(
        () => options.value,
        (newVal, oldVal) => {
            console.log(newVal, oldVal)
        },
        // 需要监听到对象中的变化，就需要配置第三个属性，他是一个对象
        {
            deep: treu,     // 开启deep 就可以监听到对象的变化了
        }
    )
```
:::


#### 监听对象前后的数据
:::info 监听对象的新值和旧值
我们在上面这个方法中看见了，虽然 `watch` 监听到了 对象内部的属性的变化了，但是无法监听到对象修改前的值，如果业务不需要监听修改前的值，可以采用上面这种写法
深度监听第二种方法
如果需求需要使用修改前的值，那么就需要克隆一个原对象，然后进行返回回来
    
```js
// 前拷贝
watch(
    () => ({...options.value}),
    (newVal, oldVal) => {
        console.log(newVal, oldVal) // 没有克隆对象，所以是同一个引用，只会改变第一层
    }
)

// 深拷贝
watch(
    // () => 深拷贝这里可以自己写方法进行深拷贝
    () => JSON.parse(JSON.stringify(options.vlaue)),
    (newVal, oldVal) => {
        console.log(newVal, oldVal)   // 不同的引用地址，可以监听到前后数据的变化
    },
    {
        deep: treu
    }
)
```
:::


### 四、同时监听多个响应性数据
:::info 监听多个响应性数据
`watch` 还至此同时监听多个响应数据，这样的话，watch的第一个参数就需要传递一个数组, 那么第一个传的值都是一个数组了， 那么第二个返回监听前后的值也是一个数组
:::
```js
watch(
    [
        () => options.value.title,
        () => options.value.user.name
    ],
    (newVals, oldVals) => {
        console.log(newVals, oldVals)  //返回的也是一个数组
    }
)
```

### 总结：写在最后
:::info 总结
在开发工程中，需求各不相同，记住常用的就行，不熟悉的话可以订阅此文章回来复习查看
:::