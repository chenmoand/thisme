# simple-react-app

> 为了避免降智攻击,请在运行前保证你有```node``` 和```yarn``` 
>
> 这个帮你简化了不必要的操作, 这个是由```webpack```  + ```React``` + ```TypeScript``` 的产物, 至于出现问题可以提出,或者自行修改

#### Command

* ```yarn start``` 启动服务默认端口8080
* ```yarn build:dev``` 开发者模式构建
* ```yarn build:pord``` 生产环境构建(需要改index.html的源)

#### Installed and Configuration

* ```webpack``` 基础的配置都在config文件里面
* ```react-redux```  在 src/redux里面有配置,并且在test有样例
* ```moment``` 设置了中文
* ```antd``` 配置了按需加载
* ```Markdown``` 配置好了Markdown组件
* ```react-hot-loader``` 热部署范围在以App.tsx为基点