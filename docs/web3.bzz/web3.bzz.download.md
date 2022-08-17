---
title: web3.bzz.download
---

# web3.bzz.download

从swarm网络下载文件和目录到缓冲buffer中，或者磁盘中（仅限node.js）。

### 调用方法

```js
web3.bzz.download(bzzHash [, localpath])
```

### 参数
- bzzHash - String: 要下载的文件或目录的哈希值。如果哈希对应一个裸文件，则函数返回Buffer， 如果是一个Manifest文件，函数将返回目录结构。如果给定localpath参数，函数将返回下载文件的目录。
- localpath - String: 本地用来保存下载内容的目录，仅限node.js中有效

### 返回值
一个Promise对象，其解析值为Buffer|Object|String，分别表示保存下载的文件内容的缓冲区、目录结构对象 和下载保存目录。

### 示例代码

```js
const bzz = web3.bzz;

// 下载裸文件
const fileHash = "a5c10851ef054c268a2438f10a21f6efe3dc3dcdcc2ea0e6a1a7a38bf8c91e23";
bzz.download(fileHash).then(function(buffer) {
    console.log("Downloaded file:", buffer.toString());
});

// 如果哈希指向一个manifest文件，则下载目录结构
const dirHash = "7e980476df218c05ecfcb0a2ca73597193a34c5a9d6da84d54e295ecd8e0c641";
bzz.download(dirHash).then(function(dir) {
    console.log("Downloaded directory:");
    > {
        'bar.txt': { type: 'text/plain', data: <Buffer 61 6e 6f 74 68 65 72 20 66 69 6c 65> },
        'foo.txt': { type: 'text/plain', data: <Buffer 73 61 6d 70 6c 65 20 66 69 6c 65> }
    }
});

// 下载文件或目录并存入磁盘，仅限node.js中有效
const dirHash = "a5c10851ef054c268a2438f10a21f6efe3dc3dcdcc2ea0e6a1a7a38bf8c91e23";
bzz.download(dirHash, "/target/dir")
.then(path => console.log(`Downloaded directory to ${path}.`))
.catch(console.log);
```