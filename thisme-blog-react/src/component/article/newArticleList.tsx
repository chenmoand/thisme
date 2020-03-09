import React from "react";
import {List} from "immutable";
import {ArticleInterface} from "@/component/interface/articleInterface";
import {Collapse} from 'antd';
import {NavLink} from "react-router-dom";
import Markdown from "@/component/editor/markdown";
import "@/assets/style/article.less"

const {Panel} = Collapse;

interface NewArticleListProps {
    src: List<ArticleInterface>
}

function mapToPanel(array: List<ArticleInterface>) {
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

const NewArticleList: React.FC<NewArticleListProps> = props => {

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

export default NewArticleList;