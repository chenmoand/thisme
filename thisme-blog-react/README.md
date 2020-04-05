# thisme-blog-react 

#### 如何安装

``` txt
#第一步
yarn 或者 npm install
#第二步
自我整理目录结构(雾), 本项目采用TypeScript + React Hook 的方式, 并在里面存有例子,确保会用Tsx
```

#### 指令列表

| 名称             | 作用                                                         |
| ---------------- | ------------------------------------------------------------ |
| ```yarn start``` | 启动devServer,默认端口8888                                   |
| ```build:dev```  | 项目的dev模式,是以prod模式构建(入口**src/mode/pord/index.tsx**) |
| ```build:prod``` | 项目的prod模式,是以prod模式构建(入口**src/prod/index.tsx**)  |

#### 目录结构

```txt
|-- build [项目构建生成目录]
|   |-- css [构建样式目录]
|   |-- fonts [构建字体目录]
|   |-- images [构建图片目录]
|   `-- js [构建js目录]
|-- config [配置目录]
|   |-- lib [脚本目录]
|   `-- loader [webpack自定义Loader目录]
|-- src [代码目录]
|   |-- assets [静态资源目录]
|   |   |-- img [图片目录]
|   |   |-- json [json目录]
|   |   |-- markdown [文档目录]
|   |   `-- style [样式目录]
|   |       `-- font [字体目录]
|   |-- component [组件目录]
|   |   |-- article [文字组件]
|   |   |-- editor [编辑组件]
|   |   |   `-- markdown [markdown组件]
|   |   |-- final [不会复用的组件]
|   |   |   `-- menu [菜单组件]
|   |   |-- interface [声明信息组件]
|   |   |-- template [模板组件]
|   |   `-- util [工具类]
|   |-- controller [控制器目录]
|   |   `-- mapping [控制器渲染组件]
|   |-- mode [模式目录]
|   |   |-- dev [开发模式入口]
|   |   `-- prod [生产模式入口]
|   |-- redux [状态目录]
|   |   `-- status [状态组件]
|   `-- test [测试组件]
`-- static [静态目录]
```

通过```tree -d -I node_modules > list.txt``` 指令生成