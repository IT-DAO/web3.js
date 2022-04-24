---
sidebar_position: 7
---

# web3.eth.getHashrate

返回节点的哈希计算速度：web3.eth.getHashrate()方法用来读取当前挖矿节点的每秒钟哈希值算出数量。

### 调用方法

```js
web3.eth.getHashrate([callback])
```

### 返回值
一个Promise对象，其解析值为Number类型，表示每秒哈希值算出数量。

### 示例代码
```js
web3.eth.getHashrate().then(console.log);
> 493736
```