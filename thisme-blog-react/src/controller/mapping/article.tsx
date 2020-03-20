import * as React from "react";
import {useEffect, useState} from "react";
import {Skeleton} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps, useParams} from "react-router";

import {server} from "@/assets/json";
import {useRetryAxios} from "@/fuction";
import {BaseProps} from "@/component/interface";
import {IDispatch, Reducers} from "@/redux/interface";
import {ArticleBean, CompleteArticle} from "@/component/article";
import {BodyTemplate} from "@/component/template";


interface ArticleProps extends RouteComponentProps, BaseProps {

}

const Article: React.FC<ArticleProps> = () => {

    const currentArticle = useSelector<Reducers, ArticleBean>(state => state.articleStatus.currentArticle);

    const {id} = useParams();

    const dispatch = useDispatch<IDispatch>();

    const url = server.address + "/api/articles/" + id;

    const [loding, setLoding] = useState(
        currentArticle == undefined || currentArticle.articleId != id
    );

    if (loding) {
        const {data, error} = useRetryAxios<ArticleBean>({
            url: url,
            timeout: 1500,
            retry: 3,
            method: "get"
        });
        error && console.log(error);
        useEffect(() => {
            if (data) {
                // console.log(data)
                dispatch({type: "CURRENT_ARTICLE", content: data});
                setLoding(false)
            }
        }, [data]);
    }

    return (
        <BodyTemplate
            title={currentArticle && currentArticle.title}
            left={
                <Skeleton
                    loading={loding}
                    paragraph={{rows: 8}}
                    title active={true}
                >
                    <CompleteArticle article={currentArticle}/>
                </Skeleton>
            }
        >
            占位
        </BodyTemplate>
    );
};
export default Article;


