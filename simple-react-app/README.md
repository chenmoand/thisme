# simple-react-app 简单react脚手架

#### 如何安装

``` txt
#第一步
yarn 或者 npm install
#第二步
自我整理目录结构(雾), 本项目采用TypeScript + React Hook 的方式, 并在里面存有例子,确保会用Tsx
```

#### 指令列表

| 名称             | 作用                                                        |
| ---------------- | ----------------------------------------------------------- |
| ```yarn start``` | 启动devServer,默认端口8888                                  |
| ```build:dev```  | 项目的dev模式,是以prod模式构建(入口**src/index.tsx**)       |
| ```build:prod``` | 项目的prod模式,是以prod模式构建(入口**src/prod/index.tsx**) |

#### Installed and Configuration 

* ```webpack``` 基础的配置都在config文件里面
* ```react-redux```  在 src/redux里面有配置,并且在test有样例
* ```moment``` 设置了中文
* ```antd``` 配置了按需加载
* ```Markdown``` 配置好了Markdown组件
* ```react-hot-loader``` 热部署范围在以**App.tsx**为基点
