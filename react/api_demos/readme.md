# 全栈开发
## 表演型项目
- 前端 react 
- mockjs  前端伪接口
    /api axios 

- 后端 java/node/go

## vite-plugin-mock
    - mock
    前端在后端给出真实接口前，需要mock 一下，前端自己造接口
    - vite-plugin-mock 插件
    - mock 服务启动
    - /mock/test.js 根目录
        export default [
             {
                url: '/api/todos',
                method: 'get',
                response: () => {
                    return {
                        code:0,
                        data: todos
                    }
                }
            }
        ]

- 前后端连调
    - 开会立项
    - 前后端 接口文档
    /api/todos
    [
        {
            id:'',
            title:'',
            completed: true|false
        }
    ]