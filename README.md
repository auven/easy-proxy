### easy-proxy

让跨域代理变得简单。

easy-proxy可以简单并快速的进行跨域代理。此项目适合传统网页进行跨域请求。对于vue等框架，有相应的处理方式。

环境依赖：[node.js](http://nodejs.cn/) 

### 使用

1. 安装依赖
```bash
npm install
```

2. 修改server.js

```js
const CONFIG = {
  // 监听端口
  port: 3000,
  // 需要代理的网址
  url: 'http://www.xxx.com'
}
```

3. 将我们的网页丢进`public`文件夹内。

4. 运行
```bash
npm run server
```

不出意外，将自动打开浏览器访问`http://localhost:3000`。

### 参考文献

- [node+express+http-proxy-middleware做代理](http://www.cnblogs.com/MonaSong/p/6555342.html)