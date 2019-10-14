import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { HashRouter} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {IntlProvider} from "rsuite";
import zh_CN from 'rsuite/lib/IntlProvider/locales/zh_CN';
import 'moment/locale/zh-cn';
import './style/globle-index.less'
import { PordStore as Store } from "./redux/store";
import App from "./App";



require('moment').locale('zh-cn'); // 设置为中文

/**
 * 不需要动这个, 如果后期有需要可以将HashRouter替换成BrowserRouter
 * 有兴趣的点个star, 真实的点star量啊!!!!
 * @author chenmo
 */
const Init:React.FC = () => {
    return(
        <Provider store={Store}>
            <ConfigProvider locale={zhCN}>
                <IntlProvider locale={zh_CN}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </IntlProvider>
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