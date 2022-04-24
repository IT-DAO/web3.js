---
sidebar_position: 4
---

# web3.eth.defaultAccount

检查节点是否同步：web3.eth.isSyncing()方法用来检查节点当前是否已经与网络同步。

### 调用方法

```js
web3.eth.isSyncing([callback])
```

### 返回值

一个Promise对象，其解析值为Object或Boolean。如果节点尚未与网络同步， 则返回false，否则返回一个同步对象，具有以下属性：
- startingBlock - Number: 同步起始块编号
- currentBlock - Number: 当前已同步块编号
- highestBlock - Number: 预估的目标同步块编号
- knownStates - Number: 预估的要下载的状态
- pulledStates - Number: 已经下载的状态

### 示例代码
```js
web3.eth.isSyncing().then(console.log);
> {
    startingBlock: 100,
    currentBlock: 312,
    highestBlock: 512,
    knownStates: 234566,
    pulledStates: 123455
}
```