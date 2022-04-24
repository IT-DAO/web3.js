---
sidebar_position: 2
---

# web3.eth.defaultBlock

默认块：web3.eth.defaultBlock属性记录默认块，默认值为latest。该属性值用于以下方法调用：
- web3.eth.getBalance()
- web3.eth.getCode()
- web3.eth.getTransactionCount()
- web3.eth.getStorageAt()
- web3.eth.call()
- new web3.eth.Contract() -> myContract.methods.myMethod().call()

在以上方法中，可以传入defaultBlock参数来覆盖该属性值。


### 调用方法

```js
web3.eth.defaultBlock
```

### 属性

默认块参数的值为以下列表中之一：
- Number: 一个具体的块编号
- "genesis" - String: 创世块
- "latest" - String: 最后一个块，即当前的链头块
- "pending" - String: 当前挖掘中的块，其中包含挂起的交易
默认值为"latest"

### 示例代码
```js
web3.eth.defaultBlock;
> "latest"

// 设置默认块属性
web3.eth.defaultBlock = 231;
```