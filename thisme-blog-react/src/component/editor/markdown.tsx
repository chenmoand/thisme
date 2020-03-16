import * as React from 'react';
import {connect} from "react-redux";
import {Button, Popover} from "antd";

import '@/assets/style/markdown.less';
// @ts-ignore
import * as ReactMarkdown from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import * as CopyToClipboard from "react-copy-to-clipboard";

import {viewSize} from "@/redux/status/webStatus";
import {BaseProps} from "@/component/interface";
import {Div} from "@/component/util";


interface MarkdownProps extends BaseProps{
    source: string,
}

/**
 * 一个配置好的Markdown组件
 * @author chenmo
 * @param props
 */
const Markdown: React.FC<MarkdownProps> = props => {

    const {source, className, style} = props;

    return (
        <Div
            classNames={["text-markdown", className]}
            style={style}
        >
            <ReactMarkdown
                skipHtml={false}
                source={source}
                renderers={{code: CodeBlack}}
                plugins={[
                    [require('remark-toc'), {heading: "目录"}],
                ]}
                escapeHtml={false}
            />
        </Div>
    )
};
export default Markdown;


interface FileMarkdownProps {
    source: MarkdownAttribute
}

export interface MarkdownAttribute {
    text: string
}


export const FileMarkdown: React.FC<FileMarkdownProps> = props => {

    const {source} = props;

    return (
        <>
            <Markdown source={source.text}/>
        </>
    )
};


interface CodeBlackProps {
    value: string,
    language?: string,
    webType: boolean,
}

/**
 * Markdown代码渲染器
 * @constructor
 */
export const CodeBlack$: React.FC<CodeBlackProps> = props => {
    const {value, language, webType} = props;

    return (
        <div style={{position: "relative"}}>
            <SyntaxHighlighter
                language={language}
                // 防止将全部style加载进去
                style={require('react-syntax-highlighter/dist/esm/styles/hljs').darcula}
                showLineNumbers={true}
            >
                {value}
            </SyntaxHighlighter>
            <CopyToClipboard text={value}>
                <Popover content={"复制成功"} trigger={"click"}>
                    <Button style={{
                        position: "absolute",
                        top: "6%",
                        left: webType ? "88%" : "70%",
                        width: "7em",
                        height: "2.3em",
                        fontSize: "0.7em"
                    }}>
                        点击复制
                    </Button>
                </Popover>
            </CopyToClipboard>
        </div>

    )
};

export const CodeBlack = connect(
    state => {
        // @ts-ignore
        const {webStatus} = state;
        return {
            webType: viewSize(webStatus.webType),
        };
    }
)(CodeBlack$);
