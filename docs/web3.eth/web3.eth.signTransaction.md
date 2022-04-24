---
sidebar_position: 24
---

# web3.eth.signTransaction

为交易生成签名：使用web3.eth.signTransaction()方法对交易进行签名，用来签名的账户地址需要首先解锁。

### 调用方法

```js
web3.eth.signTransaction(transactionObject, address [, callback])
```

### 参数
- transactionObject：Object - 要签名的交易数据
- address：String - 用于签名的账户地址
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

一个Promise对象，其解析值为RLP编码的交易对象。该对象的raw属性可以用来通过web3.eth.sendSignedTransaction() 方法来发送交易。

### 示例代码
```js
web3.eth.signTransaction({
    from: "0xEB014f8c8B418Db6b45774c326A0E64C78914dC0",
    gasPrice: "20000000000",
    gas: "21000",
    to: '0x3535353535353535353535353535353535353535',
    value: "1000000000000000000",
    data: ""
}).then(console.log);
> {
    raw: '0xf86c808504a817c800825208943535353535353535353535353535353535353535880de0b6b3a76400008025a04f4c17305743700648bc4f6cd3038ec6f6af0df73e31757007b7f59df7bee88da07e1941b264348e80c78c4027afc65a87b0a5e43e86742b8ca0823584c6788fd0',
    tx: {
        nonce: '0x0',
        gasPrice: '0x4a817c800',
        gas: '0x5208',
        to: '0x3535353535353535353535353535353535353535',
        value: '0xde0b6b3a7640000',
        input: '0x',
        v: '0x25',
        r: '0x4f4c17305743700648bc4f6cd3038ec6f6af0df73e31757007b7f59df7bee88d',
        s: '0x7e1941b264348e80c78c4027afc65a87b0a5e43e86742b8ca0823584c6788fd0',
        hash: '0xda3be87732110de6c1354c83770aae630ede9ac308d9f7b399ecfba23d923384'
    }
}
```