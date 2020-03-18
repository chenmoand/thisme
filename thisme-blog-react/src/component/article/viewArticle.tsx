import React, {useEffect} from "react";
import {Pagination, Skeleton} from "antd";
import {List} from "immutable";

import {api, server} from "@/assets/json";
import {useRetryAxios} from "@/fuction";
import {ArticleBean, ArticleTable} from "@/component/article";
import {BaseProps} from "@/component/interface";
import {useSelector} from "react-redux";
import {Reducers} from "@/redux/interface";
import {ArticleState} from "@/redux/status/articleStatus";


export const ViewArticle: React.FC<BaseProps> = props => {

    const {currentPage, articleAllSize} = useSelector<Reducers, ArticleState>(
        ({articleStatus}) => articleStatus
    )

    const url = server.address + api.article + "/pagination?page=" + currentPage;

    const {data, loading, error} = useRetryAxios<List<ArticleBean>>({
        url: url,
        timeout: 1500,
        retry: 3,
        method: "GET"
    });

    useEffect(() => {
        error && console.log(error)
    }, [error])

    return (
        <>
            <Skeleton loading={loading}>
                {
                    data && <ArticleTable src={data}/>
                }
            </Skeleton>
            <Pagination
                simple
                defaultCurrent={currentPage}
                total={articleAllSize}
            />
        </>
    )
}
