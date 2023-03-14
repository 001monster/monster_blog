---
title: （一）在脚手架中使用axios
date: 2023-03-13
category:
    - react之Ajax
tag: 
    - react
order: 1
---


### 一、在脚手架中使用 `axios`
1. 安装 `axios`
:::tabs
@tab:active npm 
```sh
npm i axios
```

@tab yarn
```sh
yarn add axios
```
:::

### 二、同源策略跨域问题
在请求数据的过程中，可能回出现请求跨域的问题，导致请求失败的情况，出现这种情况就是被同源策略限制了，要解决这类问题需要配置代理。
```js
class App extends Component {
  getStudentData = () => {
    axios.get('http://q2.qlogo.cn/headimg_dl?dst_uin=2966211270&spec=100').then(
      response => {
        console.log('ZSW-成功了', response);
      },
      error => {
        console.log('ZSW-失败了', error);
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取qq头像</button>
      </div>
    )
  }
}
```
没有配置代理请求别人的服务器出现跨域问题

![](https://image.zswei.xyz/img/202303141516318.png)



### 三、 `react` 配置请求代理,解决跨域问题
:::tabs
@tab:active 方式一  
直接在 `package.json` 里面配置,这种方式是最简单的方式,要给那个服务器的端口发,就配置成目标服务器的端口,就可以解决跨域
注意: 修改了 `package.json` 配置文件需要重新启动脚手架
```json
{
    // ...,
    "proxy": "需要请求的跨域地址与目标端口号",
    // 如下, 结尾不用写斜杠结尾
    "proxy": "http://q2.qlogo.cn"
}
```
请求代码
```js
class App extends Component {
  getStudentData = () => {
    // axios.get('脚手架开启的地址/headimg_dl?dst_uin=2966211270&spec=100')
    axios.get('http://localhost:3000/headimg_dl?dst_uin=2966211270&spec=100').then(
      response => {
        console.log('ZSW-成功了', response);
      },
      error => {
        console.log('ZSW-失败了', error);
      }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点击获取qq头像</button>
      </div>
    )
  }
}
```
注意:配置了代理以后请求的域名就是脚手架启动的地址,我的教授级启动的地址是:`http://localhost:3000` 那么代理过后的请求地址就是 `http://localhost:3000/xx/xx`

![](https://image.zswei.xyz/img/202303141541453.png)

![](https://image.zswei.xyz/img/202303141542475.png)


@tab yarn 方式二
- 方式一的配置方式虽然简单,但是他只能配置一个代理,不能同时配置多个代理
```js
class App extends Component {
    // 获取qq头像
    getStudentData = () => {
        axios.get('http://q2.qlogo.cn/headimg_dl?dst_uin=2966211270&spec=100').then(
        response => {
            console.log('ZSW-成功了', response);
        },
        error => {
            console.log('ZSW-失败了', error);
        }
        )
    }

    // 获取其他服务器信息
    getOtherServeInfo = () => {
        axios.get('http://www.boredapi.com/api/activity/').then(
        response => {
            console.log('ZSW-成功了', response);
        },
        error => {
            console.log('ZSW-失败了', error);
        }
        )
    }

    render() {
        return (
        <div>
            <button onClick={this.getStudentData}>点击获取qq头像</button>
            <button onClick={this.getOtherServeInfo}>获取其他服务器信息</button>
        </div>
        )
    }
}
```

- 像上面这种情况信息来自于两个不同的服务器都跨域了,如果使用方式一的跨域配置方式,就没办法完成,下面来用第二种代理方式来完成

1. 在 `src` 下面创建一个名为 `setupProxy.js` 的文件,需要注意的是这个文件里面使用的是 `CommonJs` 的语法,因为这个文件是给 `webpack` 使用的

```js
// 引入 react 配置代理的中间件
const proxy = require('http-proxy-middleware')

// 导出一个方法, 方法接收一个参数 app
module.export = function(app) {
    app.use(
        // 使用中间件配置代理,只要以后请求路劲里面带 /api1 的都会走代理
        // http-proxy-middleware高版本（2以上）proxy.createProxyMiddleware()
        // http-proxy-middleware低版本（2以下）proxy()
        proxy.createProxyMiddleware('/api1', {
            // 代理的服务器和端口
            target: 'http://localhost:xxxx',
            // 让服务器知道请求是谁发的,默认false,下面将会介绍true | false 两者的区别
            changeOrigin: true,
            // 把代理的前缀给替换掉
            pathRewrite: {'^/api1': ''}
        }),
        proxy.createProxyMiddleware('/api2', {
            ...
        })
    )
}
```
2. 配置了如上代理使用也会出现新的变化
```js
class App extends Component {
    // 获取qq头像
    getStudentData = () => {
        // 需要在端口后面加上前缀
        axios.get('http://localhost:3000/api1/headimg_dl?dst_uin=2966211270&spec=100').then(
        ...
        )
    }

    // 获取其他服务器信息
    getOtherServeInfo = () => {
        axios.get('http://localhost:3000/api2/api/activity/').then(
        ...
        )
    }
    ...
}
```
:::

### 三、解析 `proxy` 各项参数
```js
// '/api1' 遇见/api1前缀的请求,就会触发该代理配置
proxy.createProxyMiddleware('/api1', {
            // 需要代理的服务器和端口号
            target: 'http://localhost:xxxx',
            // 控制服务器收到的请求头种host字段的值
            // 如果为 true 的时候,服务器所接收到的请求头是代理过后的请求头(欺骗服务器)
            // 如果为 false 的时候,服务器所接收到的就是原来的请求头
            changeOrigin: true,
            // 重写请求路径发送到服务器的路径需要把他替换掉,不然服务器将找不到这个路径
            pathRewrite: {'^/api1': ''}
        })
```