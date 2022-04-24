---
title: web3.eth.getWork
---

# web3.eth.getWork

返回当前挖矿工作情况：web3.eth.getWork()方法返回矿工的工作内容，包括当前块的哈希值、种子哈希值和 要满足的边界条件。


### 调用方法

```js
web3.eth.getWork([callback])
```

### 参数
callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为具有以下结构的数组：
- String 32 Bytes - 0#成员: 当前块头的pow-hash
- String 32 Bytes - 1#成员: 用于DAG算法的种子哈希 -String 32 Bytes - 2#成员: 目标边界条件, 2^256 / difficulty.

### 示例代码
```js
web3.eth.getWork()
.then(console.log);
> [
  "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
  "0x5EED00000000000000000000000000005EED0000000000000000000000000000",
  "0xd1ff1c01710000000000000000000000d1ff1c01710000000000000000000000"
]
```