---
sidebar_position: 14
---

# web3.eth.getBlock

返回指定块：web3.eth.getBlock()方法返回指定块编号或块哈希对应的块。

### 调用方法

```js
web3.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])
```

### 参数
- blockHashOrBlockNumber：String|Number - 块编号或块哈希值，或者使用以下字符串："genesis"、"latest" 或 "pending" 。
- returnTransactionObjects：Boolean - 可选，默认值为false。当设置为true时,返回块中将包括所有交易详情，否则仅返回交易哈希。
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果。

### 返回值
一个Promise对象，其解析值为满足搜索条件的块对象，具有以下字段：
- number - Number: 块编号，处于pending状态的块为null
- hash 32 Bytes - String: 块哈希，处于pending状态的块为null
- parentHash 32 Bytes - String: 父块哈希
- nonce 8 Bytes - String: 生成的proof-of-work的哈希，处于pending状态的块为null
- sha3Uncles 32 Bytes - String: 块中叔伯数据的SHA3值
- logsBloom 256 Bytes - String: 块中日志的bloom filter，处于pending状态的块为null
- transactionsRoot 32 Bytes - String: 块中的交易树根节点
- stateRoot 32 Bytes - String: 块中的最终状态树根节点
- miner - String: 接收奖励的矿工地址
- difficulty - String: 该块的难度值
- totalDifficulty - String: 截至该块的全链总难度值
- extraData - String: 块 “extra data” 字段
- size - Number: 字节为单位的块大小
- gasLimit - Number: 该块允许的最大gas值
- gasUsed - Number: 该块中所有交易使用的gas总量
- timestamp - Number: 出块的unix时间戳
- transactions - Array: 交易对象数组，或者32字节长的交易哈希值，取决于returnTransactionObjects的设置
- uncles - Array: 叔伯块哈希值数组


### 示例代码
```js
web3.eth.getBlock(3150)
.then(console.log);

> {
    "number": 3,
    "hash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
    "parentHash": "0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88",
    "nonce": "0xfb6e1a62d119228b",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "transactionsRoot": "0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee",
    "stateRoot": "0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb",
    "miner": "0x8888f1f195afa192cfee860698584c030f4c9db1",
    "difficulty": '21345678965432',
    "totalDifficulty": '324567845321',
    "size": 616,
    "extraData": "0x",
    "gasLimit": 3141592,
    "gasUsed": 21662,
    "timestamp": 1429287689,
    "transactions": [
        "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b"
    ],
    "uncles": []
}
```