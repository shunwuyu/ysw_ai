import {
    client,
    cosineSimilarity
} from './llm.mjs';
import fs from 'fs/promises';

const inputFilePath = "./data/posts_with_embedding.json";
const data = await fs.readFile(inputFilePath, "utf-8");
const posts = JSON.parse(data);

// 向量  cosine函数  文本语义检索
// 你好  hello
// LIKE 文本的检索

const response = await client.embeddings.create({
    model: 'text-embedding-ada-002',
    input: `前端框架相关内容`
});

const {
    embedding
} = response.data[0];

const results = posts.map(item => ({
    ...item,
    similarity: cosineSimilarity(embedding, item.embeddings)
    }))
    .sort((a, b) => a.similarity - b.similarity)
    .reverse()
    .slice(0, 3)
    .map((item, index) => `${index + 1}.${item.title}, ${item.category}`)
    .join('\n');

console.log(results);