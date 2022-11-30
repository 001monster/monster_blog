---
title: （三）Ref 类型定义
order: 3
date: 2022-11-30
category:
    - TypeScript
---

### 一、定义 `ref` 类型的三种方式

1. 自动推断
```html
<script setup>
import { ref } from 'vue'

const num = ref(0)
</script>
```

![](https://image.zswei.xyz/img/202211301010826.png)


2. 显示定义类型(需要导入 Ref)
```html
<script setup>
import { ref, Ref } from 'vue'

const str: Ref<string> = ref('str')
</script>
```

3. 直接在 `ref` 后面加上泛型
```html
<script setup>
import { ref } from 'vue'

const bool = ref<boolean>(true)
</script>
```

### 总结-写在最后
:::info 说明
`ref` 和 `reactive` 定义类型是一样的
:::