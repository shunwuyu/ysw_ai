// mcp-server.js
// 导入MCP服务端核心类，用于创建和管理MCP服务器
// MCP服务器统一管理工具调用与上下文，实现大模型与外部工具间标准化、高效、安全的交互。
// LLM 开发，web server 开发一样
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
// 导入基于标准输入输出的传输层，实现进程间通信
// 大模型运行的主进程（如AI应用）与通过StdioServerTransport启动的MCP工具服务器进程之间的通信。
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
// 导入调用工具请求和响应的数据结构类型定义，确保通信数据格式规范
import {
  CallToolRequestSchema,
  CallToolResultSchema,
} from "@modelcontextprotocol/sdk/types.js";

// 1. 创建 MCP Server
const server = new Server(
  {
    name: "demo-mcp-server", // 服务器名称，用于标识当前MCP服务
    version: "1.0.0",// 服务器版本，便于版本管理和兼容性控制
  },
  {
    capabilities: {
      tools: {}, // 可以动态注册工具
    },
  }
);

// 2. 注册一个工具（比如：获取当前时间）
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "getTime") {
    return {
      content: [
        {
          type: "text",
          text: `当前时间是: ${new Date().toISOString()}`,
        },
      ],
    };
  }
  throw new Error("未知工具: " + request.params.name);
});

// 3. 启动 MCP Server
// StdioServerTransport 是通信桥梁（运输层）

const transport = new StdioServerTransport();
// server.connect(transport) 是将 MCP 服务器连接到该桥梁
server.connect(transport);