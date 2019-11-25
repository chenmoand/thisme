import * as React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Map} from "immutable";
import {Button, Divider, Pagination, Tag} from "antd";
import {Article, BaseProps, PageArticle} from "../util/PropsUtil";
import {articlePath} from "../util/RouterUtil";
import {setRequestUrl} from "../util/ApiUrl";
import Item from "./item";
import Markdown from "../editor/markdown-edit";
import {doArticleType} from "../util/ViewUtil";
import Assert from "../util/Assert";
import Wait from "./wait";

const moment = require("moment");

interface SimpleArticleProps extends BaseProps {
    article: Article,
}

/**
 * 简单文章组件
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
        <div className={className}
             style={{
                 padding: 5,
                 ...style
             }}>
            <div style={{paddingBottom: 5}}>
                <NavLink to={articlePath(articleId)}>{title}</NavLink>
            </div>
            <Item label={"作者"} icon={"user"}>{author}</Item>
            <Item label={"类别"} icon={"fire"}>{classify}</Item>
            <Item label={"标签"} icon={"tag"}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>{moment(startDate).format("LL")}</Item>
            <div style={{
                whiteSpace: "normal", wordBreak: "break-all", wordWrap: "break-word",
                marginTop: 5, marginBottom: 5
            }}>{describe}</div>
            <Button style={{float: "right"}}>
                <NavLink to={articlePath(articleId)}>点击阅读</NavLink>
            </Button>
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
        classify, label, content,
        articleType
    } = article;
    return (
        <div className={`complete-article ${className == null ? "" : className}`}
             style={style}>
            <h3 style={{paddingBottom: 3}}>{title}</h3>
            <Tag color={"red"}>{doArticleType(articleType)}</Tag>
            <Item label={"作者"} icon={"user"}>{author}</Item>
            <Item label={"类别"} icon={"fire"}>{classify}</Item>
            <Item label={"标签"} icon={"tag"}>
                <Assert text={label} index={0} doEmpty={"NULL"}/>
            </Item>
            <Item label={"日期"} icon={"calendar"}>{moment(startDate).format("LL")}</Item>
            <Markdown source={content}/>
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

    // 防止多次点击请求按钮导致发送一堆请求的状态
    const [isclick, setClick] = useState(false);
    // 得到页面的文章数组
    let articles: Article[] = pageArticles.get(currentPage);
    // 发送请求的方法
    const doArticles = () => {
        setClick(true);
        if (articles === undefined) {
            axios.get(setRequestUrl(`getPageArticle?page=${currentPage}&size=10`))
                .then(res => {
                    const {data} = res;
                    setPageArticle({
                        page: currentPage,
                        articles: data
                    });
                    // console.log(data);
                })
                .catch(err => {
                    console.log(err);
                    setClick(false);
                });
        }
    };
    useEffect(doArticles, []);

    return (
        <div className={"article-list " + className} style={style}>
            {
                articles != null ? articles.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <SimpleArticle
                                    article={item}
                                    className={"simple-article"}
                                />
                                <Divider style={{height: 2}}/>
                            </React.Fragment>
                        )
                    }) :
                    <Wait onClick={doArticles} isClick={isclick}/>
            }
            <Pagination
                onChange={(page) => setCurrentPage(page)}
                style={{
                    textAlign: "center", padding: "6px 0"
                }}
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
