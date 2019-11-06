import * as React from "react";
import {Article, BaseProps} from "../util/PropsUtil";

interface SimpleArticleProps extends BaseProps {
    article: Article,
}

const SimpleArticle:React.FC<SimpleArticleProps> = props => {
    return(
        <div>

        </div>
    );
};

interface ArticleListProps extends BaseProps {
    currentPage: number,
    maxPage: number,
    pageArticles?: Map<number, Article[]>,
    setPageArticle:  (pa: Map<number, Article[]>) => void;
}
const ArticleList:React.FC<ArticleListProps> = props => {
    const {
        className, maxPage, pageArticles, currentPage, setPageArticle
    } = props;

    let articles: Article[] = pageArticles.get(currentPage);

    if(articles === undefined) {
        //TODO 发送AJAX并加入到Redux上
    }

    return(
        <div className={className}>
            {
                articles.map((item, index) => {
                    return(
                        <React.Fragment key={index}>
                            <SimpleArticle article={item} />
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
};