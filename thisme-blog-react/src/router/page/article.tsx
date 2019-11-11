import * as React from "react";
import {useState} from "react";
import {Skeleton} from "antd";
import {RouteComponentProps} from "react-router";
import {equalPath} from "../../util/RouterUtil";
import {ConnectRouter} from "../../util/ComponentUtil";
import {Article, BaseProps} from "../../util/PropsUtil";
import {CompleteArticle} from "../../component/article-list";
import BodySyle from "../../component/body-style";


interface ArticleProps extends RouteComponentProps, BaseProps {
    currentArticle?: Article
    setCurrentArticle: (article: Article) => void;
}

const Article$: React.FC<ArticleProps> = props => {
    const {currentArticle, setCurrentArticle, location} = props;
    // 是否显示加载组件
    const [loding, setLoding] = useState(true);
    console.log(props);
    if (currentArticle != undefined && equalPath(location.pathname, currentArticle.Url)) {
        setLoding(false);
    } else {
        //TODO 发送AJAX请求 (暂时占位置?)
    }

    return (
        <div className={"page-Article"}>
            <BodySyle
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
        const {indexReducer} = state;
        return {
            currentArticle: indexReducer.currentArticle
        }
    },
    dispatch => {
        return {
            setCurrentArticle: (article: Article) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    },
    Article$
);