const fs = require('fs');  // fs 帮助我们读取文件
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

// 模型 ollama 
// 给它喂私有知识库，不怕私有被外界大模型训练了
// 安全
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
})


const testQuestion="有多少们课程？"

function readCourseInfo() {
    try {
        const filePath = path.join(__dirname, "lesson.txt");
        console.log(filePath);
        return fs.readFileSync(filePath, 'utf8');
    } catch(error) {
        console.error("读取课程信息文件失败:", error);
        return ""
    }
}

async function answerQuestion(question) {
    // 检索
    const courseInfo = readCourseInfo();
    console.log(courseInfo);
    if (!courseInfo) {
        return '无法读取课程信息，请确保lesson.txt文件存在且有内容';
    }   
    try {
        const prompt = `
            你是一个课程助手，请根据以下课程信息回答问题。
            只回答与课程信息相关的内容。如果内容与课程无关，
            请礼貌地说明你只能回答与课程相关的问题。

            课程信息：
            ${courseInfo}

            问题：${question}
        `

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "system",
                    content: "你是一个专业的课程助手，请根据课程信息回答问题。"
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.1,
        })
        return response.choices[0].message.content;
    } catch(err) {
        console.error('调用OpenAI API 失败：', error);
        return "抱歉，处理您的问题时出现错误"
    }
}

answerQuestion(testQuestion)
    .then(answer => {
        console.log("问题：", testQuestion);
        console.log("回答：", answer);
    })