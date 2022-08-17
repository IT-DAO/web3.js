---
title: web3.bzz.pick
---

# web3.bzz.pick

在浏览器中打开一个文件选择器，以便选择文件、目录或数据。

### 调用方法

```js
web3.bzz.pick.file()
web3.bzz.pick.directory()
web3.bzz.pick.data()
```

### 参数
无

### 返回值
一个Promise对象，其解析值为一个或多个文件。

### 示例代码
```js
web3.bzz.pick.file()
.then(console.log);
> {
    ...
}
```