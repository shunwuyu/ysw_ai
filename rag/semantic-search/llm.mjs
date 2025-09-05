import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config({
    path: '.env'
});

export const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL: process.env.OPENAI_BASE_URL
})

// 计算向量的余弦相似度
export const cosineSimilarity = (v1, v2) => {
    // 计算向量的点积
    const dotProduct = v1.reduce((acc, curr, i) => acc + curr * v2[i], 0);
  
    // 计算向量的长度
    const lengthV1 = Math.sqrt(v1.reduce((acc, curr) => acc + curr * curr, 0));
    const lengthV2 = Math.sqrt(v2.reduce((acc, curr) => acc + curr * curr, 0));
  
    // 计算余弦相似度
    const similarity = dotProduct / (lengthV1 * lengthV2);
  
    return similarity;
  };