---
sidebar_position: 2
---

# web3.modules

子模块集合对象：<code style={{color: 'red'}}>web3.modules</code>属性返回一个包含所有子模块类的对象，可以用来手工实例化这些子模块类。

调用方法：

```js
Web3.modules
web3.modules
```

返回值：
- Object: 子模块列表:
- <code style={{color: 'red'}}>Eth</code> - Function: Eth模块类，用来与以太坊网络进行交互。参见web3.eth。
- <code style={{color: 'red'}}>Net</code> - Function: Net模块类，用来与网络属性进行交互。参见web3.eth.net。
- <code style={{color: 'red'}}>Personal</code> - Function: Personal模块类，用来与以太坊账户进行交互。参见web3.eth.personal。
- <code style={{color: 'red'}}>Shh</code> - Function: Shh模块类，用来与whisper协议交互。参见web3.shh。
- <code style={{color: 'red'}}>Bzz</code> - Function: Bzz模块类，用来与swarm网络交互。参见web3.bzz。

示例代码：
```js
web3.modules
> {
    Eth: Eth function(provider),
    Net: Net function(provider),
    Personal: Personal function(provider),
    Shh: Shh function(provider),
    Bzz: Bzz function(provider),
}
```