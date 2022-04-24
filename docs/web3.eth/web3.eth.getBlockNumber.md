---
sidebar_position: 10
---

# web3.eth.getBlockNumber

返回当前块编号：web3.eth.getBlockNumber()方法返回当前块编号。

### 调用方法

```js
web3.eth.getBlockNumber([callback])
```

### 返回值
一个Promise对象，其解析值为最近一个块的编号，Number类型。


### 示例代码
```js
web3.eth.getBlockNumber().then(console.log);
> 2744
```