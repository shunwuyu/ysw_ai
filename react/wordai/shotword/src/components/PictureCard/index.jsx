import React, {
  useState
} from 'react';
import './style.css'

const PictureCard =  () => {
  const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png');
  const [word, setWord] = useState("");

  const updateImageData = (e) => {
    // html5 的文件上传功能 
    // 可选链操作符
    // const file = e.target.files?e.target.files[0]:null
    const file = e.target.files?.[0];
    if (!file) { return; }
    console.log(file);
    // 图片预览 I/O操作 异步 
    return new Promise((resolve, reject) => {
      // html5 
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(reader.result);
        // 响应式业务
        setImgPreview(reader.result);
      } 
    })
  }
  return (
    <div className="card">
      <input 
        id="selectImage" 
        type="file" 
        accept=".jpg,.jpeg,.png,.gif"
        onChange={updateImageData}
      />
      <label 
        className="upload"
        htmlFor="selectImage">
          <img src={imgPreview} alt="preview" />
      </label>
      {/* template -> JSX -> { 数据绑定} -> 响应式-》单词业务 */}
      <div className="word">{word}</div>
    </div>
  )
}

export default PictureCard;
