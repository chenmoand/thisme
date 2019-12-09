import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "@/app";
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import {HashRouter as Router} from 'react-router-dom';
import {DevStore as Store} from "@/redux/store";

/**
 * 开发环境入口
 * @author chenmo
 */
const Init: React.FC = () => {

    return (
        <Provider store={Store}>
            <ConfigProvider locale={zhCN}>
                <Router>
                    <App/>
                </Router>
            </ConfigProvider>
        </Provider>
    )
};
ReactDOM.render(
    <Init/>,
    document.getElementById('init')
);