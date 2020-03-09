import {CSSProperties} from "react";
import {Map} from "immutable";

/**
 * 基础的组件
 */
export interface BaseProps {
    style?: CSSProperties,
    className?: string,
}

export interface PageArticle {
    page: number,
    articles: Array<ArticleInterface>
}

export type PageArticles = Map<number, ArticleInterface[]>


/**
 * 文章属性
 */
export interface ArticleInterface {
    articleId: string, // 文章序号
    title: string, // 标题
    label: Array<string>, // 标签
    classify: string, // 分类
    describe: string, // 描述
    createdDate?: Date, // 发布日期
    lastModifiedDate?:Date, // 更新日期
    author: string, // 作者
    content: string, // 内容
    articleType: ArticleType, // 文章类型
    replys?: Array<Reply>, // 回复
}

export type ArticleType = '原创' | '转载';

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