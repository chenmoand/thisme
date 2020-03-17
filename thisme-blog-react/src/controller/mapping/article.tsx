import * as React from "react";
import {useState} from "react";
import {RouteComponentProps, useParams} from "react-router";

import {server} from "@/assets/json";
import {BaseProps} from "@/component/interface";
import {useDispatch, useSelector} from "react-redux";
import {IDispatch, Reducers} from "@/redux/interface";
import {ArticleBean, CompleteArticle} from "@/component/article";
import {BodyTemplate} from "@/component/template";
import {Skeleton} from "antd";
import {useRetryAxios} from "@/axios";


interface ArticleProps extends RouteComponentProps, BaseProps {

}

const Article: React.FC<ArticleProps> = props => {


    const currentArticle = useSelector<Reducers, ArticleBean>(state => state.articleStatus.currentArticle)

    const {id} = useParams();

    const [loding, setLoding] = useState(currentArticle == undefined || currentArticle.articleId != id);
    console.log(loding)

    return (
        <>
            <BodyTemplate
                title={currentArticle && currentArticle.title}
                left={
                    <>
                        <Skeleton
                            loading={loding}
                            paragraph={{rows: 8}}
                            title active={true}
                        >
                             <CompleteArticle article={currentArticle}/>
                        </Skeleton>
                        {/*What am i doing myself, the ghost knows*/}
                        {loding && <View id={id} setLoding={setLoding}/>}
                    </>
                }
            />
        </>
    );
};
export default Article;

interface ViewProps {
    id: string,
    setLoding: (boolean) => void
}

/**
 * 这个是个方法组件,不这么做的话, 会出现奇怪的BUG
 *
 * @param props
 * @constructor
 */
const View: React.FC<ViewProps> = props => {

    const {id, setLoding} = props;

    const dispatch = useDispatch<IDispatch>();

    const url = server.address + "/api/articles/" + id;

    const {data, error} = useRetryAxios<ArticleBean>({
        url: url,
        timeout: 1500,
        retry: 3,
        method: "get"
    });

    error && console.log(error);

    if (data) {
        console.log(data)
        dispatch({type: "CURRENT_ARTICLE", content: data});
        setLoding(false)
    }


    return (
        <>

        </>
    )
}

