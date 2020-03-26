const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

//打包检测工具
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const devMode = process.env.NODE_ENV === 'development';

const resolve = str => path.resolve(__dirname, str);

/**
 * 这是所有webpack的所有父类
 * @author chenmo
 */
module.exports = {
    entry: ['react-hot-loader/patch', './src/mode/dev'],
    output: {
        path: resolve('../build'),
        filename: devMode ? 'js/[name].js' : 'js/[name].[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@': path.join(__dirname, '..', 'src'),
        }
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: devMode,
                        },
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
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: "images/[name].[hash].[ext]"
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(ttf|eto|woff|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: devMode ? "fonts/[name].[ext]" : "fonts/[contenthash].[ext]"
                        }
                    }
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
        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
            ignoreOrder: false,
        }),
        new AntdDayjsWebpackPlugin(),
        // new WebpackBundleAnalyzer()
    ],
};