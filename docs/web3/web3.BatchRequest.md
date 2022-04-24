---
title: web3.BatchRequest
---

# web3.BatchRequest

批量请求：web3.BatchRequest类用来创建并执行批请求。

### 调用方法

```js
new web3.BatchRequest()
new web3.eth.BatchRequest()
new web3.shh.BatchRequest()
new web3.bzz.BatchRequest()
```

### 参数
无

### 返回值
一个对象，具有如下方法：
- add(request): 将请求对象添加到批调用中
- execute(): 执行批请求

### 示例代码
```js
const contract = new web3.eth.Contract(abi, address);

const batch = new web3.BatchRequest();
batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
batch.execute();
```