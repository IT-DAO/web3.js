---
title: web3.eth.subscribe
---

# web3.eth.subscribe

使用web3.eth.subscribe()方法来订阅区块链上的指定事件。

### 调用方法

```js
web3.eth.subscribe(type [, options] [, callback]);
```

### 参数
- type：String - 订阅类型
- options：Mixed - 可选的额外参数，依赖于订阅类型
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

EventEmitter - 订阅实例对象，具有以下字段：
- subscription.id: 订阅id编号，用于标识一个订阅以及进行后续的取消订阅操作
- subscription.subscribe([callback]): 可用于使用相同的参数进行再次订阅
- subscription.unsubscribe([callback]): 取消订阅，如果成功取消的话，在回调函数中返回true
- subscription.arguments: 订阅参数，当重新订阅时使用
- on("data") 返回 Object: 每次有新的日志时都触发该事件，参数为日志对象
- on("changed") 返回 Object: 每次有日志从区块链上移除时触发该事件，被移除的日志对象将添加额外的属性："removed: true"
- on("error") 返回 Object: 当订阅中发生错误时，触发此事件

通知返回值：Mixed - 取决于具体的订阅类型

### 示例代码
```js
const subscription = web3.eth.subscribe('logs', {
    address: '0x123456..',
    topics: ['0x12345...']
}, function(error, result){
    if (!error)
        console.log(log);
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```