import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "@/app";
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import {BrowserRouter as Router} from 'react-router-dom';
import {ProdStore as Store} from "@/redux/store";

/**
 * 生产环境入口
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