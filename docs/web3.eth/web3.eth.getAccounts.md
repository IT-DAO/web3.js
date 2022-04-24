---
sidebar_position: 9
---

# web3.eth.getAccounts

返回账户列表：web3.eth.getAccounts()方法返回当前节点控制的账户列表。

### 调用方法

```js
web3.eth.getAccounts([callback])
```

### 返回值
一个Promise对象，其解析值为账户地址数组。

### 示例代码
```js
web3.eth.getAccounts().then(console.log);
> ["0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "0xDCc6960376d6C6dEa93647383FfB245CfCed97Cf"]
```