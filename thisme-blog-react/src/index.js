"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var antd_1 = require("antd");
var zh_CN_1 = require("antd/es/locale/zh_CN");
require("moment/locale/zh-cn");
require("./style/globle-index.less");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("./redux/store");
var LogUtil_1 = require("@/util/LogUtil");
var moment = require("moment");
moment.locale('zh-cn'); // 设置为中文
/**
 * 开发环境入口
 * @author chenmo
 */
var Init = function () {
    LogUtil_1.whiteLogo();
    return (React.createElement(react_redux_1.Provider, { store: store_1.DevStore },
        React.createElement(antd_1.ConfigProvider, { locale: zh_CN_1.default },
            React.createElement(react_router_dom_1.HashRouter, null,
                React.createElement(App_1.default, null)))));
};
ReactDOM.render(React.createElement(Init, null), document.getElementById('init'));
//# sourceMappingURL=index.js.map