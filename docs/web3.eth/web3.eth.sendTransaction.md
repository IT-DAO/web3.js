---
sidebar_position: 21
---

# web3.eth.defaultAccount

发送交易：web3.eth.sendTransaction()方法向以太坊网络提交一个交易。

### 调用方法

```js
web3.eth.sendTransaction(transactionObject [, callback])
```

### 参数
- transactionObject：Object - 要发送的交易对象，包含以下字段：
    - from - String|Number: 交易发送方账户地址，不设置该字段的话，则使用web3.eth.defaultAccount属性值。可设置为一个地址或本地钱包web3.eth.accounts.wallet中的索引序号
    - to - String: 可选，消息的目标地址，对于合约创建交易该字段为null
    - value - Number|String|BN|BigNumber: (optional) The value transferred for the transaction in wei, also the endowment if it’s a contract-creation transaction.
    - gas - Number: 可选，默认值：待定，用于交易的gas总量，未用完的gas会退还
    - gasPrice - Number|String|BN|BigNumber: 可选，该交易的gas价格，单位为wei，默认值为web3.eth.gasPrice属性值
    - data - String: 可选，可以是包含合约方法数据的ABI字符串，或者是合约创建交易中的初始化代码
    - nonce - Number: 可选，使用该字段覆盖使用相同nonce值的挂起交易
- callback - Function: 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

web3.eth.sendTransaction()方法的返回值是32字节长的交易哈希值。
PromiEvent: 一个整合事件发生器的Promise对象，将在收到交易收据后得到解析。
- "transactionHash" 返回String: 在交易发出并得到有效的交易哈希值后立刻触发
- "receipt" 返回Object: 当交易收据有效后立刻触发
- "confirmation" 返回Number, Object: 在每次确认后立刻触发，最多12次确认。确认编号为第一个参数，收据为第二个参数。从0号确认开始触发
- "error" 返回Error对象: 在发送交易的过程中如果出现错误则立刻触发。如果是out of gas错误，则传入第二个参数为交易收据

### 示例代码
```js
// compiled solidity source code using https://remix.ethereum.org
var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";

// 使用回调函数
web3.eth.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    data: code // deploying a contracrt
}, function(error, hash){
    ...
});

// 使用promise
web3.eth.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    value: '1000000000000000'
})
.then(function(receipt){
    ...
});


// 使用事件发生器
web3.eth.sendTransaction({
    from: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe',
    to: '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe',
    value: '1000000000000000'
})
.on('transactionHash', function(hash){
    ...
})
.on('receipt', function(receipt){
    ...
})
.on('confirmation', function(confirmationNumber, receipt){ ... })
.on('error', console.error); // If a out of gas error, the second parameter is the receipt.
```