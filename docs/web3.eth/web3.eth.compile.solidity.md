---
sidebar_position: 29
---

# web3.eth.compile.solidity

编译solidity代码：web3.eth.compile.solidity()方法用来编译使用solidity语言编写的合约 源代码。

### 调用方法

```js
web3.eth.compile.solidity(sourceCode [, callback])
```

### 参数
- sourceCode：String - solidity源代码字符串
- callback：Function - 可选的回调函数，其第一个参数为错误对象，第二个参数为结果

### 返回值

一个Promise对象，其解析值为编译结果信息对象。

### 示例代码
```js
var source = "" +
    "contract test {\n" +
    "   function multiply(uint a) returns(uint d) {\n" +
    "       return a * 7;\n" +
    "   }\n" +
    "}\n";

web3.eth.compile.solidity(source)
.then(console.log);

> {
  "test": {
    "code": "0x605280600c6000396000f3006000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114602e57005b60376004356041565b8060005260206000f35b6000600782029050604d565b91905056",
    "info": {
      "source": "contract test {\n\tfunction multiply(uint a) returns(uint d) {\n\t\treturn a * 7;\n\t}\n}\n",
      "language": "Solidity",
      "languageVersion": "0",
      "compilerVersion": "0.8.2",
      "abiDefinition": [
        {
          "constant": false,
          "inputs": [
            {
              "name": "a",
              "type": "uint256"
            }
          ],
          "name": "multiply",
          "outputs": [
            {
              "name": "d",
              "type": "uint256"
            }
          ],
          "type": "function"
        }
      ],
      "userDoc": {
        "methods": {}
      },
      "developerDoc": {
        "methods": {}
      }
    }
  }
}
```