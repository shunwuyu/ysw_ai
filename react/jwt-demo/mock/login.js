import jwt from "jsonwebtoken";


// 安全性 编码的时候加密
// 解码的时候用于解密
// 加盐
const secret = '!&124coddefgg';

// login 模块 mock 
export default [
    {
        url: '/api/login',
        method: 'post',
        timeout: 2000, // 请求耗时
        response: (req, res) => {
            // req, username, password
            const {username, password} = req.body;
            if (username !== 'admin' || password !== '123456') {
                return {
                    code: 1,
                    message: '用户名或密码错误'
                }
            }
            // json 用户数据
            const token = jwt.sign({
                user: {
                    id: "001",
                    username: "admin"
                }
            }, secret, {
                expiresIn: 86400
            })
            console.log(token, '------');
            // 生成token 颁发令牌
            return {
                token,
                data: {
                    id: "001",
                    username: "admin"
                }
            }
        }
    },
    {
        url: '/api/user',
        method: 'get',
        response: (req, res) => {
            // 用户端 token headers 
            const token = req.headers["authorization"].split(' ')[1];
            console.log(token)
            try {
                const decode = jwt.decode(token, secret);
                console.log(decode)
                return {
                    code: 0,
                    data: decode.user
                }
            } catch(err) {
                return {
                    code: 1,
                    message: 'Invalid token'
                }
            }
            return {
                token
            }
        }
    }
]