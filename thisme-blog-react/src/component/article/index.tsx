import React from "react";
import {ArticleInterface as $Article, BaseProps} from "@/component/interface/articleInterface";

export {default as CompleteArticle} from "./completeArticle";
export {default as SimpleArticle} from "./simpleArticle"
export {default as Article} from "./article"

export type ArticleType = 'Simple' | 'Complete'

export interface ArticleProps extends BaseProps {
    type: ArticleType,
    src: $Article
}