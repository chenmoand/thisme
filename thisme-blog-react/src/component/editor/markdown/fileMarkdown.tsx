import {MarkdownAttribute} from "@/assets/markdown";
import * as React from "react";
import {Markdown} from "@/component/editor/markdown";


export interface FileMarkdownProps {
    source: MarkdownAttribute
}

const FileMarkdown: React.FC<FileMarkdownProps> = props => {

    const {source} = props;

    return (
        <>
            <Markdown source={source.text}/>
        </>
    )
};

export default FileMarkdown;