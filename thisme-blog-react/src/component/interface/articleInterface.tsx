import {CSSProperties} from "react";

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


/**
 * 文章属性
 */
export interface ArticleInterface {
    articleId: string, // 文章序号
    title: string, // 标题
    label: Array<string>, // 标签
    classify: string, // 分类
    describe: string, // 描述
    startDate?: Date, // 发布日期
    update?: Date, // 更新日期
    author: string, // 作者
    content: string, // 内容
    chick: number, // 点击次数
    replys?: Array<Reply>, // 回复
    articleType: ArticleType, // 文章类型
}

export type ArticleType = 'ORIGINAL' | 'REPRINT';

/**
 * 回复属性
 */
export interface Reply {
    name: string, // 姓名
    startDate: Date, // 发布日期
    update: Date, // 更新日期
    content: string, // 内容
}