"use client";
import type {
  Message
} from 'ai';
import ReactMarkdown from 'react-markdown';

interface ChatOUtputProps {
  messages: Message[];
  status: string
}

export default function ChatOutput({
  messages,
  status
}:ChatOUtputProps) {
  return (
    <>
      {
        messages.map((message, index) => 
          message.role === "user" ?(
            <UserChat key={index} content={message.content} />
          ):(
            <AssistantChat key={index} content={message.content} />
          )
        )
      }
      {
        status === "submitted" && (
          <div className="text-muted-foreground">Generating response...</div>
        )
      }
      {
        status === "error" && (
          <div className="text-red-500">An error occurred.</div>
        )
      }
    </>
  )
}

const UserChat = ({ content }: { content: string}) => {
  return (
    <div className="bg-muted rouned-2xl ml-auto max-w-[80%] w-fit px-3 py-2 mb-6">
      {content}
    </div>
  ) 
}

const AssistantChat = ({ content }: {content: string}) => {
  return (
    <div className="pr-8 w-full mb-6">
      <ReactMarkdown
        components={{
          a: ({href, children}) => (
            <a target="_blank" href={href}>{children}</a>
          )
        }}
      >{content}</ReactMarkdown>
    </div>
  )
}