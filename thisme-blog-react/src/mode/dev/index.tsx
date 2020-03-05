import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "@/app";
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {HashRouter as Router} from 'react-router-dom';
import DevStore from "@/mode/dev/DevStore";


/**
 * 开发环境入口
 * @author chenmo
 */
const Init: React.FC = () => {

    return (
        <Provider store={DevStore}>
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