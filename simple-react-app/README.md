# simple-react-app

> 为了避免降智攻击,请在运行或者编辑前保证你有```node``` 和```yarn``` 
>
> 这个帮你简化了不必要的操作, 这个是由```webpack```  + ```React``` + ```TypeScript``` 的产物, 至于出现问题可以提出,或者自行修改, 请最好遵守我分类的目录, 因为强迫症所以强迫症, 毕竟写着东西是给**自己**写的!!
>
> 这个可能有着一些BUG, 请参照我的完善[这里](../thisme-blog-react)的配置

#### Install

* ```yarn``` 安装好所有库

#### Command

* ```yarn start``` 启动服务默认端口8080
* ```yarn build:dev``` 开发者模式构建
* ```yarn build:pord``` 生产环境构建(需要改index.html的js源)

#### Installed and Configuration 

* ```webpack``` 基础的配置都在config文件里面
* ```react-redux```  在 src/redux里面有配置,并且在test有样例
* ```moment``` 设置了中文
* ```antd``` 配置了按需加载
* ```Markdown``` 配置好了Markdown组件
* ```react-hot-loader``` 热部署范围在以**App.tsx**为基点

### Utils

* ```ComponentUtil``` 一个用于连接redux和router的工具类