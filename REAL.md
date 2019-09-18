> 解决方法结合网络上方法和自己的实践来整合的

### Q: 自己的```webpack```如何让```antd```按需加载

1. ``` yarn add babel-plugin-import -D``` 下载官方插件
2. ```yarn add @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript -D ```安装babel
3. 打开自己的webpack.config.js文件 在 ```module { rules:[...] }``` 追加修改
```javascript {
			{   
				test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react'],
                    cacheDirectory: true,
                    plugins: [["import", { libraryName: "antd", style: "css"}]]
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
                            plugins: [["import", { libraryName: "antd", style: "css"}]]
                        }
                    },
                ]

            }, 
```

4. 如果发现上面方法不行,请保证你的webpack 和 babel 版本和依赖是否下载完毕