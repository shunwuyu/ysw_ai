import {
  embed,
  streamText
} from 'ai';
import {
  createOpenAI
} from '@ai-sdk/openai';
import {
  createClient
} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL??"",
  process.env.SUPABASE_KEY??""
);

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
})

async function generateEmbedding(message: string) {
  return embed({
    model: openai.embedding('text-embedding-3-small'),
    value: message
  })
}

async function fetchRelevantContext(embedding: number[]) {
  const {
    data, 
    error
  } = await supabase.rpc("get_relevant_chunks", {
    query_vector: embedding,
    match_threshold: 0.7,
    match_count: 3
  })

  if (error) throw error;

  return JSON.stringify(
    data.map((item:any) => `
      Source: ${item.url},
      Date Updated: ${item.date_updated}
      Content: ${item.content}  
    `)
  ) 
}

const createPrompt = (context: string, userQuestion: string) => {
  return {
    role: "system",
    content: `
    You are a helpful assistant that provides information about the latest smartphones. 
    Use the following context to answer questions: 
    ----------------
    START CONTEXT
    ${context}
    END CONTEXT
    ----------------
    
    Return the answer in markdown format including relevant links and the date when the information was last updated.
    Where the above context does not provide enough information relating to the question provide an answer based on your own knowledge but caveat it so the user
    knows that it may not be up to date.
    If the user asks a question that is not related to a smartphone, politely inform them that you can only answer questions about smartphones.
    
    ----------------
    QUESTION: ${userQuestion}
    ----------------
    `
  }
}


export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages.at(-1).content;
    // embedding
    const { embedding } = await generateEmbedding(latestMessage);
    // console.log(embedding);
    // 相似度计算
    const context = await fetchRelevantContext(embedding);
    const prompt = createPrompt(context, latestMessage);
    // console.log(prompt);
    const result = streamText({
      model: openai("gpt-4o-mini"),
      messages: [prompt, ...messages]
    });
    return result.toDataStreamResponse();
  } catch(err) {
    throw err
  }
}