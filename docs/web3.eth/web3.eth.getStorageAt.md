---
title: web3.eth.getStorageAt
---

# web3.eth.getStorageAt

返回指定地址存储内容：web3.eth.getStorageAt()方法返回一个以太坊地址的指定位置存储内容。

### 调用方法

```js
web3.eth.getStorageAt(address, position [, defaultBlock] [, callback])
```

### 参数
- address：String - 要读取的地址
- position：Number - 存储中的索引编号
- defaultBlock：Number|String - 可选，使用该参数覆盖web3.eth.defaultBlock属性值
- callback：Function - 可选的回调函数, 其第一个参数为错误对象，第二个参数为结果。

### 返回值
一个Promise对象，其解析值为存储中指定位置的内容。

### 示例代码
```js
web3.eth.getStorageAt("0x407d73d8a49eeb85d32cf465507dd71d507100c1", 0)
.then(console.log);
> "0x033456732123ffff2342342dd12342434324234234fd234fd23fd4f23d4234"
```