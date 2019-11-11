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
    ArticleId: number, // 文章序号
    Title: string, // 标题
    Label: string[], // 标签
    Classify: string, // 分类
    Describe: string, // 描述
    StartDate: Date, // 发布日期
    UpDate: Date, // 更新日期
    Author: string, // 作者
    Content: string, // 内容
    Chick: number, // 点击次数
    Url: string, // 地址
    Replys: Reply[],
}

/**
 * 回复属性
 */
export interface Reply {
    ReplyId: number,
    Name: string, // 姓名
    StartDate: Date, // 发布日期
    UpDate: Date, // 更新日期
    Content: string, // 内容
}