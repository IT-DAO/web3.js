---
title: web3.eth.getCode
---

# web3.eth.getCode

返回指定地址的代码：web3.eth.getCode()方法返回指定以太坊地址处的代码。


### 调用方法

```js
web3.eth.defaultAccount
```

### 参数
- address：String - 要读取代码的地址
- defaultBlock：Number|String - 可选，使用该参数覆盖web3.eth.defaultBlock属性值
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为指定地址处的代码字符串。

### 示例代码
```js
web3.eth.getCode("0xd5677cf67b5aa051bb40496e68ad359eb97cfbf8")
.then(console.log);
> "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
```