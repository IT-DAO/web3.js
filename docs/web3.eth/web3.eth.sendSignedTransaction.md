---
sidebar_position: 22
---

# web3.eth.sendSignedTransaction

发送已签名交易：web3.eth.sendSignedTransaction()方法用来发送已经签名的交易，例如，可以使用web3.eth.accounts.signTransaction() 方法进行签名。

### 调用方法

```js
web3.eth.sendSignedTransaction(signedTransactionData [, callback])
```

### 参数
- signedTransactionData：String - 16进制格式的签名交易数据
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值
PromiEvent: 一个整合了事件发生器的Promise对象。当交易收据生效后得到解析。

### 示例代码
```js
var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')

var rawTx = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gasLimit: '0x2710',
  to: '0x0000000000000000000000000000000000000000',
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
}

var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

// console.log(serializedTx.toString('hex'));
// 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
.on('receipt', console.log);

> // see eth.getTransactionReceipt() for details
```