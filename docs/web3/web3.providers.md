---
sidebar_position: 4
---

# web3.providers

服务提供器集合对象：返回当前有效的通信服务提供器。

---

### 调用方法

```js
web3.providers
web3.eth.providers
web3.shh.providers
web3.bzz.providers
...
```

### 返回值
Object， 参见以下服务提供器对象:
- Object - HttpProvider: HTTP服务提供器已经被弃用，因为它不支持订阅。
- Object - WebsocketProvider: Websocket服务提供器是用于传统的浏览器中的标准方法。
- Object - IpcProvider: 当运行一个本地节点时，IPC服务提供器用于node.js下的DApp环境，该方法提供最安全的连接。

### 示例代码
```js
let Web3 = require('web3');
// 使用指定的服务提供器（例如在Mist中）或实例化一个新的websocket提供器
let web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
// 或者
let web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://remotenode.com:8546'));

// 在node.js中使用IPC服务提供器
let net = require('net');

let web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os 路径
// 或者
let web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os 路径
// windows路径是: "\\\\.\\pipe\\geth.ipc"
// linux路径是: "/users/myuser/.ethereum/geth.ipc"
```