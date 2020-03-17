import React, {useEffect} from "react";
import {ArticleBean, ArticleTable} from "@/component/article";
import {api, server} from "@/assets/json";
import {List} from "immutable";
import {useRetryAxios} from "@/axios";
import {Skeleton} from "antd";


interface ViewArticleProps {
    pageNum: number
}

export const ViewArticle: React.FC<ViewArticleProps> = props => {

    const {pageNum} = props;

    const url = server.address + api.article + "/pagination?page=" + pageNum;

    const {data, loading, error} = useRetryAxios<List<ArticleBean>>({
        url: url,
        timeout: 1500,
        retry: 3,
        method: "GET"
    });

    useEffect(() => {
        error && console.log(error)
    },[error])

    return(
        <Skeleton loading={loading}>
            {
                data && <ArticleTable src={data}/>
            }
        </Skeleton >
    )
}
