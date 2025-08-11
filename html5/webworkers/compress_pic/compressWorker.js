self.onmessage = async function(e) {
    const { imgData, quality = 0.8 } = e.data
    // console.log(imgData, quality, '--------');

    try {
        // 转成位图 base64 -> bitmap
        // blob 二进制
        // console.log(await fetch(imgData));
        // console.log((await fetch(imgData)).blob());
        const bitmap = await createImageBitmap(
            await (await fetch(imgData)).blob()
        );
        // 压缩前， base64 -> fetch -> blob -> bitmap
        // console.log(bitmap, '/////')
        // html5 canvas 画布  位图时少取一些像素
        // 可以画
        const canvas = 
            new OffscreenCanvas(bitmap.width, bitmap.height);
        // 在画之前，得到画画的句柄 2d 
        const ctx = canvas.getContext('2d');
        // 丛左上角开始画出来
        ctx.drawImage(bitmap, 0, 0);
        //canvas -> blob
        const compressedBlob = await canvas.convertToBlob(
        {
            type: 'image/jpeg',
            quality
        })
        const reader = new FileReader();
        reader.onloadend = () => {
            // console.log(reader.result);
            self.postMessage({
                success: true,
                data: reader.result
            })
        }
        reader.readAsDataURL(compressedBlob)
    } catch(err) {
        self.postMessage({
            success: false,
            error: err
        })
    }
}