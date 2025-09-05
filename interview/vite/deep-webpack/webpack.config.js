const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: '[name].[contenthash].js', //hash 更新时，
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            [
                                '@babel/preset-typescript', {

                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"]
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'assets/images/[name].[hash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ],
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    optimization: {
        usedExports: true, // tree shaking  注释，没有使用的代码
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test:/[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    priority: 10,
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 1,
                    enforce: true
                }
            }
        }
    }
}