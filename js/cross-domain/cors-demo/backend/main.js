const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:57521');
    res.setHeader('Access-Control-Allow-Methods', 'PUT,PATCH,GET,POST,DELETE,OPTIONS');
    
    // if (req.url === '/api/test' && req.method === 'GET') {
    //     res.writeHead(200, {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     })

        

    //     res.end(JSON.stringify({
    //         msg: '跨域成功!!!'
    //     }))
    // }
    // 浏览器发送一个预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(200); // 同意
        res.end();
        return;
    }

    if (req.url === '/api/test' && req.method === 'PATCH') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        
        res.end(JSON.stringify({
            msg: '跨域成功!!!'
        }))
    }
})

server.listen(8000, ()=> {
    console.log('CORS server running at http://localhost:8000')
})