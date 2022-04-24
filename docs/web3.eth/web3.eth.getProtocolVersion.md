---
title: web3.eth.getProtocolVersion
---

# web3.eth.getProtocolVersion

返回协议版本信息：返回节点的以太坊协议版本。

### 调用方法

```js
web3.eth.getProtocolVersion([callback])
```

### 返回值
一个Promise对象，其解析值为协议版本字符串。

### 示例代码
```js
web3.eth.getProtocolVersion().then(console.log);
> "63"
```