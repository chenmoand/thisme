import React from "react";
import {useAxios} from "use-axios-client";
import {ArticleBean} from "@/component/article";
import {api, server} from "@/assets/json";
import {List} from "immutable";


interface ViewArticleProps {
    pageNum: number
}

export const ViewArticle: React.FC<ViewArticleProps> = props => {

    const {pageNum} = props;

    const {data, loading, error} = useAxios<List<ArticleBean>>(`${server.address + api.article}/pagination?page=${pageNum}`);

    return(
        <>

        </>
    )
}
