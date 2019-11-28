const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const prodConfig = {
    mode: 'production',
    plugins: [
        ...config.plugins,
        new CleanWebpackPlugin(),
    ]
};
// 合并两个config
module.exports = {...config, ...prodConfig };