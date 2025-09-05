// components/ImageUploader.tsx
'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useDropzone } from 'react-dropzone';

interface ImageUploaderProps {
  onGenerateReport: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onGenerateReport }) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const maxSize = 5 * 1024 * 1024; // 5MB

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      if (!file.type.match('image/*')) {
        alert('请上传图片文件');
        return;
      }
      if (file.size > maxSize) {
        alert('图片大小不能超过 5MB');
        return;
      }
      setFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    maxFiles: 1,
    maxSize,
    onDrop,
  });

  const handleGenerateReport = () => {
    if (file) {
      onGenerateReport(file);
    } else {
      alert('请先上传一张照片');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">上传你的📸照片</h2>
      <Card className="w-full max-w-sm">
        <CardContent className="p-4">
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
            <input {...getInputProps()} />
            {preview ? (
              <img src={preview} alt="Uploaded" className="w-full h-auto rounded-lg" />
            ) : (
              <p className="text-gray-500">拖拽图片到这里，或点击选择</p>
            )}
          </div>
        </CardContent>
      </Card>
      <Button variant="outline" onClick={handleGenerateReport} className="mt-4 bg-pink-500 text-white">
        生成报告
      </Button>
    </div>
  );
};

export default ImageUploader;