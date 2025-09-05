# RAG

- Function Call 给llm 提供工具和服务 
- MCP 定义了LLM 与外部资源的通信协议

RAG（检索增强生成）是一种通过从外部知识库检索相关信息并将其融入提示词，来增强大语言模型生成内容的准确性、时效性和相关性的技术框架。

- 增强？
    给LLM 提供丰富的上下文
- 检索？
    律师、ppt 、code 知识库 

    prompt-> 知识库（检索embedding）-> prompt + 知识库（相关）-> LLM
    返回结果

- 检索
    如何在知识库里，根据prompt找到相关的那一段内容交给大模型

    - embedding 