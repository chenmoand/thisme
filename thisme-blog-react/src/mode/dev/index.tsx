import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader/root';
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom';

import App from "@/app";
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import DevStore from "@/mode/dev/DevStore";


/**
 * 开发环境入口
 * @author chenmo
 */
const Init: React.FC = () => {

    const HotApp = hot(App)

    return (
        <Provider store={DevStore}>
            <ConfigProvider locale={zhCN}>
                <Router>
                    <HotApp/>
                </Router>
            </ConfigProvider>
        </Provider>
    )
};
ReactDOM.render(
    <Init/>,
    document.getElementById('init')
);