import { 
  useState,
  useRef,
  useEffect
} from 'react'
import Progress from './components/Progress';
import AudioPlayer from './components/AudioPlayer';
import {
  SPEAKERS, 
  DEFAULT_SPEAKER
} from './constants'

function App() {
  // 界面状态
  // llm ready 大模型准备好了不？
  const [ready, setReady] = useState(null);
  // 按钮点击 防止多次点击
  const [disabled, setDisabled] = useState(false);
  // 进度条数组
  const [progressItems, setProgressItems] = useState([]);
  // 表单文本
  const [text, setText] = useState('I love Hugging Face!');
  // 音色
  const [selectedSpeaker, setSelectedSpeaker] = useState(DEFAULT_SPEAKER);
  const [output, setOutput] = useState(null);

  const worker = useRef(null);
  useEffect(() => {
    // 引入 transformer 
    // http://localhost:5173/worker.js
    worker.current = new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module'
    })

    const onMessageReceived = (e) => {
      // console.log(e, '来自主线程');
      switch(e.data.status) {
        case 'initiate':
          // llm ready 了吗？
          setReady(false);
          setProgressItems(prev => [...prev, e.data])
        break;
        case 'progress':
          // console.log(e.data)
          setProgressItems(
            prev => prev.map(item => {
              if (item.file === e.data.file) {
                return {
                  ...item,
                  progress: e.data.progress
                }
              }
              return item
            })
          )
        break;
        case 'done':
        setProgressItems(
          prev => prev.filter(item => item.file !== e.data.file)
        )
        break;
        case 'ready':
          setReady(true);
        break;
        case 'complete':
          setDisabled(false);
          const blobUrl = URL.createObjectURL(e.data.output);
          // console.log(blobUrl);
          setOutput(blobUrl);
        break;
      }
    }
    worker.current.onmessage = onMessageReceived;

    return () => worker.current.removeEventListener('message', 
      onMessageReceived
    )
  }, [])

  const handleGenerateSpeech = () => {
    setDisabled(true);
    worker.current.postMessage({
      text: text,
      speaker_id: selectedSpeaker
    });
  }

  const isLoading = ready === false;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* llm 初始化 */}
      <div 
      className="absolute z-50 top-0 left-0 w-full h-full transition-all 
      px-8 flex flex-col justify-center text-center"
      style={{
        opacity: isLoading? 1 : 0,
        pointerEvents: isLoading? 'all': 'none',
        background: 'rgba(0,0,0,0.9)',
        backdropFilter: 'blur(8px)'
      }}
      >
        {
          isLoading && (
            <label className="text-white text-xl p-3">
              Loading models... (only run once)
            </label>
          )
        }
        {
          progressItems.map(data => (
            <div key={`${data.name}/${data.file}`}>
              <Progress 
                text={`${data.name}/${data.file}`} 
                percentage={data.progress}
              /> 
            </div>
          ))
        }
      </div>
      {/* tts 功能区 */}
      <div className="bg-white p-8 rounded-lg w-full max-w-xl m-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-1 text-center">
          In browser Text To Speech(端模型)
        </h1>
        <h2 className="text-base font-medium text-gray-700 mb-2 text-center">
          Made with <a> Transfromer.js</a>
        </h2>
        <div className="mb-4">
          <label htmlFor="text" className="block text-sm font-medium text-gray-600">
            Text
          </label>
          <textarea id="text"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            placeholder='Enter text here'
            value={text}
            onChange={(e) => {
              console.log(e.target.value);
              setText(e.target.value)
            }}
          >
          </textarea>
        </div>
        <div className="mb-4">
          <label 
            htmlFor="speaker" 
            className="block text-sm font-medium text-gray-600"
          >
          </label>
          <select 
            id="speaker"
            className="border border-gray-300 rounded-md p-2 w-full"
            value={selectedSpeaker}
            onChange={(e)=>setSelectedSpeaker(e.target.value)}
          >
          {
            // 可迭代对象快速转换成数组 [[key:val],[key1:value1],[key2:value1]]
            Object.entries(SPEAKERS).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))
          }
          </select>
        </div>
        <div className="flex justify-center">
          <button
            className={`${disabled? 
              'bg-gray-400 cursor-not-allowed':
              'bg-blue-500 hover-bg-blue-600'
            } text-white rouned-md py-2 px-4`}
            onClick={handleGenerateSpeech}
            disabled={disabled}
          >
            {disabled? 'Generating...': 'Generate'}
          </button>
        </div>
        {
          output && <AudioPlayer 
            audioUrl={output}
            mimeType={"audio/wav"}
          />
        }
      </div>
    </div>
  )
}

export default App
