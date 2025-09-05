export type Message = {
    role: 'user' | 'assistant' | 'system' | 'tool'
    content: string
}

export type ChatResponse = {
    model: string;                  // 使用的模型名称
    created_at: string;             // 响应生成的时间戳
    message: Message;               // 核心：模型返回的消息内容
    done: boolean;                  // 流式传输结束标志
    total_duration: number;         // 整个请求的总耗时（纳秒）
    load_duration: number;          // 模型加载耗时（纳秒）
    prompt_eval_count: number;      // 提示词（prompt）处理的 token 数量
    prompt_eval_duration: number;   // 处理提示词的耗时（纳秒）
    eval_count: number;             // 生成回复的 token 数量
    eval_duration: number;          // 生成回复的耗时（纳秒）
}

export type ChatRequest = {
    model: string;
    messages: Message[];
    stream?:boolean; // 可选的 默认是false
}