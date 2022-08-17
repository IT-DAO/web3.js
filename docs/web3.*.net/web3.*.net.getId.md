---
title: web3.*.net.getId
---

# web3.*.net.getId

返回当前连接网络的ID。

### 调用方法

```js
web3.eth.net.getId([callback])
web3.bzz.net.getId([callback])
web3.shh.net.getId([callback])
```

### 参数
无

### 返回值
一个Promise对象，其解析值为网络ID。

### 示例代码
```js
web3.eth.net.getId()
.then(console.log);
> 1
```