import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { HashRouter} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import './style/globle-index.less'
import { DevStore } from "./redux/store";
import App from "./App";



require('moment').locale('zh-cn'); // 设置为中文

/**
 * 真实的开始
 * @author chenmo
 * @constructor
 */
const Init:React.FC = () => {
    return(
        <Provider store={DevStore}>
            <ConfigProvider locale={zhCN}>
                <HashRouter>
                    <App />
                </HashRouter>
            </ConfigProvider>
        </Provider>
    )
};
// 打印LOG信息
console.info("%cthisme : %c 代码托管于github.com/chenmoand/thisme",
    "background: black;\n" +
    "            font-family: \"Arial Black\", serif;\n" +
    "            color: #ffd498;\n" +
    "            padding: 6px;",
    "background: brown;\n" +
    "            font-family: \"Arial Black\", serif;\n" +
    "            color: #fff;\n" +
    "            padding: 6px;"
);

ReactDOM.render(
    <Init />,
    document.getElementById('init')
);