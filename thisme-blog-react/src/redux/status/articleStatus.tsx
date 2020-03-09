import {Map} from "immutable";
import {BaseReducer} from "@/redux/interface";
import {ArticleInterface, PageArticle, PageArticles} from "@/component/interface/articleInterface";

//文章基本状态
export interface ArticleState {
    pageArticles: PageArticles,
    currentPage: number,
    currentArticle?: ArticleInterface,
    maxPage: number
}


const init: ArticleState = {
    pageArticles: Map(),
    currentPage: 1,
    maxPage: 1,
};


const ArticleStatus: BaseReducer<ArticleState> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case 'CURRENT_PAGE':
            return {...state, currentPage: content};
        case 'PAGE_ARTICLE':
            let { page, articles }: PageArticle = content;
            return {
                ...state,
                pageArticle: state.pageArticles.set(page, articles)
            };
        default:
            return state;
    }
};

export default ArticleStatus;