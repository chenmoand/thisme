import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import Configuration from "./component/configuration";
import {BackTop} from "antd";
import TopMenu from "./component/menu/TopMenu";
import {PageView} from "./router/page-switch";
import PageBottom from "./component/page-bottom";
import '@/assets/style/globle-index.less'

import * as moment from "moment";

moment.locale('zh-cn'); // 设置为中文

/**
 * 系统URL默认以/的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    return(
        <Configuration
            domain={"new.brageast.com"}
        >
            <TopMenu />
            <PageView />
            <BackTop /> {/*回到顶部组件*/}
            <PageBottom />
        </Configuration>
    )
};

/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
export default hot(App);