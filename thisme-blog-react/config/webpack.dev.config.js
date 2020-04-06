const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const devConfig = {
    entry: [
        // 'react-hot-loader/patch',
        './src/mode/dev'
    ],
    mode: 'production',
    plugins: [
        ...config.plugins,
        new CleanWebpackPlugin(),
        new CompressionPlugin({
            filename: '[path].br[query]',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            compressionOptions: {level: 11},
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ]
};
// 合并两个config
module.exports = {...config, ...devConfig };
