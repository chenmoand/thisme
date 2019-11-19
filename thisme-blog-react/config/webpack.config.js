// const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('@juexro/open-browser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const path = require('path');

/**
 * 这是所有webpack的所有父类
 * @author chenmo
 */
module.exports = {
    entry: ['react-hot-loader/patch', './src'],
    output:{
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions : ['.ts', '.tsx', '.js', '/jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        // ["rsuite", { "style": true}],
                        '@babel/env',
                        '@babel/react',
                    ],
                    cacheDirectory: true,
                    plugins: [
                        'react-hot-loader/babel',
                        ["import", { libraryName: "antd", style: "css"}]
                    ]
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                // ["rsuite", { "style": true}],
                                '@babel/env',
                                '@babel/typescript',
                                '@babel/react',
                            ],
                            cacheDirectory: true,
                            plugins: [
                                'react-hot-loader/babel',
                                ["import", { libraryName: "antd", style: "css"}],
                            ]
                        }
                    },
                ]

            },
            {
                test: /\.less?$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options:{
                            // paths: [path.resolve(__dirname, 'node_modules')],
                            javascriptEnabled: true,
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader',},
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
                test: /\.(ttf|eto|woff|woff2|svg)$/,
                use:[
                    'file-loader'
                ]
            }

        ]
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/index.html'
        }),
        new OpenBrowserPlugin({
            url : 'http://localhost:8888'
        }),
        new CompressionPlugin({
            filename: '[path].br[query]',
            algorithm: 'brotliCompress',
            test: /\.(js|css|html|svg)$/,
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ]
};