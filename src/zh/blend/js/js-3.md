---
title: （三）请求失败重发
date: 2022-11-02
category: 
    - 网络请求
article:
    - fetch
---

#### 请求失败重新发送请求
:::info 说明
有时候网络不好导致请求失败不能一次失败就给请求判定死刑了，我们还要给他机会，下面手写封装一个简单的重发函数，灰常的实用
:::

- 源代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>网络请求重发</title>
</head>

<body>
</body>
<script>
    /**
     * 发出请求，返回Promise
     * @param { string } url 请求地址
     * @param { number } maxCount 最大重试次数
    */

    // 请求重发函数
    function sendRequest(url, maxCount = 5) {
        // 如果请求成功就不管直接返回，如果失败就使用递归进行重新发送
        return fetch(url)
		.catch((err) => 
		maxCount <= 0 
		? Promise.reject(err) 
		: sendRequest(url, maxCount - 1))
    }

    // 调用请求重发方法
    sendRequest('https://xxx.com', 4)
	.then((resp) => {
        console.log(resp.json())
    }).catch((err) => {
        console.log(err)
    })
</script>

</html>
```

- 请求成功

![](https://image.zswei.xyz/img/202211141436169.png)

-请求失败

![](https://image.zswei.xyz/img/202211141437577.png)
