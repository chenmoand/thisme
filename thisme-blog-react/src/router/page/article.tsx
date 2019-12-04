import * as React from "react";
import {useState} from "react";
import {Skeleton} from "antd";
import {RouteComponentProps} from "react-router";
import {equalPath} from "../../util/RouterUtil";
import {Article, BaseProps} from "../../util/PropsUtil";
import {CompleteArticle} from "../../component/article-list";
import BodySyle from "../../component/body-style";
import axios from "axios";
import {setRequestUrl} from "../../util/ApiUrl";
import {connect} from "react-redux";
import {doErr} from '../../util/LogUtil';


interface ArticleProps extends RouteComponentProps, BaseProps {
    currentArticle?: Article
    setCurrentArticle: (article: Article) => void;
}

const Article$: React.FC<ArticleProps> = props => {
    const {currentArticle, setCurrentArticle, location} = props;
    console.log(props);
    // 是否显示加载组件
    const [loding, setLoding] = useState(true);
    if (currentArticle && equalPath(location.pathname, currentArticle.articleId)) {
        setLoding(false);
    } else {
        //TODO 发送AJAX请求 (articleId暂时为null?)
        axios.get(setRequestUrl(`getArticle?articleId=${null}`))
            .then(({data}) => {
                setCurrentArticle(data);
                setLoding(false);
            })
            .catch(doErr);
    }

    return (
        <div className={"page-article"}>
            <BodySyle
                title={currentArticle && currentArticle.title.substring(0, 10) + "..."}
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
            setCurrentArticle: (article: Article) => dispatch({type: "CURRENT_PAGE", content: article}),
        }
    }
)(Article$);