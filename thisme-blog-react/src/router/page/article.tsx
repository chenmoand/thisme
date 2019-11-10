import * as React from "react";
import {ConnectRouter} from "../../util/ComponentUtil";
import {RouteComponentProps} from "react-router";
import {Article, BaseProps} from "../../util/PropsUtil";
import {equalPath} from "../../util/RouterUtil";
import {useState} from "react";
import {Skeleton} from "antd";


interface ArticleProps extends RouteComponentProps, BaseProps{
    currentArticle?: Article
    setCurrentArticle: (article: Article) => void;
}

const Article$:React.FC<ArticleProps> = props => {
    const { currentArticle, setCurrentArticle, location } = props;
    // 是否显示加载组件
    const [ loding, setLoding ] = useState(true);
	console.log(props);
    if(currentArticle != undefined && equalPath(location.pathname, currentArticle.Url) ) {
        setLoding(false);
    } else {
        //TODO 发送AJAX请求 (暂时占位置?)
    }

    return(
        <div className={"page-Article"}>
            <Skeleton loading={loding} title paragraph active={true}>
                test
            </Skeleton>
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
        return{
            setCurrentArticle: (article: Article) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    },
    Article$
);