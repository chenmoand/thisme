import {Article, PageArticle} from "../../util/PropsUtil";

/**
 * 初始声明state类型
 *
 */
export interface MainState{
    domain: string,
    webType: WebType,
    pageArticle: Map<number, Article[]>,
    currentPage: number,
}
// 页面大小
// export type WebType = "Big" | "Small" | "in";
export enum WebType {
    BIG,
    SMALL,
    IN
}

/**
 * 初始化state
 */
const init:MainState = {
    domain : 'Brageast.com',
    webType : WebType.BIG,
    pageArticle: undefined,
    currentPage : 1,
};

/**
 * 用于修改的指令操作
 */
export interface MainAction {
    type: string,
    content?: any
}

export default function indexReducer(state:MainState = init, action:MainAction):MainState {
    const { content } = action;
    switch (action.type) {
        case 'DOMAIN':
            return {...state, domain : content };
        case 'WEBTYPE':
            return {...state, webType : content };
        case 'PAGE_ARTICLE':
            let page_Article: PageArticle = content;
            return {
                ...state, pageArticle : state.pageArticle.set(page_Article.page, page_Article.articles)
            };
        default:
            return state;
    }
}