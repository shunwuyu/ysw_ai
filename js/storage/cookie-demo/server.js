// node 后端
// node 内置的核心模块
// js 在命令行运行
// js 有两种模块化方案 
// require node 早期模块化commonJS 
// import es6 更先进的模块化方案
// old  module 
// node 受欢迎 中小项目开发 
// 端口 -> 某个服务
// 3306 mysql 服务 进程（资源） 线程（执行）
// domain（localhost） -> ip 地址 (127.0.0.1)
// -> 某台设备-》 port 设备上的某个服务（进程）
// 1234 8080 端口占用了，
// 一台设备上可以很多端口使用，有多个http服务 多个网站
// 不要使用一些特殊端口 
const http = require('http');
const fs = require('fs'); // file system 
const path = require('path'); // 路径模块 

const server = http.createServer((req, res) => {
  // res.end('hello http server');
  // http 基于请求响应的协议 
  // 路由 Method + url 定位了服务器端的资源
  // 为了资源 
  if (req.method == 'GET' && 
    (req.url == '/' || req.url == '/index.html')) {
    // res.end('hello http server');
    console.log(__dirname, 
      path.join(__dirname,'public', 'index.html'));

    fs.readFile(
      path.join(__dirname,'public', 'index.html'), 
      // 异步 callback
      (err, content) => {
        // 前端体验为主
      // 后端稳定为主
      if (err) {
        res.writeHead(500); // 5XX 服务器错误
        res.end('Server error');
        return;
      }
      // 不只是html, css, js, jpg
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(content);
    })
  }
  // 后端路由， 暴露资源
  http://localhost:8080/style.css?a=1&b=2
  // 协议 http:// localhost 域名  端口   /style.css path  queryString
  if (req.method == 'GET' && req.url == '/style.css') {
    fs.readFile(
      path.join(__dirname, 'public', 'style.css'),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.end(content);
      }
    );
    return;
  }

  if (req.method == 'GET' && req.url == '/script.js') {
    fs.readFile(
      path.join(__dirname, 'public', 'script.js'),
      (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end('Server error');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.end(content);
      }
    );
    return;
  }

  if (req.method == 'POST'&& req.url == '/login') {
    // 用户名和密码的校验
    res.writeHead(200, {
      // 服务器端设置的 
      'Set-Cookie': "user=admin;",
      'Content-Type': "application/json"
    })
    res.end(
      JSON.stringify({
        success: true,
        msg: '登录成功'
      })
    );
  }

  if (req.method == 'GET' && req.url == '/check-login') {
    if (req.headers.cookie) {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        loggedIn: true,
        username: 'admin'
      }));
    } else {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({
        loggedIn: false,
        username: ''
      }));
    }
    
  }
})
server.listen(8080);