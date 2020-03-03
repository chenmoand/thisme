import {ArticleInterface, BaseProps} from "@/component/interface/articleInterface";
import * as React from "react";
import {Tag} from "antd";
import {doArticleType} from "@/util/ViewUtil";
import Item from "@/component/item";
import Assert from "@/component/util/Assert";
import * as moment from "moment";
import Markdown from "@/component/editor/markdown-edit";
import {connect} from "react-redux";
import {Div} from "@/component/util";

interface CompleteArticleProps extends BaseProps {
    article: ArticleInterface,
    domain: string,
}

export const CompleteArticle$: React.FC<CompleteArticleProps> = props => {
    const {article, className, style, domain} = props;
    const {
        title, author, startDate,
        classify, label, content,
        articleType, articleId
    } = article;
    return (
        <Div classNames={["complete-article", className]}
             style={style}
        >
            <h1 style={{paddingBottom: 3}}>{title}</h1>
            <Tag color={"red"}>{doArticleType(articleType)}</Tag>
            <Item label={"作者"} icon={"user"}>{author}</Item>
            <Item label={"类别"} icon={"fire"}>{classify}</Item>
            <Item label={"标签"} icon={"tag"}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>{moment(startDate).format("LL")}</Item>
            <Markdown source={content}/>
            <span>
                转载请注: https://{domain}/article/{articleId}
            </span>
        </Div>
    );
};


const CompleteArticle = connect(
    state => {
        // @ts-ignore
        const {indexReducer} = state;
        return {
            domain: indexReducer.domain,
        }

    }
)(CompleteArticle$);

export default CompleteArticle;