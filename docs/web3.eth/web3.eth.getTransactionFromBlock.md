---
title: web3.eth.getTransactionFromBlock
---

# web3.eth.getTransactionFromBlock

返回块中指定交易对象：web3.eth.getTransactionFromBlock()方法返回指定块中特定索引号的交易对象。

### 调用方法

```js
getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])
```

### 参数
hashStringOrNumber：String - 块编号或块的哈希值，或者使用以下字符串："genesis、"latest" 或 "pending" 来指定块
indexNumber：Number - 交易索引位置
callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果交易对象

### 返回值
一个Promise对象，其解析值为交易对象，该对象具体内容描述参见web3.eth.getTransaction()

### 示例代码
```js
var transaction = web3.eth.getTransactionFromBlock('0x4534534534', 2)
.then(console.log);
> // see web3.eth.getTransaction
```