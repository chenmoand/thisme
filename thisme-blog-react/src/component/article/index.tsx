import React from "react";
import SimpleArticle from "./simpleArticle"
import CompleteArticle from "./completeArticle";
import {ArticleInterface as $Article, BaseProps} from "@/component/interface/articleInterface";

export {
    SimpleArticle, CompleteArticle
}


export type ArticleType = 'Simple' | 'Complete'

export interface ArticleProps extends BaseProps {
    type: ArticleType,
    src: $Article
}


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