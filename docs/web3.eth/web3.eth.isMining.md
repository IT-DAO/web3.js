---
sidebar_position: 6
---

# web3.eth.defaultAccount

检查节点是否在挖矿：调用web3.eth.isMining()方法来检查节点是否在进行挖矿。

### 调用方法

```js
web3.eth.isMining([callback])
```

### 返回值
一个Promise对象，挖矿时其解析值为true，否则为false。

### 示例代码
```js
web3.eth.isMining().then(console.log);
> true
```