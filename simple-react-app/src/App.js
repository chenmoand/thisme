"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("react-hot-loader/root");
var React = require("react");
var configuration_1 = require("./component/configuration");
var antd_1 = require("antd");
var TopMenu_1 = require("./component/menu/TopMenu");
var page_switch_1 = require("./router/page-switch");
var page_bottom_1 = require("./component/page-bottom");
/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
var App = function () {
    return (React.createElement(configuration_1.default, { url: "https://brageast.com" },
        React.createElement(TopMenu_1.default, null),
        React.createElement(page_switch_1.PageView, null),
        React.createElement(antd_1.BackTop, null),
        " ",
        React.createElement(page_bottom_1.default, null)));
};
/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
exports.default = root_1.hot(App);
//# sourceMappingURL=App.js.map