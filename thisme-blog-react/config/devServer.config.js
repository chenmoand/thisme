const config = require('./webpack.config');

const devServer = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        hot: true,
        inline: true,
        port: 8888,
        contentBase: 'static/index.html',

    },
};


module.exports = {...config, ...devServer };