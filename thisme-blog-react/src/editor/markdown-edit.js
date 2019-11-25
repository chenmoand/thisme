"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var hljs_1 = require("react-syntax-highlighter/dist/esm/styles/hljs");
require("../style/markdown.less");
var CopyToClipboard = require("react-copy-to-clipboard");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var ViewUtil_1 = require("../util/ViewUtil");
/**
 * 一个配置好的Markdown组件
 * @author chenmo
 * @param props
 */
var Markdown = function (props) {
    return (React.createElement("div", { className: "text-markdown" },
        React.createElement(ReactMarkdown, { skipHtml: false, source: props.source, renderers: { code: exports.CodeBlack }, plugins: [
                [
                    require('remark-toc'),
                    { heading: "目录" }
                ],
            ], escapeHtml: false })));
};
exports.default = Markdown;
/**
 * Markdown代码渲染器
 * @constructor
 */
exports.CodeBlack$ = function (props) {
    var value = props.value, language = props.language, webType = props.webType;
    return (React.createElement("div", { style: { position: "relative" } },
        React.createElement(react_syntax_highlighter_1.default, { language: language, style: hljs_1.darcula, showLineNumbers: true }, value),
        React.createElement(CopyToClipboard, { text: value },
            React.createElement(antd_1.Popover, { content: "复制成功", trigger: "click" },
                React.createElement(antd_1.Button, { style: {
                        position: "absolute",
                        top: "4%", left: webType ? "88%" : "70%",
                        width: "7em", height: "2em",
                        fontSize: "0.7em"
                    } }, "\u70B9\u51FB\u590D\u5236")))));
};
exports.CodeBlack = react_redux_1.connect(function (state) {
    // @ts-ignore
    var indexReducer = state.indexReducer;
    return {
        webType: ViewUtil_1.viewSize(indexReducer.webType),
    };
}, null)(exports.CodeBlack$);
//# sourceMappingURL=markdown-edit.js.map