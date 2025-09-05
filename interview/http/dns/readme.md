# dns  

- 全称 Domain Name System
- 把好理解和记忆的域名解析成IP地址的*分布式数据库*系统。
    浏览器在真正发起HTTP(s)请求前，通常都会做一次DNS解析。
- 一条命令
    ping www.baidu.com  递归查找的过程，结果IP 

- dns 解析过程 
    url 输入，到页面显示的第一个表达
    - 补充url 的完整性
    - dns 浏览器缓存
        chrome://net-internals/#dns
        第一次访问的， 需要解析，否则使用缓存的
    - 操作系统dns缓存
        ipconfig /displaydns 
    - hosts 文件配置
        指定域名 解析IP 手动配置
        加一行配置记录 指定ip  域名
        比如我们会将项目本地ip 配公司的域名， 那么开发效果就可以和线上域名效果一样。更安全 
        开发中经常用 

    - 如果上面三者都没有，也就是没有命中缓存
        递归解析器查询。
        假设 www.baidu.com
        分布式数据库 key=>value  key domain value ip 
        dns 软件  13 组根服务器的ip 地址和域名， 
        写死的 

        - 根域名服务器 
            .com 的地址是多少
        - 域名服务器
            baidu.com 服务器在哪？
        - 权威服务器 
            IP地址 


        局域网-》城域网（电信或移动服务商）

- 设备用ip地址区三次握手，建立tcp 链接， 使用http 请求，网页打开了。

- dns优化
    dns-prefetch dns 预解析 
    <link type="dns-prefetch" href="//g.alicdn.com">
    网络层的优化

- pre-connect 
    tcp 连接提前 通道打开，多路复用
    <link data-n-head="ssr" rel="preconnect" href="//unpkg.byted-static.com/" crossorigin="anonymous">

- ping www.baidu.com
PING www.a.shifen.com (183.2.172.177)
    a.shifen.com 是意思 
    百度用于搜索服务的内部域名系统
    域名 -》 ip  不是绝对的 
    域名背后 一堆的服务器， 分布式的， 多地的机房 （就近原则）
    - 负载均衡
        挡在前面 
        容灾、高性能
        算法，服务器
        当前哪些机器还有接待的能力 ， 随机算法 
    - CDN 服务器
         Content Delivery NetWork
         内容分发网络
         部署静态资源的 
         访问内容分成两部分
         动态的，走中央服务器
         静态的， css/js/jpg, CDN 服务器 
            双 11


