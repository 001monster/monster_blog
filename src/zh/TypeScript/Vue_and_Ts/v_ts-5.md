---
title: （五）定义 props 类型
order: 5
date: 2022-11-30
category:
    - TypeScript
---

### 一、定义 props 类型

1. 第一种方式无法自动推断出类型
```html
<script setup lang="ts">
defineProps(['id', 'title', 'price', 'isStock'])
</script>
```

2. 使用 `JavaScript` 的方式定义（不推荐）
```html
<script setup lang="ts">
defineProps({
    title: {
        type: String
    }
})
</script>
```

3. 使用 `TypeScript` 的方式定义
```html
<script setup lang="ts">
// 使用 interface 定义
interface Product {
    id: number,
    title: string,
    price: number,
    isStock: boolean,
}

// 使用泛型定义
defineProps<Product>()
</script>
```

### 二、使用 `withDefaults`，给 `props` 定义默认值
```html
<script setup lang="ts">
// 使用 interface 定义
interface Product {
    id: number,
    title: string,
    price: number,
    isStock: boolean,
}

// withDefaults 定义默认值
withDefaults(defineProps<Product>(), {
    title: '默认标题',
    price: 100,
    isStock: true,
})

</script>
```

### 总结-写在最后
:::info 说明
`vue` 不支持使用外部导入进来的类型限制，比如通过 `import` 这种导入进来的不行，必须定义在内部
:::