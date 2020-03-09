import {ArticleInterface, BaseProps} from "@/component/interface/articleInterface";
import * as React from "react";
import {CSSProperties} from "react";
import {NavLink} from "react-router-dom";
import {Assert, dayjs, Div, Item} from "@/component/util";
import {FireOutlined, TagOutlined, UserOutlined} from "@ant-design/icons";

interface SimpleArticleProps extends BaseProps {
    article: ArticleInterface,
}

const _Dstyle: CSSProperties = {
    whiteSpace: "normal",
    wordBreak: "break-all",
    wordWrap: "break-word",
    marginTop: 5,
    marginBottom: 5,
    color: "rgba(0,0,0,0.45)",
    paddingRight: 5
};

/**
 * 简单文章组件
 * @param props
 * @constructor
 */
const SimpleArticle: React.FC<SimpleArticleProps> = props => {
    const {article, style, className} = props;
    const {
        title, author, createdDate,
        classify, label, describe,
        articleId
    } = article;
    return (
        <Div
            classNames={["simple-article", className]}
            style={style}
        >
            <h2>
                <NavLink to={"/article/" + articleId}>
                    {title}
                </NavLink>
            </h2>
            <Item label={"作者"} icon={<UserOutlined/>}>
                {author}
            </Item>
            <Item label={"类别"} icon={<FireOutlined/>}>
                {classify}
            </Item>
            <Item label={"标签"} icon={<TagOutlined/>}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>
                {dayjs(createdDate).format("LL")}
            </Item>
            <div style={_Dstyle}>{describe}</div>
        </Div>
    );
};

export default SimpleArticle;