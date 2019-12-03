const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const prodConfig = {
    entry: ['react-hot-loader/patch', './src/prod'],
    mode: 'production',
    plugins: [
        ...config.plugins,
        new CleanWebpackPlugin(),
    ]
};

module.exports = {...config, ...prodConfig };