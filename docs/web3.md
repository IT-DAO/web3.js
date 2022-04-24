# web3js开始

web3.js 库是一组包含以太坊生态系统功能的模块。

- <code style={{color: 'red'}}>web3-eth</code> 用于以太坊区块链和智能合约。
- <code style={{color: 'red'}}>web3-shh</code> 用于whisper 协议，用于p2p 和广播通信。
- <code style={{color: 'red'}}>web3-bzz</code> 用于swarm协议，去中心化文件存储。
- <code style={{color: 'red'}}>web3-utils</code> 包含对 Dapp 开发人员有用的帮助函数。

## 添加 web3.js

首先，您需要将 web3.js 放入您的项目中。这可以使用以下方法完成：
- npm：<code style={{color: 'red'}}>npm install web3</code>
- yarn：<code style={{color: 'red'}}>yarn add web3</code>
- js：链接 <code style={{color: 'red'}}>dist/web3.min.js</code>


之后，您需要创建一个 web3 实例并设置一个提供程序。

大多数以太坊支持的浏览器（如 MetaMask）都有一个符合[EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)的提供程序，位于window.ethereum.

对于 web3.js，检查<code style={{color: 'red'}}>Web3.givenProvider</code>

如果此属性是<code style={{color: 'red'}}>null</code>您应该连接到远程/本地节点。

```js
// In Node.js use: const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
```

就是这样！现在您可以使用该<code style={{color: 'red'}}>web3</code>对象了。
