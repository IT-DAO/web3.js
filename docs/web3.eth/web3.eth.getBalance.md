---
title: web3.eth.getBalance
---

# web3.eth.getBalance

返回指定账户余额：web3.eth.getBalance()方法用来获取指定块中特定账户地址的余额。

### 调用方法

```js
web3.eth.getBalance(address [, defaultBlock] [, callback])
```

### 参数
- address：String - 要检查余额的账户地址
- defaultBlock：Number|String - 可选，使用该参数覆盖web3.eth.defaultBlock属性值
- callback：Function - 可选的回调函数，该回调的第一个参数为error对象，第二个参数为结果值

### 返回值
一个Promise对象，其解析值为指定账户地址的余额字符串，以wei为单位。

### 示例代码
```js
web3.eth.getBalance("0x407d73d8a49eeb85d32cf465507dd71d507100c1")
.then(console.log);
> "1000000000000"
```