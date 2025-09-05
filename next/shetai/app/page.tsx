"use client";
import type { Metadata } from 'next'
import ImageUploader from '@/components/ImageUploader';
import {
  useState
} from 'react';

// export const metadata: Metadata = {
//   title: "AI夜市·看看舌苔Demo",
//   description: 'AI夜市: 一个AI看舌苔👅的Demo应用，大模型采用的阿里通义千问qwen-plus（用于文本生成）+ qwen-vl-max（用于图像理解）。',
//   // openGraph 就是控制你分享链接时，别人看到的“封面图、标题、描述”的方式。
//   openGraph: {
//     title: 'AI夜市·看看舌苔Demo',
//     description: 'AI夜市: 一个AI看舌苔👅的Demo应用...',
//   }
// }

export default function Home() {
  const [type, setType] = useState("upload")
  const handleGenerateReport = (file:File) => {
    console.log(file)
  }
  return (
    <div className="ai-shetai_page h-screen">
      <main className="h-full flex">
        <div className="flex">
          <img
            className="h-screen"
            style={{"maxWidth": "fit-content"}}
            src="/images/ai-girl-shetou.png"
            alt="doctor-girl"
          />
        </div>
        <div className="flex-grow h-full overflow-y-auto p-8 lg:px-16 lg:py-14">
          <div className="max-w-2xl m-auto">
            <h2
              className="flex items-center text-3xl lg:text-5xl text-slate-800 font-bold"
            >
              <span>AI·看看舌苔</span>
            </h2>
            <p className="text-sm mt-4 text-slate-700">
            一个AI看舌苔👅的Demo应用，大模型采用的阿里通义千问qwen-plus（用于文本生成）
            + qwen-vl-max（用于图像理解）。
            </p>
            <p className="text-sm mt-0 text-slate-700">
            大模型Token很贵，需充值一丢丢token进行体验😚。你如果是开发者👨‍💻，也可以获取源代码自行部署，目前各大模型都有免费token!
            </p>
            <div className="bg-white mt-8 rounded-lg p-4 max-w-full lg:max-w-2xl">
              {
                type === 'upload' && <ImageUploader onGenerateReport={handleGenerateReport}/>
              }
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
