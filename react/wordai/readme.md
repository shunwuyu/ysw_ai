# 智能前端之单词学习
- 产品和商业模式 
  - 学单词 
  - 拍照记单词 
    - 图片交给多模态模型 word 
    - deepseek aigc 例句 
    - tts 发音 
- focus 
  拍照背单词，用单词 
- 解决一些特定的效率性、创新型App 

- npm init vite 
  vite 是工程化脚手架，构建工具
- npm i  慢了点
  react 。。。 项目依赖
  pnpm 代替npm 
  不同的项目中 重复去安装了react ，react-dom 等包
  react等包放到一个地方，如果之，前安装过，链接过，只需要安装一次

## 项目中一定要安排的技能点
- pnpm 
- react 思想
  - 数据状态 useState
  - 数据驱动 
  - 响应式 数据状态变化，视图会自动更新
    - 不用平凡操作DOM, 只需要关注业务
- 业务
  - 图片上传
    - 图片预览
- 组件化设计 
  - PictureCard
- 性能优化
  - linear-gradient 代替图片做背景
- 用户体验
  - 上传图片的功能，预览功能
  - 无障碍访问
    label for +input#id
- es6 新特性
  - 可选链操作符
- html5 功能
  - file 文件对象 