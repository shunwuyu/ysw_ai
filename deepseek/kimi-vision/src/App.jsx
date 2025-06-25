import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [imgBase64Data, setImgBase64Data] = useState('')
  const isValid = useMemo(() => imgBase64Data !== '', [imgBase64Data]);
  const updateBase64Data = (e) => {
    setImgBase64Data('');
    const file = e.target.files?.[0]; 
    if (!file) { return; }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { 
      setImgBase64Data(reader.result); 
    };
  }

  const update = async () => {
    if(!imgBase64Data) { return; }
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions'; 
    const headers = { 'Content-Type': 'application/json', 
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}` };
    setContent('思考中...')
    const response = await fetch(
      endpoint, 
      { 
        method: 'POST', 
        headers: headers, 
        body: JSON.stringify(
          { model: 'moonshot-v1-8k-vision-preview', 
            messages: [ { role: 'user', 
              content: [{ type: "image_url",
                 image_url: { "url": 
                  imgBase64Data, }, }, 
                  { type: "text", text: "请描述图片的内容。", 

                  }
                ] 
              } 
            ], 
        stream: false, }) });
    const data = await response.json();
    setContent(data.choices[0].message.content)
  }
  return (
    <div className="container">
      <div>
        <label>文件：</label>
        <input 
          type="file" 
          className='input'
          accept=".jpg, .jpeg, .png, .gif"
          onChange={updateBase64Data}
        />
        <button onClick={update} disabled={!isValid}>提交</button>
      </div>
      <div className="output">
        <div className="preview">
          {
            imgBase64Data && <img src={imgBase64Data} alt="preview"/>
          }
        </div>
        <div>
        {content}
        </div>
      </div>
    </div>
  )
}

export default App
