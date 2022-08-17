---
title: web3.eth.abi.encodeFunctionCall
---

# web3.eth.abi.encodeFunctionCall

将函数调用根据其JSON接口对象和给定的参数进行ABI编码。

### 调用方法

```js
web3.eth.abi.encodeFunctionCall(jsonInterface, parameters);
```

### 参数
- jsonInterface - Object: 函数的JSON接口对象
- parameters - Array: 参数值数组

### 返回值
String - ABI编码结果，包含函数签名和参数

### 示例代码
```js
web3.eth.abi.encodeFunctionCall({
    name: 'myMethod',
    type: 'function',
    inputs: [{
        type: 'uint256',
        name: 'myNumber'
    },{
        type: 'string',
        name: 'myString'
    }]
}, ['2345675643', 'Hello!%']);
> "0x24ee0097000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000"
```