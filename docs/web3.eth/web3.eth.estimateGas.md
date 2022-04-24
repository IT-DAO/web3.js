---
sidebar_position: 26
---

# web3.eth.estimateGas

估算gas用量：web3.eth.estimateGas()方法通过执行一个消息调用来估算交易的gas用量。

### 调用方法

```js
web3.eth.estimateGas(callObject [, callback])
```

### 参数
- callObject：Object - 交易对象，其from属性可选
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
一个Promise对象，其解析值为模拟调用的gas用量。

### 示例代码
```js
web3.eth.estimateGas({
    to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
})
.then(console.log);
> "0x0000000000000000000000000000000000000000000000000000000000000015"
```