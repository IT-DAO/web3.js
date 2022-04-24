---
title: web3.eth.getBlockTransactionCount
---

# web3.eth.getBlockTransactionCount

返回指定块中的交易数量：web3.eth.getBlockTransactionCount()方法返回指定块中的交易数量。

### 调用方法

```js
web3.eth.getBlockTransactionCount(blockHashOrBlockNumber [, callback])
```

### 参数
- blockHashOrBlockNumber：String|Number - 块编号或块的哈希值，或者使用以下字符串："genesis"、"latest" 或 "pending" 来指定块
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为执行结果。

### 返回值
一个Promise对象，其解析值为指定块中的交易数量，Number类型。

### 示例代码
```js
web3.eth.getBlockTransactionCount("0x407d73d8a49eeb85d32cf465507dd71d507100c1")
.then(console.log);
> 1
```