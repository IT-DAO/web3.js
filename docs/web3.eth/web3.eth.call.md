---
title: web3.eth.call
---

# web3.eth.call

使用web3.eth.call()方法执行一个消息调用交易，消息调用交易直接在节点旳VM中执行而 不需要通过区块链的挖矿来执行。


### 调用方法

```js
web3.eth.call(callObject [, defaultBlock] [, callback])
```

### 参数
- callObject：Object - 交易对象，消息调用交易的from属性可选
- defaultBlock：Number|String - 可选，使用该参数来覆盖默认的web3.eth.defaultBlock属性值
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为调用方法的返回数据字符串

### 示例代码
```js
web3.eth.call({
    to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", // contract address
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
})
.then(console.log);
> "0x000000000000000000000000000000000000000000000000000000000000000a"
```