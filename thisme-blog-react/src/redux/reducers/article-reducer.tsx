import {ArticleInterface, PageArticle} from "@/component/interface/articleInterface";
import {Map} from "immutable";
import {BaseReducer} from "@/util/ReduxUtil";

//文章基本状态
export interface ArticleState {
    pageArticle: Map<number, ArticleInterface[]>,
    currentPage: number,
    currentArticle?: ArticleInterface,
    maxPage: number
}


const init: ArticleState = {
    pageArticle: Map<number, ArticleInterface[]>(),
    currentPage: 1,
    maxPage: 1,
};


const ArticleReducer: BaseReducer<ArticleState> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case 'CURRENT_PAGE':
            return {...state, currentPage: content};
        case 'PAGE_ARTICLE':
            let { page, articles }: PageArticle = content;
            return {
                ...state,
                pageArticle: state.pageArticle.set(page, articles)
            };
        default:
            return state;
    }
};

export default ArticleReducer;