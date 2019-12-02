import {Article, PageArticle} from "../../util/PropsUtil";
import {Map} from "immutable";
import {Reducer} from "redux";
import {IAction} from "../store";

/**
 * 文章基本状态
 */
export interface ArticleState {
    pageArticle: Map<number, Article[]>,
    currentPage: number,
    currentArticle?: Article,
}


const init: ArticleState = {
    pageArticle: Map<number, Article[]>(),
    currentPage: 1,
};


const ArticleReducer: Reducer<ArticleState, IAction> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case 'CURRENT_PAGE':
            return {...state, currentPage: content};
        case 'PAGE_ARTICLE':
            let page_Article: PageArticle = content;
            return {
                ...state, pageArticle: state.pageArticle.set(page_Article.page, page_Article.articles)
            };
        default:
            return state;
    }
};

export default ArticleReducer;