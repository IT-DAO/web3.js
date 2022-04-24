---
sidebar_position: 17
---

# web3.eth.getTransaction

返回指定交易对象：web3.eth.getTransaction()方法返回具有指定哈希值的交易对象。

### 调用方法

```js
web3.eth.getTransaction(transactionHash [, callback])
```

### 参数
- transactionHash：String - 交易的哈希值
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为返回结果。

### 返回值
一个Promise对象，其解析值为具有给定哈希值的交易对象，该对象具有如下字段：
- hash 32 Bytes - String: 交易的哈希值
- nonce - Number: 交易发送方在此交易之前产生的交易数量
- blockHash 32 Bytes - String: 交易所在块的哈希值。如果交易处于pending状态，则该值为null
- blockNumber - Number: 交易所在块的编号，如果交易处于pending状态，则该值为null
- transactionIndex - Number: 交易在块中的索引位置，如果交易处于pending状态，则该值为null
- from - String: 交易发送方的地址
- to - String: 交易接收方的地址。对于创建合约的交易，该值为null
- value - String: 以wei为单位的转账金额
- gasPrice - String: 发送方承诺的gas价格，以wei为单位
- gas - Number: 发送方提供的gas用量
- input - String: 随交易发送的数据

### 示例代码
```js
web3.eth.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b§234')
.then(console.log);
> {
    "hash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
    "nonce": 2,
    "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
    "blockNumber": 3,
    "transactionIndex": 0,
    "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
    "to": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
    "value": '123450000000000000',
    "gas": 314159,
    "gasPrice": '2000000000000',
    "input": "0x57cb2fc4"
}
```