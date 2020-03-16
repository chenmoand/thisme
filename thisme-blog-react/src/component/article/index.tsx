import React from "react";
import {List, Map} from "immutable";

import "@/assets/style/article.less"

export {default as CompleteArticle} from "./completeArticle";
export {default as ArticleTable } from "./articleTable";

export interface PageArticle {
    page: number,
    data: List<ArticleBean>
}

export type PageArticles = Map<number, List<ArticleBean>>

/**
 * 文章属性
 */
export interface ArticleBean {
    articleId: string, // 文章序号
    title: string, // 标题
    label: Array<string>, // 标签
    classify: string, // 分类
    describe: string, // 描述
    createdDate?: Date, // 发布日期
    lastModifiedDate?: Date, // 更新日期
    author: string, // 作者
    content: string, // 内容
    articleType: '原创' | '转载', // 文章类型
    replys?: Array<Reply>, // 回复
}

/**
 * 回复属性
 */
export interface Reply {
    createdName: string, // 姓名
    createdDate: Date, // 发布日期
    lastModifiedDate: Date,
    content: string, // 内容
    replys?: Array<Reply>, // 嵌套回复
}
