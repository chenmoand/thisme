"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("react-hot-loader/root");
var React = require("react");
var app_test_1 = require("./test/app-test");
/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
var App = function () {
    return (React.createElement("div", null,
        React.createElement(app_test_1.default, null)));
};
/**
 * 热加载, 基本上写一次就可以了,直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 觉得贴心的在我的项目点个星星
 */
exports.default = root_1.hot(App);
//# sourceMappingURL=App.js.map