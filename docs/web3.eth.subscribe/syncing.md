---
title: web3.eth.subscribe("syncing")
---

# web3.eth.subscribe("syncing")

使用syncing参数订阅同步事件。当节点同步时将返回一个同步对象，否则返回false。

### 调用方法

```js
web3.eth.subscribe('syncing' [, callback]);
```

### 参数
- type：String - "syncing", 订阅类型
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

EventEmitter: 订阅对象实例，是一个事件发生器，定义有如下事件：
- "data" 返回 Object: 收到同步对象时触发
- "changed" 返回 Object: 当节点从同步状态转换为非同步状态时触发
- "error" 返回 Object: 当订阅中出现错误时触发

要了解返回的事件对象的结构，可以查看web3.eth.isSyncing()方法的返回值。

通知返回值：
- Object|Null - 当订阅失败时，该值为错误对象，否则为null
- Object|Boolean - 同步对象

### 示例代码
```js
const subscription = web3.eth.subscribe('syncing', function(error, sync){
    if (!error)
        console.log(sync);
})
.on("data", function(sync){
    // show some syncing stats
})
.on("changed", function(isSyncing){
    if(isSyncing) {
        // stop app operation
    } else {
        // regain app operation
    }
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
```