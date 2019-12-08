import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '@/assets/style/markdown.less';
import * as CopyToClipboard from "react-copy-to-clipboard";
import {Button, Popover} from "antd";
import {connect} from "react-redux";
import {viewSize} from "@/util/ViewUtil";

interface MarkdownProps {
    source: string,
}

/**
 * 一个配置好的Markdown组件
 * @author chenmo
 * @param props
 */
const Markdown: React.FC<MarkdownProps> = props => {

    const {source} = props;

    return (
        <div className={"text-markdown"}>
            <ReactMarkdown
                skipHtml={false}
                source={source}
                renderers={{code: CodeBlack}}
                plugins={[
                    [require('remark-toc'), {heading: "目录"}],
                ]}
                escapeHtml={false}
            />
        </div>
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

    const { source } = props;

    return(
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
                style={darcula}
                showLineNumbers={true}
            >
                {value}
            </SyntaxHighlighter>
            <CopyToClipboard text={value}>
                <Popover content={"复制成功"} trigger={"click"}>
                    <Button style={{
                        position: "absolute",
                        top: "6%", left: webType ? "88%" : "70%",
                        width: "7em", height: "2em",
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
        const {indexReducer} = state;
        return {
            webType: viewSize(indexReducer.webType),
        };
    }
)(CodeBlack$);
