import React from "react";
import {Pagination, Skeleton} from "antd";
import {List} from "immutable";

import {api, server} from "@/assets/json";
import {useRetryAxios} from "@/fuction";
import {ArticleBean, ArticleTable} from "@/component/article";
import {BaseProps} from "@/component/interface";
import {useDispatch, useSelector} from "react-redux";
import {IDispatch, Reducers} from "@/redux/interface";
import {ArticleState} from "@/redux/status/articleStatus";


export const ViewArticle: React.FC<BaseProps> = () => {

    const {currentPage, articleAllSize} = useSelector<Reducers, ArticleState>(
        ({articleStatus}) => articleStatus
    );

    const url = server.address + api.article + "/pagination?page=" + currentPage;

    const {data, loading, error} = useRetryAxios<List<ArticleBean>>({
        url: url,
        timeout: 1500,
        retry: 3,
        method: "GET"
    });

    const dispatch = useDispatch<IDispatch>();

    error && console.log(error);


    return (
        <>
            <Skeleton loading={loading}>
                {data && <ArticleTable src={data}/>}
            </Skeleton>
            <Pagination
                simple style={{
                    float: "right"
                }}
                defaultCurrent={currentPage}
                total={articleAllSize}
                onChange={
                    page => dispatch({type: "CURRENT_PAGE", content: page})
                }
            />
        </>
    )
};
