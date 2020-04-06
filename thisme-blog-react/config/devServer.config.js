const config = require('./webpack.config');
const OpenBrowserPlugin = require('@juexro/open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const path = require('path');
const resolve = str => path.resolve(__dirname, str);

const devServer = {
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true,
        inline: true,
        port: 8888,
        contentBase: 'static/index.html',

    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/env',
                                '@babel/typescript',
                                '@babel/react',
                            ],
                            cacheDirectory: true,
                            plugins: [
                                'react-hot-loader/babel',
                                [
                                    "import",
                                    {
                                        libraryName: "antd",
                                        style: "css"
                                    }
                                ],
                            ]
                        }
                    },
                ]

            },
            {
                test: /\.(c|le)ss$/i,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                        }
                    },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            },
            {
                test: /\.(ttf|eto|woff|woff2)$/i,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m(d|arkdown)$/i,
                use: [
                    {
                        loader: resolve('./loader/md-loader')
                    }
                ]
            }

        ]
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/index.html'
        }),
        new AntdDayjsWebpackPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8888'
        }),
    ]
};


module.exports = {...config, ...devServer };