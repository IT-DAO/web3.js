---
title: web3.*.net.getPeerCount
---

# web3.*.net.getPeerCount

返回当前节点上已经连接的其他节点数量。

### 调用方法

```js
web3.eth.net.getPeerCount([callback])
web3.bzz.net.getPeerCount([callback])
web3.shh.net.getPeerCount([callback])
```

### 参数
无

### 返回值
一个Promise对象，其解析值为所连接其他节点旳数量。

### 示例代码
```js
web3.eth.getPeerCount()
.then(console.log);
> 25
```