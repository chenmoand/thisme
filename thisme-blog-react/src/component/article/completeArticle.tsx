import * as React from "react";
import {Tag} from "antd";
import {Assert, dayjs, Div, Item} from "@/component/util";
import Markdown from "@/component/editor/markdown";
import {ArticleInterface, BaseProps} from "@/component/interface/articleInterface";
import {FireOutlined, TagOutlined, UserOutlined} from "@ant-design/icons";


interface CompleteArticleProps extends BaseProps {
    article: ArticleInterface,
}

export const CompleteArticle: React.FC<CompleteArticleProps> = props => {
    const {article, className, style} = props;
    const {
        title, author, startDate,
        classify, label, content,
        articleType, articleId
    } = article;
    return (
        <Div classNames={["complete-article", className]}
             style={style}
        >
            <h1 style={{paddingBottom: 3}}>
                {title}
            </h1>
            <Tag color={"red"}>
                {articleType}
            </Tag>
            <Item label={"作者"} icon={<UserOutlined />}>
                {author}
            </Item>
            <Item label={"类别"} icon={<FireOutlined />}>
                {classify}
            </Item>
            <Item label={"标签"} icon={<TagOutlined />}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>
                {dayjs(startDate).format("LL")}
            </Item>
            <Markdown source={content}/>
            <span>
                转载请注: https:///article/{articleId}
            </span>
        </Div>
    );
};
export default CompleteArticle;