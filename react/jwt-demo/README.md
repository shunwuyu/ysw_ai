# jwt 登录鉴权
- isLogin ， user 全局状态 zustand 
- mock 登录模拟
    - apifox  api请求模拟 
    不用写页面，就可以发送请求 
    curl 

- 会话授权
    - 服务器知道我们是谁？
    - http 是无状态的 
        - 请求头 cookie 
        - server 种下一个cookie  唯一sid 值  sid => user 
        - 每次请求中 从cookie 读取sid 
        - 服务器多就知道是我们了 

    - 登录和用户鉴权方案JWT  JSON Web TOKEN
        - {id:112, username:'帅的惊动党中央',level:4... }  user JSON格式的数据
        - 一种算法 生成一个hash 串 
        - token 服务器端令牌 
        - 带上token 
        - decode 解码 
             {id:112, username:'帅的惊动党中央',level:4... }
- jsonwebtoken
    jwt 鉴权的库 
    sign 颁发一个token  user, secret
    decode secret  验证token  user
    - pnpm i jwt
    - import jwt from "jsonwebtoken";
    - sign 
    - HTTP 请求头 Authorization  带上token
    - Cookie 每次自动带上 
    - token需要手动设置的 

- 加盐
    secret 
    传递token 前面会加上Bearer ${token} 持有者 
    通过 http headers Authorization 

- 前端的用户权限状态 流程
    - zustand 
        登录、user useUserStore
    - 登录页面
        受控/非受控组件 
    - 路由首卫
    - api/ 