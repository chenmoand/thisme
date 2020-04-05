import React from "react";

import "@/assets/style/article.less"
import {List} from "immutable";

export {default as CompleteArticle} from "./CompleteArticle";
export {default as ArticleTable} from "./ArticleTable";

/**
 * 文章属性
 */
export interface ArticleBean {
    articleId: string, // 文章序号
    title: string, // 标题
    label: List<string>, // 标签
    classify: string, // 分类
    describe: string, // 描述
    createdDate?: Date, // 发布日期
    lastModifiedDate?: Date, // 更新日期
    author: string, // 作者
    content: string, // 内容
    articleType: '原创' | '转载', // 文章类型
    replys?: List<Reply>, // 回复
}

/**
 * 回复属性
 */
export interface Reply {
    createdName: string, // 姓名
    createdDate: Date, // 发布日期
    lastModifiedDate: Date,
    content: string, // 内容
    replys?: List<Reply>, // 嵌套回复
}
