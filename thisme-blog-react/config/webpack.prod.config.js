const config = require('./webpack.config');

const path = require('path');


const prodConfig = {
    mode: 'production',

};

module.exports= {...config, ...prodConfig };