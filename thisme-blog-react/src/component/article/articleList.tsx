import * as React from "react";
import {Map} from "immutable";
import {server} from "@/assets/json";
import {Divider, Pagination} from "antd";
import Wait from "@/component/wait";
import {connect} from "react-redux";
import {ArticleBean, CompleteArticle, PageArticle} from "./index"
import {axios, Div} from "@/component/util";
import {BaseProps} from "@/component/interface";

const {useEffect, useState} = React;

interface ArticleListProps extends BaseProps {
    currentPage: number,
    maxPage: number,
    pageArticles: Map<number, ArticleBean[]>,
    setPageArticle: (pa: PageArticle) => void,
    setCurrentPage: (num: number) => void,
}

/**
 * 文章列表
 * @param props
 * @constructor
 */
const ArticleList$: React.FC<ArticleListProps> = props => {
    const {
        className, maxPage, pageArticles,
        currentPage, setPageArticle, style,
        setCurrentPage
    } = props;

    // 防止多次点击请求按钮导致发送一堆请求的状态
    const [isclick, setClick] = useState(false);
    // 得到页面的文章数组
    let articles: ArticleBean[] = pageArticles.get(currentPage);
    // 发送请求的方法
    const doArticles = () => {
        setClick(true);
        articles && axios
            .get(`${server.address}/articles?page=${currentPage}&size=10`)
            .then(res => {
                const {data} = res;
                data && setPageArticle({
                    page: currentPage,
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
                setClick(false);
            });

    };
    useEffect(doArticles, []);
    return (
        <Div classNames={["article-list", className]} style={style}>
            {
                articles != null ? articles.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <CompleteArticle
                                    article={item}
                                />
                                <Divider style={{margin: "12px 0"}}/>
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
                simple defaultCurrent={1} total={maxPage}
            />
        </Div>
    );
};

const ArticleList = connect(
    state => {
        // @ts-ignore
        const {articleStatus} = state;
        return {
            pageArticles: articleStatus.pageArticles,
            currentPage: articleStatus.currentPage
        }
    },
    dispatch => {
        return {
            setPageArticle: (pa: PageArticle) => dispatch({type: "PAGE_ARTICLE", content: pa}),
            setCurrentPage: (num: number) => dispatch({type: "CURRENT_PAGE", content: num})
        }
    }
)(ArticleList$);

export default ArticleList;