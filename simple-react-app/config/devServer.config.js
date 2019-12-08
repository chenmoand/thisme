const config = require('./webpack.config');
const OpenBrowserPlugin = require('@juexro/open-browser-webpack-plugin');

const devServer = {
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true,
        inline: true,
        port: 8888,
        contentBase: 'static/index.html',

    },
    plugins: [
        ...config.plugins,
        new OpenBrowserPlugin({
            url: 'http://localhost:8888'
        }),
    ]
};


module.exports = {...config, ...devServer };