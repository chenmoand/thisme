import * as React from "react";
import {Button, Card, Tag} from "antd";
import {dayjs} from "@/component/util";
import {ArticleBean} from "@/component/article";
import {BaseProps} from "@/component/interface";
import {Markdown} from "@/component/editor/markdown";
import {NavLink} from "react-router-dom";


interface CompleteArticleProps extends BaseProps {
    article: ArticleBean,
}

export const CompleteArticle: React.FC<CompleteArticleProps> = props => {
    const {article, style} = props;
    const {
        title,
        articleType
    } = article;
    return (
        <Card
            className={"complete-article"}
            style={style}
            title={
                <h3 style={{margin: 0}}>
                    <Tag color={"red"}
                         style={{verticalAlign: "middle"}}>
                        {articleType}
                    </Tag>
                    {title}
                </h3>
            }
        >
            <Markdown source={articleToMarkdown(article)}/>
            <Button
                danger
                style={{
                    float: "right"
                }}
            >
                <NavLink to={"/"}>
                    返回首页
                </NavLink>
            </Button>
        </Card>
    );
};

function articleToMarkdown(value: ArticleBean) {
    const {title, author, createdDate, content} = value;

    return content + "\n\n" +
        "\n\n> **本文标题**: " + title +
        "\n\n> **本文作者**: " + author +
        "\n\n> **发布时间**: " + dayjs(createdDate).format("LL") +
        "\n\n> **版权声明**: 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 许可协议。转载请注明出处！"

}

export default CompleteArticle;