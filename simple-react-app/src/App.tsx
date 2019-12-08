import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Configuration from "./component/configuration";

/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    return(
        <Configuration
            url={"https://brageast.com"}
        >
            请自行检测组件,或者配置,这个只是简单的提示,
            项目真正入口是./src/App.tsx 
        </Configuration>
    )
};

/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
export default hot(App);