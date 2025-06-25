# WebLLM 项目

这是一个通用的原生 HTML/CSS/JS 项目。

## 项目结构
- `index.html`: 项目入口文件。
- `css/style.css`: 项目样式文件。
- `js/script.js`: 项目 JavaScript 文件。
- `requirements.txt`: 项目依赖文件（原生项目无需特定依赖）。

## 运行项目
直接在浏览器中打开 `index.html` 文件即可。

## 服务器端返回
- 输入url 或者点击一个链接`(死板)
- 向服务器端发送请求 
- node/java 请求，去数据库取数据， 生成html 字符串
- 返回html 字符串

## fetch 请求 
- 滚动到底部后，加载更多数据 web2.0 富应用体验
  看到新的内容
- fetch url 
  - 不需要刷新页面， 主动去服务器端取一次， DOM 更新页面
- 点赞的时候？ 
  js fetch api  like  

- LLM AI 时代 
  fetch 取来大模型的能力 智能前端时代 

## http 请求 
  - 请求行  GET http://www.baidu.com 
    POST https://api.deepseek.com/chat/completions
  - 请求头
    设置各种头部信息
    {
      Content-Type: application/json，
      Authorization: Bearer 1234567890 凭证
    }
  - 请求体
    GET 没有请求体
    POST 可以有请求体

