const { CheckerPlugin } = require('awesome-typescript-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('@juexro/open-browser-webpack-plugin');

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
                    presets: ['@babel/env', '@babel/react'],
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel',["import", { libraryName: "antd", style: "css"}]]
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/typescript', '@babel/react'],
                            cacheDirectory: true,
                            plugins: ['react-hot-loader/babel',["import", { libraryName: "antd", style: "css"}]]
                        }
                    },
                    // {loader: 'awesome-typescript-loader'}
                ]

            },
            {
                test: /\.less?$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options:{
                            paths: [path.resolve(__dirname, 'node_modules')],
                        }
                    },
                ]
            },
            {
                test: /\.css?$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader',}
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
        new CheckerPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/index.html'
        }),
        new OpenBrowserPlugin({
            url : 'http://localhost:8080'
        })
    ]
};