"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var hljs_1 = require("react-syntax-highlighter/dist/esm/styles/hljs");
require("../style/markdown.less");
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
exports.CodeBlack = function (props) {
    { /*<pre> 另一种实现方式
        <code
            ref={hljs.highlightBlock}
            className={`language-${props.language}`}
        >
        {props.value}
        </code>
    </pre>*/
    }
    return (React.createElement(react_syntax_highlighter_1.default, { language: props.language, style: hljs_1.darcula, showLineNumbers: true }, props.value));
};
//# sourceMappingURL=markdown-edit.js.map