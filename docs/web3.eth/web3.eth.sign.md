---
sidebar_position: 23
---

# web3.eth.sign

为数据生成签名：web3.eth.sign()方法使用指定的账户对数据进行签名，该账户必须先解锁。

### 调用方法

```js
web3.eth.isSyncing([callback])
```

### 参数
- dataToSign：String - 待签名的数据。对于字符串将首先使用web3.utils.utf8ToHex()方法将其转换为16进制
- address：String|Number - 用来签名的账户地址。或者本地钱包web3.eth.accounts.wallet中的地址或其序号
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

一个Promise对象，其解析值为签名结果字符串。

### 示例代码
```js
web3.eth.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
.then(console.log);
> "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"

// the below is the same
web3.eth.sign(web3.utils.utf8ToHex("Hello world"), "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe")
.then(console.log);
> "0x30755ed65396facf86c53e6217c52b4daebe72aa4941d89635409de4c9c7f9466d4e9aaec7977f05e923889b33c0d0dd27d7226b6e6f56ce737465c5cfd04be400"
```