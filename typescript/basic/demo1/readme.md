- npm install typescript --save-dev
- npx tsc index.ts
- npx tsc --watch
- tsconfig.json
    
    ```
    {
        "compilerOptions": {
            "target": "es6",          // 编译后 JS 的目标版本
            "module": "commonjs",     // 模块系统
            "strict": true,           // 启用所有严格类型检查
            "esModuleInterop": true,  // 允许导入 commonjs 模块
            "forceConsistentCasingInFileNames": true
        },
        "include": ["src"],         // 要包含的文件目录
        "exclude": ["node_modules"] // 忽略编译的目录
    }

    ```

- react 中必掌握的Typescript 用法