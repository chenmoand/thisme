const config = require('./webpack.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const devConfig = {
    mode: 'development',
    plugins: [
        ...config.plugins,
        new CleanWebpackPlugin(),
    ]
};

module.exports = {...config, ...devConfig };
