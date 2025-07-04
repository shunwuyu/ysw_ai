import { useState } from 'react'
import './App.css'
import PictureCard from './components/PictureCard';

function App() {
  const userPrompt = `分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇。

  返回JSON数据：
  { 
  "image_discription": "图片描述", 
  "representative_word": "图片代表的英文单词", 
  "example_sentence": "结合英文单词和图片描述，给出一个简单的例句", 
  "explaination": "结合图片解释英文单词，段落以Look at...开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句", 
  "explaination_replys": ["根据explaination给出的回复1", "根据explaination给出的回复2"]
  }`;
  // 上传图片的状态 
  const [word, setWord] = useState('请上传图片');
  // 例句
  const [sentence, setSentence] = useState('')
  // 解释
  const [explainations, setExplainations] = useState([]);
  const [expReply, setExpReply] = useState([])
  // 英文声音
  const [audio, setAudio] = useState('');
  // 详细内容展开
  const [detailExpand, setDetailExpand] = useState(false);
  const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png')
  const uploadImg = async (imageData) => {
    setImgPreview(imageData);
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions';
    const headers = { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${import.meta.env.VITE_KIMI_API_KEY}` 
    };
    setWord('分析中...');
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        model: 'moonshot-v1-8k-vision-preview',
        messages: [ 
          { 
            role: 'user', 
            content: [
              { 
                type: "image_url", 
                image_url: { "url": imageData, }, 
              }, 
              { type: "text", text: userPrompt, 

              }] 
            }],
            stream: false
        })
    })
    const data = await response.json();
    const replyData = JSON.parse(data.choices[0].message.content);
    // console.log(replyData);
    setWord(replyData.representative_word);
    setSentence(replyData.example_sentence);
    setExplainations(replyData.explaination.split('\n'))
    setExpReply(replyData.explaination_replys);
  }

  return (
    <div className="container">
      <PictureCard
        audio={audio}
        word={word}
        uploadImg={uploadImg}
      />
      <div className="output">
        <div>{sentence}</div>
        <div className="details">
          <button onClick={() => setDetailExpand(!detailExpand)}>Talk about it</button>
          {
            detailExpand ? (
              <div className="expand">
                <img src={imgPreview} alt="preview"/>
                {
                  explainations.map((explaination, index) => (
                    <div key={index} className="explanation">
                      {explaination}
                    </div>
                  ))
                }
                {
                  expReply.map((reply, index) => (
                    <div key={index} className="reply">
                      {reply}
                    </div>
                  ))
                }
              </div>
            ): (
              <div className="fold" />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
