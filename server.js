const CONFIG = {
  // 监听端口
  port: 9000,
  // 需要代理的网址
  url: 'http://www.inwill2.com'
}

const express = require('express');
// 自动打开浏览器
const opn = require('opn');
//引入代理中间件
const proxy = require('http-proxy-middleware');
const app = express();
app.use(express.static('public'));
 
// 添加代理中间件
const apiProxy = proxy({ target: CONFIG.url, changeOrigin: true });
// 根目录下使用代理，即访问 http://localhost:3000/api/album 等同于 http://www.xxx.com/api/album
app.use(apiProxy);

app.listen(CONFIG.port, () => {
  console.log('Listening on: http://localhost:' + CONFIG.port);
  // 打开浏览器
  opn('http://localhost:' + CONFIG.port);
});