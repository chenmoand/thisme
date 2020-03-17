import React from "react";
import {List} from "immutable";
import {Collapse} from 'antd';
import {NavLink} from "react-router-dom";
import Markdown from "@/component/editor/markdown";
import {ArticleBean} from "@/component/article";

const {Panel} = Collapse;

interface ArticleTableProps {
    src: List<ArticleBean>
}

function mapToPanel(array: List<ArticleBean>) {

    return array.map((value, key) => (
        <Panel
            header={
                <NavLink to={"/article/" + value.articleId}>
                    {value.title}
                </NavLink>
            }
            key={key}
        >
            <Markdown
                className={"article-describe"}
                source={value.describe}
            >
            </Markdown>
        </Panel>
    ))
}

// 文章列表
const ArticleTable: React.FC<ArticleTableProps> = props => {

    const { src } = props;

    return (
        <Collapse
            defaultActiveKey={[0,1,2,3,4,5,6,7,8,9]}
            // onChange={callback}
            expandIconPosition={'left'}
        >
            {mapToPanel(src)}
        </Collapse>
    )
};

export default ArticleTable;