const config = require('./webpack.config');

const path = require('path');

const prodConfig = {
    mode: 'production',

};
// 合并两个config
module.exports= {...config, ...prodConfig };