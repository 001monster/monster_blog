---
title: （二）初识golang
category:
    - 前端面试题
tag: 
    - js面试题
order: 2

---

### 🍀一、输出hello
1. 文件结构

![](https://image.zswei.xyz/img/202304261727379.png)

```go 
// user
package user

func Hello() string {
	return "hello"
}

```

- 程序入口文件
```go
// 程序的入口哦
package main

// 导包
import (
	"fmt"
	"my_pro/user"
)

func main() {
	s := user.Hello()
	fmt.Printf("s: %v\n", s)
}

```

### 🍀三、定义变量
1. 完整定义
```go
// 1. 定义并赋值
var name string = "张三"

// 2. 定义不赋值
var name string
name = "张三"
```

2. 短变量定义（短类型只适用于局部变量）
```go
// 1. 定义并赋值
name := "张三"
```

3. 隐式推到
```go
var name = "张三"
```

### 🍀二、定义常量
```go
// 1. 单个定义
const RI = 3.14

// 2. 多个定义
const (
    a = 100
    b = 200
)

// 3. 多个定义方法二
const a, b = 200, 300
```

### 🍀四、可被编译器修改的常量 `iota`
`iota` 默认从 0 开始，每次调用加1，遇到 `const` 关键字时被重置为 0
```go
const (
    a1 = iota   // 0
    a2 = iota   // 1
    a3 = iota   // 2
    a4 = iota   // 3
    a5 = iota   // 4
    a6 = iota   // 5
)
```

### 🍀五、golang 数据类型
1. 布尔型 `true` 或 `false`

2. 数字类型
    - int 
    - float32
    - float46

3. 字符串类型

4. 派生类型
    - 指针类型(&a)
    - 数组类型(array)
    - 结构化类型(struct)
    - 函数类型(func)
    - 切片类型
    - 接口类型(interface)
    - Map 类型
    - Channel 类型


### 🍀六、go语言占位符
- 一般：
%v 相应值的默认格式。在打印结构体时，“加号”标记（%+v）会添加字段名
%#v 相应值的Go语法表示
%T 相应值的类型的Go语法表示
%% 字面上的百分号，并非值的占位符

- 布尔：
%t 单词 true 或 false。

- 整数：
%b 二进制表示
%c 相应Unicode码点所表示的字符
%d 十进制表示
%o 八进制表示
%q 单引号围绕的字符字面值，由Go语法安全地转义
%x 十六进制表示，字母形式为小写 a-f
%X 十六进制表示，字母形式为大写 A-F
%U Unicode格式：U+1234，等同于 "U+%04X"

- 浮点数及其复合构成：
%b 无小数部分的，指数为二的幂的科学计数法，与 strconv.FormatFloat的 'b' 转换格式一致。例如 -123456p-78
%e 科学计数法，例如 -1234.456e+78
%E 科学计数法，例如 -1234.456E+78
%f 有小数点而无指数，例如 123.456
%g 根据情况选择 %e 或 %f 以产生更紧凑的（无末尾的0）输出
%G 根据情况选择 %E 或 %f 以产生更紧凑的（无末尾的0）输出

- 字符串与字节切片：
%s 字符串或切片的无解译字节
%q 双引号围绕的字符串，由Go语法安全地转义
%x 十六进制，小写字母，每字节两个字符
%X 十六进制，大写字母，每字节两个字符

- 指针：
%p 十六进制表示，前缀 0x