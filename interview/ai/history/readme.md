# LLM 历史 

## AI chat 无状态的 ，要让大模型更好的了解对话，手动管理messages数组。
    将提问和回答都push messages

## messages 的无限增长， tokens 开销太大
    - tokens 是有上限的
    - 开销越来越大

## 平衡点 

    最近最少使用原则
    维护一定轮数的对话