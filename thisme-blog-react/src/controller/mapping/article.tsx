import * as React from "react";
import {Skeleton} from "antd";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteComponentProps, useParams} from "react-router";

import {server} from "@/assets/json";
import {BaseProps} from "@/component/interface";
import {IDispatch, Reducers} from "@/redux/interface";
import {ArticleBean, CompleteArticle} from "@/component/article";
import {BodyTemplate} from "@/component/template";
import {axios} from "@/component/util";
import {AxiosResponse} from "axios";
import ArticleReply from "@/component/article/ArticleReply";


interface ArticleProps extends RouteComponentProps, BaseProps {

}

const Article: React.FC<ArticleProps> = () => {

    const currentArticle = useSelector<Reducers, ArticleBean>(
        state => state.articleStatus.currentArticle
    );
    const {id} = useParams();

    const [loding, setLoding] = useState(
        currentArticle == undefined || currentArticle.articleId != id
    );

    const dispatch = useDispatch<IDispatch>();

    useEffect(() => {
        if (loding) {
            axios.get<ArticleBean, AxiosResponse<ArticleBean>>(
                server.address + "/api/articles/" + id
            )
                .then(({data}) => {
                    if (data) {
                        dispatch({type: "CURRENT_ARTICLE", content: data});
                        setLoding(false);
                    }
                })
                .catch(err => err && console.log(err))
        }
    }, [loding]);
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
            <ArticleReply replys={undefined}>
                
            </ArticleReply>
        </BodyTemplate>
    );
};
export default Article;