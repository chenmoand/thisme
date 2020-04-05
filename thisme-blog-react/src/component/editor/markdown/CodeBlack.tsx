import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {Typography} from "antd";
import {useSelector} from "react-redux";
import {viewSize} from "@/redux/status/webStatus";
import {Reducers} from "@/redux/interface";


const {Paragraph} = Typography;

interface CodeBlackProps {
    value: string,
    language?: string,
}

/**
 * Markdown代码渲染器
 * @constructor
 */
const CodeBlack: React.FC<CodeBlackProps> = props => {

    const webType = useSelector<Reducers, boolean>(
        ({webStatus}) => viewSize(webStatus.webType)
    );

    const {value, language} = props;

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
            <Paragraph
                style={{
                    position: "absolute", top: "6%",
                    left: webType ? "95%" : "90%",
                }}
                copyable={{text: value}}
            />
        </div>

    )
};

export default CodeBlack;