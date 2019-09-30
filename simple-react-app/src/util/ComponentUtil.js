"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
/**
 * 转换成持有Redux的组件
 * @param mapStateToProps 填充的状态
 * @param mapDisPatchToProps 发送命令的方法
 * @param Component 组件
 */
exports.ConnectRedux = function (mapStateToProps, mapDisPatchToProps, Component) {
    return react_redux_1.connect(mapStateToProps, mapDisPatchToProps)(Component);
};
/**
 * 转换成持有Redux和Router的组件
 * 有关网址https://reacttraining.com/react-router/web/guides/redux-integration
 * @param mapStateToProps
 * @param mapDisPatchToProps
 * @param Component
 */
exports.ConnectRouter = function (mapStateToProps, mapDisPatchToProps, Component) {
    // 这样写会报类型错误, 强迫症的我!!!
    // return withRouter(connect(mapStateToProps, mapDisPatchToProps)(Component));
    return exports.ConnectRedux(mapStateToProps, mapDisPatchToProps, react_router_dom_1.withRouter(Component));
};
//# sourceMappingURL=ComponentUtil.js.map