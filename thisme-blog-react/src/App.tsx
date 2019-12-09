import * as React from 'react';
import {BackTop} from "antd";
import * as moment from "moment";
import {hot} from 'react-hot-loader/root';
import '@/assets/style/globle-index.less'
import {PageView} from "@/router/page-switch";
import TopMenu from "@/component/menu/TopMenu";
import PageBottom from "@/component/page-bottom";
import Configuration from "@/component/configuration";

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
            <PageBottom />
            <BackTop>
                <div className="ant-back-top-inner">TOP</div>
            </BackTop>
        </Configuration>
    )
};

/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
export default hot(App);