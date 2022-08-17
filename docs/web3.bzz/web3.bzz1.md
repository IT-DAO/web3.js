---
title: web3.bzz
---

# web3.bzz

使用web3-bzz包来和去中心化文件存储系统Swarm交互。

### 使用方法：

```js
const Bzz = require('web3-bzz');

// web3-bzz包可以自动检测ethereum对象是否有效，同时连接到本地swarm节点或swarm-gateways.net。 当然你也可以指定一个服务提供器的URL，如果没有指定的话就使用"http://swarm-gateways.net"：
const bzz = new Bzz(Bzz.givenProvider || 'http://swarm-gateways.net');
```

也可以利用web3包来引入Bzz：

```js
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// -> web3.bzz.currentProvider // if Web3.givenProvider was an ethereum provider it will set: "http://localhost:8500" otherwise it will set: "http://swarm-gateways.net"
// set the provider manually if necessary
web3.bzz.setProvider("http://localhost:8500");
```