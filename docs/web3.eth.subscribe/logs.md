---
title: web3.eth.subscribe("logs")
---

# web3.eth.subscribe("logs")

使用logs参数订阅日志，并且可以指定条件进行过滤。

### 调用方法

```js
web3.eth.subscribe('logs', options [, callback]);
```

### 参数
- "logs" ：String, 订阅类型
- options：Object - 订阅选项，该对象包含如下字段：
  - fromBlock - Number: 最早块的编号，默认值为null
  - address - String|Array: 地址或地址列表，仅订阅来自这些账户地址的日志
  - topics - Array: 主题数组，仅订阅日志中包含这些主题的日志。
- callback - Function: 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

EventEmitter: 订阅实例对象，是一个事件发生器，定义有如下事件：
- "data" 返回 Object: 接收到新日志时触发，参数为日志对象
- "changed" 返回 Object: 日志从链上移除时触发，该日志同时添加属性 "removed: true"
- "error" 返回 Object: 当订阅中出现错误时触发

要了解返回的事件对象的结果，可查阅web3.eth.getPastEvents()方法的返回值。

通知返回值：
- Object|Null - 订阅失败时该值为错误对象，否则为null
- Object - 日志对象，类似于web3.eth.getPastEvents()方法的返回值

### 示例代码
```js
const subscription = web3.eth.subscribe('logs', {
    address: '0x123456..',
    topics: ['0x12345...']
}, function(error, result){
    if (!error)
        console.log(result);
})
.on("data", function(log){
    console.log(log);
})
.on("changed", function(log){
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```