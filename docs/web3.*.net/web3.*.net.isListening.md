---
title: web3.*.net.isListening
---

# web3.*.net.isListening

返回当前所连接节点旳网络监听状态。

### 调用方法

```js
web3.eth.net.isListening([callback])
web3.bzz.net.isListening([callback])
web3.shh.net.isListening([callback])
```

### 参数
无

### 返回值
一个Promise对象，当所连接的以太坊节点处于网络监听状态时返回true， 否则返回false。

### 示例代码
```js
web3.eth.isListening()
.then(console.log);
> true
```