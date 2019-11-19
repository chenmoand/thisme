import * as React from "react";
import {Article, BaseProps, PageArticle} from "../util/PropsUtil";
import {connect} from "react-redux";
import {Button, Descriptions, Divider, Pagination} from "antd";
import {NavLink} from "react-router-dom";
import {Map} from "immutable";
import {articlePath} from "../util/RouterUtil";
import axios from "axios";
import {setRequestUrl} from "../util/ApiUrl";

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
                {/*<Item label={"作者"}> {author} </Item>
                <Item label={"日期"}> {startDate} </Item>
                <Item label={"类别"}> {classify} </Item>
                <Item label={"标签"}> {label[0]} </Item>
                <Item label={"描述"} span={4}> {describe}</Item>
                <Item span={3}>{}</Item>*/}
            <Button><NavLink to={articlePath(articleId)}>点击阅读</NavLink></Button>
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
    setPageArticle: (pa: PageArticle) => void,
    setCurrentPage: (num: number) => void,
}

/**
 * 文章列表
 * @param props
 * @constructor
 */
export const ArticleList$: React.FC<ArticleListProps> = props => {
    const {
        className, maxPage, pageArticles,
        currentPage, setPageArticle, style,
        setCurrentPage
    } = props;

    let articles: Article[] = pageArticles.get(currentPage);
    if (articles === undefined) {
        axios.get(setRequestUrl(`getPageArticle?page=${currentPage}&size=10`))
            .then(res => {
                const { data } = res;
                setPageArticle({
                    page: currentPage,
                    articles: data
                });
            })
            .catch(console.log);
    }

    return (
        <div className={"article-list " + className} style={style}>
            {
                articles && articles.map((item, index) => {
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
            <Pagination onChange={(page) => setCurrentPage(page)}
                        style={{textAlign: "center"}} hideOnSinglePage={true}
                        //TODO  maxPage? 暂时占位置
                        simple defaultCurrent={1} total={maxPage}
            />
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
            setPageArticle: (pa: PageArticle) => dispatch({type: "PAGE_ARTICLE", content: pa}),
            setCurrentPage: (num: number) => dispatch({type: "CURRENT_PAGE", content: num})
        }
    }
)(ArticleList$);
