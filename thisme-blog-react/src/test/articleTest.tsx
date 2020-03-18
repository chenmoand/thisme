import React from "react";
import {ArticleBean} from "@/component/article";
import {Typography} from "antd";
import {Markdown} from "@/component/editor/markdown";


interface ArticleTestProps {
    src: ArticleBean
}


const { Title, Paragraph } = Typography;

const ArticleTest: React.FC<ArticleTestProps> = props => {

    const {src} = props;


    return (
        <div>
            <Title>{ src.title }</Title>
            <Markdown source={src.content} />
        </div>
    )
};

export default ArticleTest;
