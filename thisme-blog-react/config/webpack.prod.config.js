const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
    entry: ['react-hot-loader/patch', './src/mode/prod'],
    mode: 'production',
    plugins: [
        ...config.plugins,
        new CleanWebpackPlugin(),
        new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
        }),
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

module.exports = {...config, ...prodConfig };