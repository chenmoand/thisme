"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var antd_1 = require("antd");
var zh_CN_1 = require("antd/es/locale-provider/zh_CN");
require("moment/locale/zh-cn");
require("./style/globle-index.less");
var store_1 = require("./redux/store");
var chick_test_1 = require("./test/chick_test");
require('moment').locale('zh-cn'); // 设置为中文
/**
 * 真实的开始
 * @author chenmo
 * @constructor
 */
var Init = function () {
    return (React.createElement(react_redux_1.Provider, { store: store_1.DevStore },
        React.createElement(antd_1.ConfigProvider, { locale: zh_CN_1.default },
            React.createElement(chick_test_1.default, null))));
};
// 打印LOG信息
console.info("%cthisme : %c 代码托管于github.com/chenmoand/thisme", "background: black;\n" +
    "            font-family: \"Arial Black\", serif;\n" +
    "            color: #ffd498;\n" +
    "            padding: 6px;", "background: brown;\n" +
    "            font-family: \"Arial Black\", serif;\n" +
    "            color: #fff;\n" +
    "            padding: 6px;");
ReactDOM.render(React.createElement(Init, null), document.getElementById('init'));
//# sourceMappingURL=index.js.map