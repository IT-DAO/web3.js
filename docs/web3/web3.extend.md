---
sidebar_position: 8
---

# web3.extend

模块继承：使用web3.extend()方法来继承扩展web3的模块类。

### 调用方法

```js
web3.extend(methods)
web3.eth.extend(methods)
web3.shh.extend(methods)
web3.bzz.extend(methods)
...
```

### 参数
methods - Object: 扩展对象，包含一组如下的方法描述对象：
- property - String: 可选，要添加到模块上的属性名称。 如果没有设置属性，则直接添加到模块上。
- methods - Array: 方法描述对象数组，每个描述对象包含以下字段：
- name - String: 要添加的方法名称
- call - String: RPC方法名称
- params - Number: 可选，方法的参数个数，默认值为0
- inputFormatter - Array: 可选，输入格式化函数数组，每个成员对应一个函数参数，或者使用null来对应不需要进行格式化处理的参数
- outputFormatter - Function: 可选，用来格式化输出



### 返回值
Object: 扩展后的模块


### 示例代码
```js
web3.extend({
    property: 'myModule',
    methods: [{
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [web3.extend.formatters.inputAddressFormatter, web3.extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: web3.utils.hexToNumberString
    },{
        name: 'getGasPriceSuperFunction',
        call: 'eth_gasPriceSuper',
        params: 2,
        inputFormatter: [null, web3.utils.numberToHex]
    }]
});

web3.extend({
    methods: [{
        name: 'directCall',
        call: 'eth_callForFun',
    }]
});

console.log(web3);
> Web3 {
    myModule: {
        getBalance: function(){},
        getGasPriceSuperFunction: function(){}
    },
    directCall: function(){},
    eth: Eth {...},
    bzz: Bzz {...},
    ...
}
```