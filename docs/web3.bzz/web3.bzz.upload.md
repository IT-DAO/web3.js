---
title: web3.bzz.upload
---

# web3.bzz.upload

将文件夹或裸数据上传到swarm网络。

### 调用方法

```js
web3.bzz.upload(mixed)
```

### 参数
mixed - String|Buffer|Uint8Array|Object: 要上传的数据，可以是文件内容、Buffer/Uint8Array、多个 文件，也可以是一个目录或文件名（仅在node.js中有效）。可以使用以下类型

- String|Buffer|Uint8Array: 文件内容，要上传的Uint8Array 或Buffer
- Object:具有以下字段的对象：
  - 多个键值对分别表示文件和目录，路径将保持一致，例如：/foo.txt，文件路径为键，值为一个对象：
    - type: mime类型，例如： "text/html"
    - data: 文件内容，要上传的Uint8Array或Buffer
  - 在Node.js中从磁盘上传一个文件或目录，需要指定一个具有以下属性的对象：
    - path: 文件或目录的路径
    - kind: 源类型，"file" 或 "data"
    - defaultFile: 可选，当kind属性为directory时的默认文件，例如 "/index.html"
  - 在浏览器中上传文件或目录。需要指定一个具有以下属性的对象：
    - pick: 要加载的文件选择器，可以是"file"、 "directory" 或 "data"

### 返回值
一个Promise对象，其解析值为上传内容的哈希值。

### 示例代码
```js
const bzz = web3.bzz;

//上传裸数据：
bzz.upload("test file").then(function(hash) {
    console.log("Uploaded file. Address:", hash);
})


//上传裸目录：
const dir = {
    "/foo.txt": {type: "text/plain", data: "sample file"},
    "/bar.txt": {type: "text/plain", data: "another file"}
};
bzz.upload(dir).then(function(hash) {
    console.log("Uploaded directory. Address:", hash);
});
//在node.js中从磁盘上传： bzz.upload({ path: "/path/to/thing", // path to data / file / directory kind: "directory", // could also be "file" or "data" defaultFile: "/index.html" // optional, and only for kind === "directory" }) .then(console.log) .catch(console.log);


//在浏览器中从磁盘上传：
bzz.upload({pick: "file"}) // could also be "directory" or "data"
.then(console.log);
```