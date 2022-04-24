---
title: web3.eth.getPastLogs
---

# web3.eth.getPastLogs

返回历史日志：web3.eth.getPastLogs()方法根据指定的选项返回历史日志。

### 调用方法

```js
web3.eth.getPastLogs(options [, callback])
```

### 参数
- options：Object - 过滤器对象，包含如下字段：
    - fromBlock - Number|String: The number of the earliest block ("latest" may be given to mean the most recent and "pending" currently mining, block). By default "latest".
    - toBlock - Number|String: The number of the latest block ("latest" may be given to mean the most recent and "pending" currently mining, block). By default "latest".
    - address - String|Array: An address or a list of addresses to only get logs from particular account(s).
    - topics - Array: An array of values which must each appear in the log entries. The order is important, if you want to leave topics out use null, e.g. [null, '0x12...']. You can also pass an array for each topic with - options for that topic e.g. [null, ['option1', 'option2']]

### 返回值

一个Promise对象，其解析值为日志对象数组。
数组中的事件对象结构如下：
- address - String: 事件发生源地址
- data - String: 包含未索引的日志参数
- topics - Array: 包含最多4个32字节主题的数组，主题1-3包含日志的索引参数
- logIndex - Number: 事件在块中的索引位置
- transactionIndex - Number: 包含事件的交易的索引位置
- transactionHash 32 Bytes - String: 包含事件的交易的哈希值
- blockHash 32 Bytes - String: 包含事件的块的哈希值，如果处于pending状态，则为null
- blockNumber - Number: 包含事件的块编号，处于pending状态时该字段为null

### 示例代码
```js
web3.eth.getPastLogs({
    address: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
    topics: ["0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"]
})
.then(console.log);

> [{
    data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
    topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
    logIndex: 0,
    transactionIndex: 0,
    transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
    blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
    blockNumber: 1234,
    address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
},{...}]
```