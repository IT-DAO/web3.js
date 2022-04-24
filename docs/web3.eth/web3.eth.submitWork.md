---
title: web3.eth.submitWork
---

# web3.eth.submitWork

提交POW解决方案：web3.eth.submitWork()方法用来提交工作量证明（POW）解决方案。


### 调用方法

```js
web3.eth.submitWork(nonce, powHash, digest, [callback])
```

### 参数
- nonce：String 8 Bytes: 找到的nonce(64 bits)
- powHash：String 32 Bytes: 区块头pow-hash (256 bits)
- digest：String 32 Bytes: 混合摘要 (256 bits)
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

一个Promise对象，当提交的解决方案有效时解析为true，否则解析为false。

### 示例代码
```js
web3.eth.submitWork([
    "0x0000000000000001",
    "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "0xD1FE5700000000000000000000000000D1FE5700000000000000000000000000"
])
.then(console.log);
> true
```