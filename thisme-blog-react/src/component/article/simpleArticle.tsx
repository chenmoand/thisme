import {ArticleInterface, BaseProps} from "@/component/interface/articleInterface";
import * as React from "react";
import {NavLink} from "react-router-dom";
import {articlePath} from "@/util/RouterUtil";
import Item from "@/component/item";
import Assert from "@/component/util/Assert";
import * as moment from "moment";

interface SimpleArticleProps extends BaseProps {
    article: ArticleInterface,
}

/**
 * 简单文章组件
 * @param props
 * @constructor
 */
const SimpleArticle: React.FC<SimpleArticleProps> = props => {
    const {article, style} = props;
    const {
        title, author, startDate,
        classify, label, describe,
        articleId
    } = article;
    return (
        <div className={"simple-article"}
             style={style}>
            <h2>
                <NavLink to={articlePath(articleId)}>{title}</NavLink>
            </h2>
            <Item label={"作者"} icon={"user"}>{author}</Item>
            <Item label={"类别"} icon={"fire"}>{classify}</Item>
            <Item label={"标签"} icon={"tag"}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>{moment(startDate).format("LL")}</Item>
            <div style={{
                whiteSpace: "normal", wordBreak: "break-all", wordWrap: "break-word",
                marginTop: 5, marginBottom: 5, color: "rgba(0,0,0,0.45)", paddingRight: 5
            }}>{describe}</div>
        </div>
    );
};

export default SimpleArticle;