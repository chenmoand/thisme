import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import toc from 'remark-toc';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import '../style/markdown.less'

const { useEffect } = React;

interface MarkdownProps {
    source : string,
}

/**
 * 一个配置好的Markdown组件
 * @author chenmo
 * @param props
 */
const Markdown:React.FC<MarkdownProps> = props =>  {
    return(
        <div>
            <ReactMarkdown
                skipHtml={false}
                source={props.source}
                renderers={{code : CodeBlack}}
                plugins={[toc]}
            />
        </div>
    )
};
export default Markdown;

interface CodeBlackProps {
    value : string,
    language? : string
}

/**
 * Markdown代码渲染器
 * @constructor
 */
export const CodeBlack:React.FC<CodeBlackProps> = props => {

    /*// 每次都渲染代码
    useEffect(()=> {
        hljs.highlightBlock();
    });*/


    return(
        <pre>
            <code
                ref={hljs.highlightBlock}
                className={`language-${props.language}`}
            >
                {props.value}
            </code>
        </pre>
    )
};


