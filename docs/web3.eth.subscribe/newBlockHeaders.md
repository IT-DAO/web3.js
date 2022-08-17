---
title: web3.eth.subscribe("newBlockHeaders")
---

# web3.eth.subscribe("newBlockHeaders")

使用newBlockHeaders参数订阅新的区块头生成事件。可用做检查区块链上变化的计时器。

### 调用方法

```js
web3.eth.subscribe('newBlockHeaders' [, callback]);
```

### 参数
- type：String - "newBlockHeaders", 订阅类型
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

EventEmitter: 订阅对象实例，是一个事件发生器，定义有如下事件：
- "data" 返回 Object: 当收到新的区块头时触发
- "error" 返回 Object: 当订阅中出现错误时触发

返回的区块头对象结构如下：
- number - Number: 区块编号，对于pending的块该值为null
- hash 32 Bytes - String: 块的哈希值，挂起的块该值为null
- parentHash 32 Bytes - String: 父区块的哈希值
- nonce 8 Bytes - String: 生成的proof-of-work的哈希值。挂起块该值为null、
- sha3Uncles 32 Bytes - String: 块中叔伯数据的SHA3值
- logsBloom 256 Bytes - String: 块日志的bloom filter，块处于挂起状态时该值为null
- transactionsRoot 32 Bytes - String: 块交易树的根节点
- stateRoot 32 Bytes - String: 块状态树的根节点
- receiptRoot 32 Bytes - String: 收据根节点
- miner - String: 接收挖矿奖励的矿工地址
- extraData - String: 区块的额外数据字段
- gasLimit - Number: 该块允许的最大gas用量
- gasUsed - Number: 该块中所有交易使用的gas总用量
- timestamp - Number: 出块的unix时间戳

通知返回值：
- Object|Null - 如果订阅失败，则该参数为错误对象，否则为null
- Object - 区块头对象

### 示例代码
```js
const subscription = web3.eth.subscribe('newBlockHeaders', function(error, result){
    if (error)
        console.log(error);
})
.on("data", function(blockHeader){
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```