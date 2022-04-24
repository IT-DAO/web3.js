---
sidebar_position: 28
---

# web3.eth.getCompilers

返回可用编译器清单：web3.eth.getCompilers()方法返回可用编译器的列表。

### 调用方法

```js
web3.eth.getCompilers([callback])
```

### 参数
callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果。

### 返回值

一个Promise对象，其解析值为可用编译器名称字符串数组。

### 示例代码
```js
web3.eth.getCompilers()
.then(console.log);
> ["lll", "solidity", "serpent"]
```