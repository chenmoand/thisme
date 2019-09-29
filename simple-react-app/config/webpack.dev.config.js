const config = require('./webpack.config');

const path = require('path');


const devConfig = {
    mode: 'development',
};

module.exports = {...config, ...devConfig };
