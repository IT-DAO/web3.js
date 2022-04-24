---
sidebar_position: 1
---

# web3.eth.clearSubscriptions

复位订阅状态：web3.eth.clearSubscriptions()方法用来复位订阅状态。注意该方法不能 复位其他包的订阅，例如web3-shh，因为这些包有自己的请求管理器。

### 调用方法

```js
web3.eth.clearSubscriptions(flag)
```

### 参数
- flag：Boolean - 值为true则表示保持同步订阅

### 返回值
Boolean：复位成功返回true，否则返回false

### 示例代码
```js
web3.eth.subscribe('logs', {} ,function(){ ... });

...

web3.eth.clearSubscriptions();
```