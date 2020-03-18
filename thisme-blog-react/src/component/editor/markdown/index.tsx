import {BaseProps} from "@/component/interface";
import * as React from "react";
import {Div} from "@/component/util";

import "@/assets/style/markdown.less"

// @ts-ignore
import * as ReactMarkdown from "react-markdown/with-html";
import CodeBlack from "./codeBlack";

export { default as FileMarkDown } from "./fileMarkdown";


interface MarkdownProps extends BaseProps{
    source: string,
}

/**
 * 一个配置好的Markdown组件
 * @author chenmo
 * @param props
 */
export const Markdown: React.FC<MarkdownProps> = props => {

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
                    [require('remark-toc'), {heading: "文章目录"}],
                ]}
                escapeHtml={false}
            />
        </Div>
    )
};