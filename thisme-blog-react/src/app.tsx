import '@/assets/style/globle-index.less';

import Configuration from '@/component/configuration';
import TopMenu from '@/component/menu/top-menu';
import PageBottom from '@/component/page-bottom';
import { PageView } from '@/router/page-switch';
import { whiteLogo } from '@/util/LogUtil';
import { BackTop } from 'antd';
import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import dajs from 'dayjs';
import 'dayjs/locale/zh-cn';

dajs.locale('zh-cn');
/**
 * 系统URL默认以/的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    whiteLogo();
    return(
        // @ts-ignore
        <Configuration
            domain={"new.brageast.com"}
        >
            <TopMenu />
            <PageView />
            <PageBottom />
            <BackTop>
                <div className="ant-back-top-inner">UP</div>
            </BackTop>
        </Configuration>
    )
};

/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
export default hot(App);