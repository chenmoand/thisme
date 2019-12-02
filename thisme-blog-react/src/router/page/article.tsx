import * as React from "react";
import {useState} from "react";
import {Skeleton} from "antd";
import {RouteComponentProps} from "react-router";
import {equalPath} from "../../util/RouterUtil";
import {ConnectRouter} from "../../util/ComponentUtil";
import {Article, BaseProps} from "../../util/PropsUtil";
import {CompleteArticle} from "../../component/article-list";
import BodySyle from "../../component/body-style";
import axios from "axios";
import {setRequestUrl} from "../../util/ApiUrl";


interface ArticleProps extends RouteComponentProps, BaseProps {
    currentArticle?: Article
    setCurrentArticle: (article: Article) => void;
}

const Article$: React.FC<ArticleProps> = props => {
    const {currentArticle, setCurrentArticle, location} = props;
    // 是否显示加载组件
    const [loding, setLoding] = useState(true);
    // console.log(props);
    if (currentArticle != undefined && equalPath(location.pathname, currentArticle.articleId)) {
        setLoding(false);
    } else {
        //TODO 发送AJAX请求 (articleId暂时为null?)
        axios.get(setRequestUrl(`getArticle?articleId=${null}`))
            .then(res => {
                setCurrentArticle(res.data);
                setLoding(true);
            })
            .catch(console.log);
    }

    return (
        <div className={"page-Article"}>
            <BodySyle
                title={currentArticle.title.substring(0,10) + "..."}
                left={
                    <Skeleton loading={loding} title paragraph={{rows: 8}} active={true}>
                        <CompleteArticle article={currentArticle}/>
                    </Skeleton>
                }
            />
        </div>
    );
};

export default ConnectRouter(
    state => {
        const {articleReducer} = state;
        return {
            currentArticle: articleReducer.currentArticle
        }
    },
    dispatch => {
        return {
            setCurrentArticle: (article: Article) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    },
    Article$
);