---
title: web3.eth.subscribe("pendingTransactions")
---

# web3.eth.subscribe("pendingTransactions")

参数pendingTransactions表示订阅处于pending状态的交易。

### 调用方法

```js
web3.eth.subscribe('pendingTransactions' [, callback]);
```

### 参数
- type：String - "pendingTransactions"，订阅类型
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

EventEmitter: 订阅实例对象，是一个事件发生器，定义有以下事件：
- "data" 返回 Object: 当接收到pending状态的交易时触发
- "error" 返回 Object: 当订阅中发生错误时触发

返回对象的结构，参见web3.eth.getTransaction()的返回值。

通知返回值：
- Object|Null - 第一个参数是一个错误对象，如果订阅成功则为null
- Object - 块头对象

通知返回值：Mixed - 取决于具体的订阅类型

### 示例代码
```js
var subscription = web3.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(transaction){
    console.log(transaction);
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```