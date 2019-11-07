import * as React from "react";
import {Article, BaseProps, PageArticle} from "../util/PropsUtil";
import {connect} from "react-redux";
import {Button, Descriptions, Divider} from "antd";
import {NavLink} from "react-router-dom";
import {Map} from "immutable";

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
        Title, Author, StartDate,
        Classify, Label, Describe,
        Url
    } = article;
    const {Item} = Descriptions;
    return (
        <div className={className} style={style}>
            <Descriptions title={Title} column={4}>
                <Item label={"作者"}> {Author} </Item>
                <Item label={"日期"}> {StartDate} </Item>
                <Item label={"类别"}> {Classify} </Item>
                <Item label={"标签"}> {Label[0]} </Item>
                <Item label={"描述"} span={4}> {Describe}</Item>
                <Item span={3}>{}</Item>
                <Item>
                    <Button><NavLink to={Url}>点击阅读</NavLink></Button>
                </Item>
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
