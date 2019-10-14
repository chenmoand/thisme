const config = require('./webpack.config');

const devConfig = {
    mode: 'development',
};

module.exports = {...config, ...devConfig };
