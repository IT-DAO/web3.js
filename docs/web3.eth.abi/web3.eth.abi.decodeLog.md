---
title: web3.eth.abi.decodeLog
---

# web3.eth.abi.decodeLog

对ABI编码后的日志数据和索引的主题数据进行解码。

### 调用方法

```js
web3.eth.abi.decodeLog(inputs, hexString, topics);
```

### 参数
- inputs - Object: A JSON interface inputs array. See the solidity documentation for a list of types.
- hexString - String: The ABI byte code in the data field of a log.
- topics - Array: An array with the index parameter topics of the log, without the topic[0] if its a non-anonymous event, otherwise with topic[0].

### 返回值
Object - 包含解码后参数的对象

### 示例代码
```js
web3.eth.abi.decodeLog([{
    type: 'string',
    name: 'myString'
},{
    type: 'uint256',
    name: 'myNumber',
    indexed: true
},{
    type: 'uint8',
    name: 'mySmallNumber',
    indexed: true
}],
'0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000748656c6c6f252100000000000000000000000000000000000000000000000000',
['0x000000000000000000000000000000000000000000000000000000000000f310', '0x0000000000000000000000000000000000000000000000000000000000000010']);
> Result {
    '0': 'Hello%!',
    '1': '62224',
    '2': '16',
    myString: 'Hello%!',
    myNumber: '62224',
    mySmallNumber: '16'
}
```