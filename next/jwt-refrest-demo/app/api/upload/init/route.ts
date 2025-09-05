import {
    NextRequest,
    NextResponse
} from 'next/server';
import { 
    ensureUploadDirs,
    fileAlreadyExist,
    listUploadedChunks,
    readMeta,
    writeMeta
} from '@/lib/upload-server';

export async function POST(req: NextRequest) {
    const { fileHash, fileName, fileSize, chunkSize, totalChunks } = await req.json();

    ensureUploadDirs(fileHash);
    if (fileAlreadyExist(fileHash, fileName)) {
        return NextResponse.json({
            complete: true,
            uploaded: [],
            message: "秒传;文件已存在"
        })
    }

    // 断点续传
    const existed = readMeta(fileHash); // 已上传 都可以
    const uploaded = listUploadedChunks(fileHash);
    const meta = {
        fileName,
        fileSize,
        chunkSize,
        totalChunks,
        uploadedChunks: uploaded,
        complete: false
    }

    writeMeta(fileHash, { ...(existed || {}), ...meta })

    return NextResponse.json({
        complte: false,
        uploaded,
        message: "初始化成功"
    })

}