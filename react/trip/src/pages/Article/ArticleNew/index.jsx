import styles from './new.module.css';
import {
    useState,
    useRef
} from 'react'
const ArticleNew = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState("");
    // 存储对象功能
    const mediaRecordRef = useRef(null);
    // 存储一些数据
    const chunksRef = useRef([]);
    const blobToBase64 = (blob) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result.split(',')[1]); // 只取 base64 数据部分
          reader.readAsDataURL(blob);
        });
      };
    const handleStartRecording = async () => {
        console.log('aaa');
        try {
            // html5 api BOM 
            const stream = await navigator.mediaDevices.getUserMedia({
                audio:true
            })
            console.log(stream, '?????')
            mediaRecordRef.current = new MediaRecorder(stream);
            chunksRef.current = [];
            mediaRecordRef.current.start();
            mediaRecordRef.current.ondataavailable = (e) => {
                console.log(e, '-----');
                if (e.data.size > 0) {
                    console.log(e.data);
                    chunksRef.current.push(e.data);
                }
                
            }
            
            mediaRecordRef.current.onstop = async () => {
                // console.log(chunksRef.current);
                // 二进制blob 数组传递给大模型
                const blob = new Blob(chunksRef.current, {
                    type: 'audio/webm'
                });
                const base64Audio = await blobToBase64(blob);
                console.log(base64Audio);
                const transcript = await transcribeAudio(
                    base64Audio
                );

            }
        } catch(err) {
            
        }
    }
    const transcribeAudio = async (base64Audio) => {
        
    } 

    const handleStopRecording = () => {
        console.log('bbbb');
        mediaRecordRef.current?.stop();
    }
    const handleSvaeDraft = () => {}
    const handlePublish = () => {}
    return (
        <div className={styles.container}>
            <h2>发表文章</h2>
            <input 
                className={styles.input}
                type="text" 
                placeholder="请输入标题"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div className={styles.textareaWrapper}>
                <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="请输入内容"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <button
                    className={styles.micButton}
                    onMouseDown={handleStartRecording}
                    onMouseUp={handleStopRecording}
                    title="按住录音"
                >
                🎤
                </button>
            </div>
            <div className={styles.buttonGroup}>
                <button 
                onClick={handleSvaeDraft}
                className={`${styles.button} ${styles.save}`}>保存草稿</button>
                <button 
                onClick={handlePublish}
                className={`${styles.button} ${styles.publish}`}>发布</button>
            
            </div>
        </div>
    )
}
export default ArticleNew