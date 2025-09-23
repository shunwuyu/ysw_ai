/// <reference types="vite/client" />
// vite-env.d.ts
/// <reference types="vite/client" />

// 声明 .vue 文件是一个模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}