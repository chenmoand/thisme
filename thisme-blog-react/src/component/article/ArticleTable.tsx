import React from "react";
import {List} from "immutable";
import {Collapse} from 'antd';
import {NavLink} from "react-router-dom";

import {ArticleBean} from "@/component/article";
import {useDispatch} from "react-redux";
import {IDispatch} from "@/redux/interface";
import {Markdown} from "@/component/editor/markdown";
import {FormOutlined} from "@ant-design/icons";

const {Panel} = Collapse;

interface ArticleTableProps {
    src: List<ArticleBean>
}

function mapToPanel(array: List<ArticleBean>, callback: (ArticleBean) => void) {

    return array.map((value, key) => (
        <Panel
            header={
                <NavLink
                    style={{
                        color: "black",
                        fontWeight: "bolder"
                    }}
                    to={"/article/" + value.articleId}
                    onClick={() => callback(value)}
                >
                    {value.title}
                </NavLink>
            }
            disabled={true}
            key={key}
        >
            <Markdown
                className={"article-describe"}
                source={value.describe}
            />
        </Panel>
    ))
}


// 文章列表
const ArticleTable: React.FC<ArticleTableProps> = props => {

    const {src} = props;

    const dispatch = useDispatch<IDispatch>();

    const setCurrentArticle = (id: ArticleBean) => dispatch({type: "CURRENT_ARTICLE", content: id})

    return (
        <Collapse
            defaultActiveKey={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
            // onChange={callback}
            expandIcon={() => <FormOutlined />}
            expandIconPosition={'left'}
        >
            {mapToPanel(src, setCurrentArticle)}
        </Collapse>
    )
};

export default ArticleTable;