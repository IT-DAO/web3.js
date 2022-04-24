---
title: web3.eth.getCoinbase
---

# web3.eth.getCoinbase

返回挖矿收益账户：使用web3.eth.getCoinbase()方法获取当前接收挖矿奖励的账户地址。

### 调用方法

```js
web3.eth.getCoinbase([callback])
```

### 返回值
一个Promise对象，其解析值为接收挖矿奖励的账户地址字符串，20字节长。

### 示例代码
```js
web3.eth.getCoinbase().then(console.log);
> "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe"
```