/// <reference types="vite/client" />
// 这行代码是 TypeScript 的模块声明，用于告诉编译器所有以 .vue 结尾的文件都是 Vue 组件，其默认导出是一个 DefineComponent 类型的对象
// ，从而让 TypeScript 能正确识别和处理 .vue 文件的导入。
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
