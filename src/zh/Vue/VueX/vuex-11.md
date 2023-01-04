---
title: （十一）vuex 配置日志插件
order: 11
date: 2022-11-27
category:
    - VueX 状态管理
tag: 
    - Vue和Vuex
---

![](https://image.zswei.xyz/img/202211271329347.png)

#### 一、配置日志文件
:::info 说明
当我们没有配置 `createLogger` 插件函数的时候，他使用的是默认的打印日志的方式
:::
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers()],
  ...
}
```

1. 打印的时候默认展开日志
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 打印的时候直接展开对象
    collapsed: false
  })],
  ...
}
```

2. 不打印 `actions` 日志
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 不打印 actions 日志
    logActions: false
  })],
  ...
}
```

3. 不打印 `mutations` 日志
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 不打印 mutations 日志
    logMutations: false
  })],
  ...
}
```

4. 过滤要打印的 `mutations` 接收三个参数 `mutations`: 他本身的信息  `stateBefore`：修改前的状态 `stateAfter`：修改后的状态
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 过滤打印 mutation
    filter(mutation, stateBefore, stateAfter) {
      // mutations 是一个对象 包含 type mutations的名字 payload
      console.log(mutation)
      // 只打印 addUsters 的日志 返回 true 就打印，返回 false 就不打印
      return mutation.type === 'adduser'
    }
  })],
  ...
}
```

5. 过滤 `actions` 接收两个参数，`actin` `state` 两个状态
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 过滤 actions 返回 true 打印，返回 false 不打印
    actionFilter(action, state) {
      console.log(action)
      return action.type === 'adduser'
    }
  })],
  ...
}
```

6. 过滤要打印的状态 `state`
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 只打印某一个状态
    transformer(state) {
      return state.users.list
    }
  })],
  ...
}
```

7. 控制 `mutation` 日志打印格式
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 控制打印格式
    mutationTransformer(mutation) {
      return `触发了 ${mutation.type}，payload 为 ${JSON.stringify(
        mutation.payload
      )}`;
    }
  })],
  ...
}
```

8. 控制 `actions` 日志的格式
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 控制打印格式
    actionTransformer(mutation) {
      return `触发了 ${action.type}，payload 为 ${JSON.stringify(
        action.payload
      )}`;
    }
  })],
  ...
}
```

9. 自定义日志打印
```js
import { createStore, createLogger } from 'vuex'

export const store = {
  plugins: [createLoggers({

    // 控制打印格式
    logger: {
      log: (log, styles, details) => console.error(log, styles, details)
      // details，例如触发的 action、mutation 等信息，和状态的变化
    }
  })],
  ...
}
```