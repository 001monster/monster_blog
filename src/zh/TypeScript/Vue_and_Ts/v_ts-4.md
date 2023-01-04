---
title: （四）演示 ref 定义类型
order: 4
date: 2022-11-30
category:
    - TypeScript
tag: 
    - Ts和Vue
---

### 一、开发中 ref 定义类型
```html
<script setup lang="ts">
import { ref } from 'vue'

interface Product {
    id: number,
    title: string,
    price: number,
    isStock: boolean,
}

const priducts = ref<Product[]>([
    {
        id: 1,
        title: '牛仔裤',
        price: 200,
        isStock: true
    }        
])
</script>
```
