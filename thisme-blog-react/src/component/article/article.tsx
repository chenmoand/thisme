import React from "react";
import {ArticleProps, CompleteArticle, SimpleArticle} from "@/component/article/index";

const Article: React.FC<ArticleProps> = props => {

    const {type, src, className, style} = props;

    return (
        <>
            {
                type === 'Simple' ?
                    <SimpleArticle article={src} className={className} style={style}/>
                    :
                    <CompleteArticle article={src} className={className} style={style}/>
            }
        </>
    )

};
export default Article;