import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./App";
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import './style/globle-index.less'
import { HashRouter as Router } from 'react-router-dom';
import { DevStore as Store } from "./redux/store";
import {whiteLogo} from "@/util/LogUtil";
import * as moment from "moment";

moment.locale('zh-cn'); // 设置为中文

/**
 * 开发环境入口
 * @author chenmo
 */
const Init:React.FC = () => {
    whiteLogo();
    return(
        <Provider store={Store}>
            <ConfigProvider locale={zhCN}>
                    <Router>
                            <App />
                    </Router>
            </ConfigProvider>
        </Provider>
    )
};
ReactDOM.render(
    <Init />,
    document.getElementById('init')
);