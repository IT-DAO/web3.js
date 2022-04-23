---
sidebar_position: 1
---

# web3.eth.defaultAccount

默认账户：web3.eth.defaultAccount属性记录了默认地址，在以下方法中如果没有指定from属性， 将使用该属性的值作为默认的from属性值。
- web3.eth.sendTransaction()
- web3.eth.call()
- new web3.eth.Contract() -> myContract.methods.myMethod().call()
- new web3.eth.Contract() -> myContract.methods.myMethod().send()

### 调用方法

```js
web3.eth.defaultAccount
```

### 属性
String - 20 Bytes: 以太坊地址，你应当在节点或keystore中存有该地址的私钥。默认值为undefined

### 示例代码
```js
web3.eth.defaultAccount;
> undefined

// 设置默认帐户
web3.eth.defaultAccount = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe';
```