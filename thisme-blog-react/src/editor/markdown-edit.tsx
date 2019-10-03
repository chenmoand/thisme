import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../style/markdown.less'

// const { useEffect } = React;
const toc = require('remark-toc');

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
    {/*<pre> 另一种实现方式
        <code
            ref={hljs.highlightBlock}
            className={`language-${props.language}`}
        >
        {props.value}
        </code>
    </pre>*/}
    return(
        <SyntaxHighlighter
            language={props.language}
            style={darcula}
        >
            {props.value}
        </SyntaxHighlighter>
    )
};
