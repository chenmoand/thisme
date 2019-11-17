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
    articles: Article[]
}


/**
 * 文章属性
 */
export interface Article {
    articleId: string, // 文章序号
    title: string, // 标题
    label: string[], // 标签
    classify: string, // 分类
    describe: string, // 描述
    startDate: Date, // 发布日期
    upDate: Date, // 更新日期
    author: string, // 作者
    content: string, // 内容
    chick: number, // 点击次数
    replys: Reply[],
}

/**
 * 回复属性
 */
export interface Reply {
    replyId: string,
    name: string, // 姓名
    startDate: Date, // 发布日期
    upDate: Date, // 更新日期
    content: string, // 内容
}