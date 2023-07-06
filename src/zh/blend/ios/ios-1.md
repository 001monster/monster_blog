---
title: （一）ios证书生成
date: 2022-12-02
category:
    - ios
tag:
    - 客户端
    - ios
order: 1
---

## 准备事项
- 苹果手机(平板)一个
- ios开发者账号一个
- [ios证书制作](https://app.121xuexi.com/certificates.htm)

## 生成开发者证书
:::info ios
因 `ios` 系统封闭原因使用 `hbuilderx` 开发需要有证书才可以运行到手机上进行真机调试
:::

### 1. 打开苹果开发者官网
[开发者官网](https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/)

![](https://image.zswei.xyz/img/202307060926997.png)

### 2. 点击这个选项打开开发者配置
:::info 开发者账号
需要注册账号并花钱加入成为开发者才会显示这个选项，一般公司会提供苹果开发者账号的
:::

![](https://image.zswei.xyz/img/202307060928406.png)

### 3. 先配置证书Certificates

![](https://image.zswei.xyz/img/202307060929995.png)

![](https://image.zswei.xyz/img/202307060929964.png)

### 4.这里需要上传一个CSR文件

![](https://image.zswei.xyz/img/202307060930982.png)

### 5.生成CSR文件
:::info CSR
需要去这个`[ios证书制作]`生成，或者通过别的渠道生成CSR文件
:::

![](https://image.zswei.xyz/img/202307060932537.png)

![](https://image.zswei.xyz/img/202307060932665.png)

![](https://image.zswei.xyz/img/202307060932783.png)

### 6. 去上传刚刚下载的CSR文件

![](https://image.zswei.xyz/img/202307060934480.png)


### 7. 下载苹果官网Certificates生成的CER文件
:::info 文件
需要到刚刚那个网站生成uniapp打包需要的私钥证书p12文件
:::

![](https://image.zswei.xyz/img/202307060935987.png)

### 8.生成uniapp打包需要的私钥证书p12文件
:::info 
上传苹果开发者官网Certificates生成的CER文件
:::

![](https://image.zswei.xyz/img/202307060936842.png)

![](https://image.zswei.xyz/img/202307060936665.png)

### 9.添加标识符Identifiers
:::info 
对应uniapp IOS打包的Bundle ID (AppID)选项
:::

![](https://image.zswei.xyz/img/202307060937925.png)

![](https://image.zswei.xyz/img/202307060937242.png)

![](https://image.zswei.xyz/img/202307060938190.png)

![](https://image.zswei.xyz/img/202307060938195.png)

### 10.添加安装测试app的苹果手机的UDID
1.下载爱思助手连接需要安装测试app的苹果手机获取（后面安装app也需要这个应用）
2. [蒲公英](https://www.pgyer.com/tools/udid)
3. [香蕉云编](https://www.yunedit.com/udid)

![](https://image.zswei.xyz/img/202307060939538.png)

### 11.获取证书profile文件

![](https://image.zswei.xyz/img/202307060940394.png)

![](https://image.zswei.xyz/img/202307060941076.png)

:::info 
选择我们添加的Identifiers标识
:::

![](https://image.zswei.xyz/img/202307060941582.png)

:::info 
选择我们添加的证书Certificates
:::

![](https://image.zswei.xyz/img/202307060941720.png)

:::info 
关联我们测试的苹果手机UDID设备
:::

![](https://image.zswei.xyz/img/202307060942301.png)

:::info 
设置配置profile文件名称，然后生成profile文件
:::

https://img-blog.csdnimg.cn/5180ad423a4c4b80a363975901ef4e6d.png#pic_center

### 12.打包IOS应用

![](https://image.zswei.xyz/img/202307060944392.png)

:::info 
选择生成的profile文件
:::

![](https://image.zswei.xyz/img/202307060945818.png)

:::info 
下载p12文件，添加到私钥证书
:::

![](https://image.zswei.xyz/img/202307060945313.png)

:::info 
填写证书私钥密码，之前生成P12证书步骤有写
:::

![](https://image.zswei.xyz/img/202307060946074.png)

### 13.打包【葵花宝典练成】

![](https://image.zswei.xyz/img/202307060947686.png)


### 总结
- 开发版本和正式版本打包都是大同小异的，只是添加标识符`Identifiers` 不一样，思路变通一下就可以了

[源地址](https://app.121xuexi.com/certificates.htm)