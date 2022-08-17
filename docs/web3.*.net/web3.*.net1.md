---
title: web3.*.net
---

# web3.*.net

web3-net包用来支持和以太坊节点旳网络属性的交互。

### 示例代码

```js
var Net = require('web3-net');

// 当使用以太坊兼容浏览器时，"Personal.providers.givenProvider" 将自动设置
var net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');


// 也可以通过web3包使用web3-net包的功能

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// -> web3.eth.net
// -> web3.bzz.net
// -> web3.shh.net
```