import path from 'path';

function htmlMinifyPlugin() {
  let isBuild = false; // 标记是否为构建模式
  return {
    name: 'html-minify',
    config(config, {command}) {
      // npm run build
      isBuild = command === 'build';
      if (!isBuild) {
        console.log('[html-minify] 开发模式，跳过HTML压缩')
      }
    },
    // index.html 转换
    transformIndexHtml: {
      order: 'post',
      async transform(html, { bundle }) {
        if (!isBuild || !bundle) return html;

        console.log('[html-minify]正在压缩HTML....');
        const minifiedHtml = html
          // \s 空格 \S 非空字符
          // html注释不需要
          .replace(/<!--[\s\S]*?-->/g, "")
          .replace(/\s+/g, '')
          .replace(/> </g, '><')
          // 溢出每一行开始结尾的空格 g 全局匹配
          // m 匹配多行 i 忽略大小写
          .replace(/^\s+|\s+$/gm, "")

        return minifiedHtml
      }
    },
    // 写入bundle 构建完成后执行
    writeBundle(options, bundle) {
      const outputDir = options.dir || 'dist';
      console.log(`[html-minify] HTML 压缩完成, 输出到${path.resolve(outputDir)}`)
    }
  }
}

export default htmlMinifyPlugin