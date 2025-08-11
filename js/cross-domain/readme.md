# 面试热题 跨域 

- 大前端 都是JS
    - React/Vue mvvm 前端
    - node.js 后端
    - 移动端（ios\android）
    - 桌面端 exe  vscode 用ts 写出来的 
    - 嵌入式，AI 

- 前后端连调
    - 前后端分离 跨域
    - 前端 5173 
        from origin 
    - 后端 8080 
        server 
    - 同源
        protocol://domain:port 
        domain 不一样 不是同一个来源
        http://localhost:5173 -> http://www.baidu.com/api/user 
        协议不同也不同源 严格 ？ 为什么？
        http://localhost:5173 -> https://localhost:5173/api/user
        cross domain(origin) 
        http://localhost:5173 -> http://localhost:8080/api/test
        origin = http(s) + domain + 端口
    - CORS policy 同源策略
        跨域了， CORS 将会block 我的请求？

- 为什么要学习跨域
    - 前后端分离是日常开发的形式 ，端口或域名不一样
    - CORS Policy 同源策略？
        浏览器端的机制
        Cross-Origin Resource Sharing 

    - 跨域请求被block掉了
        请求到大了服务器端吗？
        请求到达了
        响应被浏览器抛弃了 block 掉了响应
        浏览器的CORS 策略 

    - 安全问题？
        - 前端（千千万万的用户 ）的安全，攻击
        - 跨源的，可能不一定被信任
    - 怎么解决跨域？
        - 即拿到cross orgin 的资源，同时又不违反CORS 机制
        fetch/xhr 被 CORS 管着了
        Cookie/localStorage  被 CORS 管着了
        - img script link 可以跨域
        - 不用被管着的fetch/xhr/axios, 用script


- 使用script的跨域解决方案 JSONP
    - script  src  发送一个请求
        - 必须是get 请求 ， 
        - javascript 返回
        - 前端想要的是JSON ， 还要可以继续执行
        - 前端埋一个函数
            - 后端返回一个JS函数的执行，
            - 在执行时将数据传给函数，
        - 需要后端的配合 
    - 返回json
    JSON 前端需要后端提供的JSON数据
    Padding 

- JSONP 利用了 script 可以跨域访问
    - 前端使用script src=跨域的资源请求地址
    - 需要后端配合， 返回的JSON 外面包含着函数
    - 页面上有个函数在等待执行
    - 复杂，能不能封装一下？

- 手写JSONP 
    - 获取动态数据， script 标签原来设计用于加载静态JS 
    - 后端配合解析 script url get 请求中的callback 参数值
    请求A, 请求B.... 
    - 前端封装