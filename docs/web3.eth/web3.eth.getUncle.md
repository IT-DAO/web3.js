---
title: web3.eth.getUncle
---

# web3.eth.getUncle

返回指定叔伯块：web3.eth.getUncle()方法返回指定索引位置的叔伯块。

### 调用方法

```js
web3.eth.getUncle(blockHashOrBlockNumber, uncleIndex [, returnTransactionObjects] [, callback])
```

### 参数
- blockHashOrBlockNumber：String|Number - 块编号或块的哈希值，或者使用以下字符串："genesis"、"latest" 或"pending"来指定块。
- uncleIndex：Number - 叔伯块的索引位置。
- returnTransactionObjects：Boolean - 可选，默认值为false。如果设置为true，那么返回的块信息中将包含全部交易的完整信息，否则仅 包含交易的哈希值。
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果。

### 返回值
一个Promise对象，其解析值为叔伯块对象，具体内容参见web3.eth.getBlock()

**注意：叔伯块中不包含单独的交易信息。**

### 示例代码
```js
web3.eth.getUncle(500, 0)
.then(console.log);
> // 块对象字段说明参见 web3.eth.getBlock
```