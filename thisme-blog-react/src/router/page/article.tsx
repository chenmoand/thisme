import axios from "axios";
import * as React from "react";
import {useState} from "react";
import {Skeleton} from "antd";
import {RouteComponentProps, useParams} from "react-router";

import {ArticleInterface, BaseProps} from "@/component/interface/articleInterface";
import {CompleteArticle} from "@/component/article";
import BodyStyle from "@/component/body-style";
import {connect} from "react-redux";
import {doErr} from "@/util/LogUtil";

import {server} from "@/assets/json";


interface ArticleProps extends RouteComponentProps, BaseProps {
    currentArticle?: ArticleInterface
    setCurrentArticle: (article: ArticleInterface) => void;
}

const Article$: React.FC<ArticleProps> = props => {
    const {currentArticle, setCurrentArticle} = props;
    // 获取URL 上的id参数
    const {id} = useParams();

    // 是否显示加载组件
    const [loding, setLoding] = useState(true);
    (currentArticle && id === currentArticle.articleId) ?
        setLoding(false) :
        axios.get<ArticleInterface>(`${server.address}/articles/${id}`)
            .then(({data}) => {
                // 确保后端发送数据不为空
                data && setCurrentArticle(data);
                setLoding(false);
            })
            .catch(doErr);

    return (
        <div className={"page-article"}>
            <BodyStyle
                title={currentArticle && currentArticle.title.substring(0, 8) + "..."}
                left={
                    <div className={loding && "complete-article"}>
                        <Skeleton loading={loding} title paragraph={{rows: 8}} active={true}>
                            <CompleteArticle article={currentArticle}/>
                        </Skeleton>
                    </div>
                }
            />
        </div>
    );
};

export default connect(
    state => {
        // @ts-ignore
        const {articleReducer} = state;
        return {
            currentArticle: articleReducer.currentArticle
        }
    },
    dispatch => {
        return {
            setCurrentArticle: (article: ArticleInterface) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    }
)(Article$);