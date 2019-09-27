const config = require('./webpack.config');


const devServer = {
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        inline: true,
        port: 8080,
        contentBase: 'static/index.html',

    }
};

module.exports= {...config, ...devServer };