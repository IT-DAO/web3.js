---
title: web3.eth.abi.decodeParameter
---

# web3.eth.abi.decodeParameter

将ABI编码过的参数解码为其JavaScript形式。

### 调用方法

```js
web3.eth.abi.decodeParameter(type, hexString);
```

### 参数
- type - String: 参数类型
- hexString - String: 要解码的ABI字节码

### 返回值
Mixed - 解码结果

### 示例代码
```js
web3.eth.abi.decodeParameter('uint256', '0x0000000000000000000000000000000000000000000000000000000000000010');
> "16"

web3.eth.abi.decodeParameter('string', '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000848656c6c6f212521000000000000000000000000000000000000000000000000');
> "Hello!%!"
```