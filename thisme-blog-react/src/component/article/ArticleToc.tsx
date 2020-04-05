import React from "react";
import MarkToc from "markdown-navbar";

import "markdown-navbar/dist/navbar.css";


interface ArticleTocProps {
    src: string
}

const ArticleToc: React.FC<ArticleTocProps> = props => {

    const {src} = props;

    return (
        <div className={"article-toc"}>
            <MarkToc source={src} />
        </div>
    )
}

export default ArticleToc;