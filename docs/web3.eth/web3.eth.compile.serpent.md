---
title: web3.eth.compile.serpent
---

# web3.eth.compile.serpent

web3.eth.compile.serpent()方法用来编译使用serpent语言编写的合约源代码。

### 调用方法

```js
web3.eth.compile.serpent(sourceCode [, callback])
```

### 参数
- sourceCode：String - serpent源代码
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

一个Promise对象，其解析值为编译得到的16进制字符串。

### 示例代码
```js
var source = "...";

var code = web3.eth.compile.serpent(source)
.then(console.log);
> "0x603880600c6000396000f3006001600060e060020a600035048063c6888fa114601857005b6021600435602b565b8060005260206000f35b600081600702905091905056"
```