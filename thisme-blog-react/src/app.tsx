import * as React from 'react';
import '@/assets/style/globle-index.less';

import {Body} from '@/controller/router';
import {BackTop} from 'antd';
import {hot} from 'react-hot-loader/root';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {Bottom, TopMenu, Configuration} from '@/component/template/final';

dayjs.locale('zh-cn');


/**
 * 注意: 这个类不是入口, 入口在src/mode目录下分别的
 * dev和pord文件夹里面, 模式不同随对应组件的加载也不同
 *
 */
const App: React.FC = () => {

    return (
        <Configuration
            isLogoLog={true}
        >
            <TopMenu/>
            <Body/>
            <Bottom/>
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