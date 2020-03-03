import {ArticleInterface, BaseProps, PageArticle} from "@/component/interface/articleInterface";
import {Map} from "immutable";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import server from "@/assets/json/server.json";
import {Divider, Pagination} from "antd";
import Wait from "@/component/wait";
import {connect} from "react-redux";
import Article from "./index"
import {Div} from "@/component/util";

interface ArticleListProps extends BaseProps {
    currentPage: number,
    maxPage: number,
    pageArticles: Map<number, ArticleInterface[]>,
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
    let articles: ArticleInterface[] = pageArticles.get(currentPage);
    // 发送请求的方法
    const doArticles = () => {
        setClick(true);
        // TODO 暂时使用setRequestUrl方法
        articles && axios
            .get(`${server.address}/articles?page=${currentPage}&size=10`)
            .then(res => {
                const {data} = res;
                data && setPageArticle({
                    page: currentPage,
                    articles: data
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
                                <Article
                                    type={"Complete"}
                                    src={item}
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
        const {articleReducer} = state;
        return {
            pageArticles: articleReducer.pageArticle,
            currentPage: articleReducer.currentPage
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
