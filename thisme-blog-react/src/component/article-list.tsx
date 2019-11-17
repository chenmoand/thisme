import * as React from "react";
import {Article, BaseProps, PageArticle} from "../util/PropsUtil";
import {connect} from "react-redux";
import {Button, Descriptions, Divider} from "antd";
import {NavLink} from "react-router-dom";
import {Map} from "immutable";
import {articlePath} from "../util/RouterUtil";

const {Item} = Descriptions;


interface SimpleArticleProps extends BaseProps {
    article: Article,
}

/**
 * 简单文章
 * @param props
 * @constructor
 */
export const SimpleArticle: React.FC<SimpleArticleProps> = props => {
    const {article, className, style} = props;
    const {
        title, author, startDate,
        classify, label, describe,
        articleId
    } = article;
    return (
        <div className={className} style={style}>
            <Descriptions title={title} column={4}>
                <Item label={"作者"}> {author} </Item>
                <Item label={"日期"}> {startDate} </Item>
                <Item label={"类别"}> {classify} </Item>
                <Item label={"标签"}> {label[0]} </Item>
                <Item label={"描述"} span={4}> {describe}</Item>
                <Item span={3}>{}</Item>
                <Item>
                    <Button><NavLink to={articlePath(articleId)}>点击阅读</NavLink></Button>
                </Item>
            </Descriptions>
        </div>
    );
};

interface CompleteArticleProps extends BaseProps {
    article: Article,
}

export const CompleteArticle: React.FC<CompleteArticleProps> = props => {
    const {article, className, style} = props;
    const {
        title, author, startDate,
        classify, label,
    } = article;
    return(
        <div className={className} style={style}>
            <Descriptions title={title} column={4}>
                <Item label={"作者"}> {author} </Item>
                <Item label={"日期"}> {startDate} </Item>
                <Item label={"类别"}> {classify} </Item>
                <Item label={"标签"}> {label} </Item>
            </Descriptions>
        </div>
    );
};


interface ArticleListProps extends BaseProps {
    currentPage: number,
    maxPage: number,
    pageArticles: Map<number, Article[]>,
    setPageArticle: (pa: PageArticle) => void;
}

/**
 * 文章列表
 * @param props
 * @constructor
 */
export const ArticleList$: React.FC<ArticleListProps> = props => {
    const {
        className, maxPage, pageArticles,
        currentPage, setPageArticle, style
    } = props;

    let articles: Article[] = pageArticles.get(currentPage);
    if (articles === undefined) {
        //TODO 发送AJAX并加入到Redux上
    }

    return (
        <div className={"article-list " + className} style={style}>
            {
                articles.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <SimpleArticle
                                article={item}
                                className={"simple-article"}
                            />
                            <Divider style={{height: 2}}/>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};

export const ArticleList = connect(
    state => {
        // @ts-ignore
        const {indexReducer} = state;
        return {
            pageArticles: indexReducer.pageArticle,
            currentPage: indexReducer.currentPage
        }
    },
    dispatch => {
        return {
            setPageArticle: (pa: PageArticle) => dispatch({type: "PAGE_ARTICLE", content: pa})
        }
    }
)(ArticleList$);
