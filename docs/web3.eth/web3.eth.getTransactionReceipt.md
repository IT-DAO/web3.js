---
title: web3.eth.getTransactionReceipt
---

# web3.eth.getTransactionReceipt

返回指定交易数据：web3.eth.getTransactionReceipt()方法返回指定交易的收据对象。 如果交易处于pending状态，则返回null。

### 调用方法

```js
web3.eth.getTransactionReceipt(hash [, callback])
```

### 参数
- hash：String - 交易的哈希值
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为交易的收据对象或者null。收据对象具有如下字段：
- status - Boolean: 成功的交易返回true，如果EVM回滚了该交易则返回false
- blockHash 32 Bytes - String: 交易所在块的哈希值
- blockNumber - Number: 交易所在块的编号
- transactionHash 32 Bytes - String: 交易的哈希值
- transactionIndex - Number: 交易在块中的索引位置
- from - String: 交易发送方的地址
- to - String: 交易接收方的地址，对于创建合约的交易，该值为null
- contractAddress - String: 对于创建合约的交易，该值为创建的合约地址，否则为null
- cumulativeGasUsed - Number: 该交易执行时所在块的gas累计总用量
- gasUsed- Number: 该交易的gas总量
- logs - Array: 该交易产生的日志对象数组

### 示例代码
```js
var receipt = web3.eth.getTransactionReceipt('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b')
.then(console.log);
> {
  "status": true,
  "transactionHash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
  "transactionIndex": 0,
  "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
  "blockNumber": 3,
  "contractAddress": "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
  "cumulativeGasUsed": 314159,
  "gasUsed": 30234,
  "logs": [{
         // logs as returned by getPastLogs, etc.
     }, ...]
}
```