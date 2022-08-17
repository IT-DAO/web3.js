---
title: web3.eth.abi.encodeEventSignature
---

# web3.eth.abi.encodeEventSignature

将事件名编码为ABI签名，方法是取事件名及其参数类型的sha3哈希值。

### 调用方法

```js
web3.eth.abi.encodeEventSignature(eventName);
```

### 参数
eventName - String|Object: 要编码的事件名字符串，或者事件的JSON接口对象。如果采用 字符串参数，则需要符合格式event(type,type,...) ，例如myEvent(uint256,uint32[],bytes10,bytes)。

### 返回值
String - 事件的ABI签名

### 示例代码
```js
// 使用字符串参数
web3.eth.abi.encodeEventSignature('myEvent(uint256,bytes32)')
> 0xf2eeb729e636a8cb783be044acf6b7b1e2c5863735b60d6daae84c366ee87d97

// 使用json接口对象
web3.eth.abi.encodeEventSignature({
    name: 'myEvent',
    type: 'event',
    inputs: [{
        type: 'uint256',
        name: 'myNumber'
    },{
        type: 'bytes32',
        name: 'myBytes'
    }]
})
> 0xf2eeb729e636a8cb783be044acf6b7b1e2c5863735b60d6daae84c366ee87d97
```