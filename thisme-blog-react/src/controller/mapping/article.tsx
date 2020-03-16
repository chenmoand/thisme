import axios from "axios";
import * as React from "react";
import {useState} from "react";
import {Skeleton} from "antd";
import {RouteComponentProps, useParams} from "react-router";

import {ArticleBean, CompleteArticle} from "@/component/article";
import {BodyTemplate} from "@/component/template";
import {connect} from "react-redux";
import {doErr} from "@/log";

import {server} from "@/assets/json";
import {IAction, Reducers} from "@/redux/interface";
import {Dispatch} from "redux";
import {BaseProps} from "@/component/interface";


interface ArticleProps extends RouteComponentProps, BaseProps {
    currentArticle?: ArticleBean
    setCurrentArticle: (article: ArticleBean) => void;
}

const Article$: React.FC<ArticleProps> = props => {
    const {currentArticle, setCurrentArticle} = props;
    // 获取URL 上的id参数
    const {id} = useParams();

    // 是否显示加载组件
    const [loding, setLoding] = useState(true);
    (currentArticle && id === currentArticle.articleId) ?
        setLoding(false) :
        axios.get<ArticleBean>(`${server.address}/articles/${id}`)
            .then(({data}) => {
                // 确保后端发送数据不为空
                data && setCurrentArticle(data);
                setLoding(false);
            })
            .catch(doErr);

    return (
        <div className={"page-article"}>
            <BodyTemplate
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
    (state: Reducers) => {
        const {articleStatus} = state;
        return {
            currentArticle: articleStatus.currentArticle
        }
    },
    (dispatch: Dispatch<IAction>) => {
        return {
            setCurrentArticle: (article: ArticleBean) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    }
)(Article$);