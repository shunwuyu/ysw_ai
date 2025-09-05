import {
    NextRequest,
    NextResponse
} from "next/server";
import {
    ensureUploadDirs,
    mergeChunks,
    readMeta,
    writeMeta,
} from "@/lib/upload-server";

export async function POST(req: NextRequest) {
    const {
        fileHash,
    } = await req.json();
    ensureUploadDirs(fileHash);

    const meta = readMeta(fileHash);
    console.log(meta, '---------');
    if (!meta) {
        return NextResponse.json({
            error: "找不到meta"
        }, {
            status: 404
        });
    }

    const {
        fileName,
        totalChunks
    } = meta;

    const finalPath = await mergeChunks(fileHash, fileName, totalChunks);
    meta.complete = true;
    meta.finalPath = finalPath as string;
    writeMeta(fileHash, meta);
    return NextResponse.json({
        ok: true,
        finalPath
    })
}
