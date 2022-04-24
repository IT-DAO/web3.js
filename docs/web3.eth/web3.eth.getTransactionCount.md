---
sidebar_position: 20
---

# web3.eth.getTransactionCount

返回指定地址发生的交易数量：web3.eth.getTransactionCount()方法返回指定地址发出的交易数量。

### 调用方法

```js
web3.eth.getTransactionCount(address [, defaultBlock] [, callback])
```

### 参数
- address：String - 要查询的账户地址
- defaultBlock：Number|String - 可选，设置该参数来覆盖web3.eth.defaultBlock属性值
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为指定地址发出的交易数量。

### 示例代码
```js
web3.eth.getTransactionCount("0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
.then(console.log);
> 1
```