'use client'; // 组件在客户端执行
import { useState } from 'react';
import type { Message } from '@/types/chat';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return; 

    const userMessage: Message = {
      role: 'user',
      content: input
    }
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: [...messages, userMessage]})
      })

      const data = await res.json();
      const assistantMessage:Message = data.message;
      setMessages((prev) => [...prev, assistantMessage])
    } catch(err) {

    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {
          messages.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              开始与deepseek模型聊天吧
            </p>
          ): (
            messages.map((msg, idx) => (
              <div 
                key={msg.content}
                className={
                  `flex ${msg.role === 'user'?'justify-end':'justify-start'}`
                }
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg 
                    ${msg.role === 'user'? 'bg-blue-500 text-white'
                    :'bg-white text-gray-800 shadow'
                    }
                  `}
                >
                  <p>{msg.content}</p>
                </div>
              </div>
            ))
          )
        }
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 shadow px-4 py-2 
              rounded-lg max-w-xs lg:max-w-md
            ">
              <p>DeepSeek正在思考....</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 bg-white border-t">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input 
            type="text" 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='输入你的消息'
            className="flex-1 p-2 border rounded-lg focus:outline-none 
            focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg 
            hover: bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
          >
            {isLoading?'发送中...':'发送...'}
          </button>
        </form>
      </div>
    </div>
  )
}
