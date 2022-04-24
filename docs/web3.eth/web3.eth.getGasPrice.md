---
title: web3.eth.getGasPrice
---

# web3.eth.getGasPrice

web3.eth.getGasPrice()方法用来获取当前gas价格，该价格由最近的若干块 的gas价格中值决定。

### 调用方法

```js
web3.eth.getGasPrice([callback])
```

### 返回值
一个Promise对象，其解析值为表示当前gas价格的字符串，单位为wei。


### 示例代码
```js
web3.eth.getGasPrice().then(console.log);
> "20000000000"
```