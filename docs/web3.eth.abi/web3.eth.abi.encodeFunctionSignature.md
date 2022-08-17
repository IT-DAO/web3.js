---
title: web3.eth.abi.encodeFunctionSignature
---

# web3.eth.abi.encodeFunctionSignature

将函数名编码为ABI签名，方法是取函数名及参数类型的sha3哈希值的头4个字节。

### 调用方法

```js
web3.eth.abi.encodeFunctionSignature(functionName);
```

### 参数
functionName - String|Object: 要编码的函数名字符串，或者函数的JSON接口对象。当 采用字符串时，必须采用function(type,type,...)的格式，例如: myFunction(uint256,uint32[],bytes10,bytes)。

### 返回值
String - 函数的ABI签名

### 示例代码
```js
// 传入JSON接口对象
web3.eth.abi.encodeFunctionSignature({
    name: 'myMethod',
    type: 'function',
    inputs: [{
        type: 'uint256',
        name: 'myNumber'
    },{
        type: 'string',
        name: 'myString'
    }]
})
> 0x24ee0097

// 传入字符串
web3.eth.abi.encodeFunctionSignature('myMethod(uint256,string)')
> '0x24ee0097'
```