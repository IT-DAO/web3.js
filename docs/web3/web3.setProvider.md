---
sidebar_position: 3
---

# web3.setProvider

设置服务提供器：<code style={{color: 'red'}}>web3.setProvider()</code>方法用来修改指定模块的底层通讯服务提供器。


### 调用方法

```js
web3.setProvider(myProvider)
web3.eth.setProvider(myProvider)
web3.shh.setProvider(myProvider)
web3.bzz.setProvider(myProvider)
...
```

**注意：当在web3上直接调用setProvider()方法时，将为所有其他子模块设置服务提供器，例如web3.eth和web3.shh。 但web3.bzz不受影响，因为该子模块始终使用独立的服务提供器。**

---
### 参数
Object - myProvider: 有效的服务提供器对象。

### 返回值
Boolean

### 示例代码
```js
let web3 = require('web3');
let web3 = new Web3('http://localhost:8545');
// 或者
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// 改变服务提供器
web3.setProvider('ws://localhost:8546');
// 或者
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

// 在node.js中使用IPC服务提供器
let net = require('net');
let web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os 路径
// 或者
let web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path
// 在windows下的路径是: "\\\\.\\pipe\\geth.ipc"
// 在linux下的路径是: "/users/myuser/.ethereum/geth.ipc"
```