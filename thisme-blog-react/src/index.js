"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var antd_1 = require("antd");
var zh_CN_1 = require("antd/es/locale-provider/zh_CN");
require("moment/locale/zh-cn");
require("./style/globle-index.less");
require('moment').locale('zh-cn');
/**
 * 真实的开始
 * @author chenmo
 * @constructor
 */
var Init = function () {
    return (React.createElement(antd_1.ConfigProvider, { locale: zh_CN_1.default }, "\u8FD9\u662F\u4E24\u4E2A\u4E2Ademo"));
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