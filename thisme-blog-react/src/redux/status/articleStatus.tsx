import {Map} from "immutable";
import {BaseReducer} from "@/redux/interface";
import {ArticleBean, PageArticle, PageArticles} from "@/component/article";

//文章基本状态
export interface ArticleState {
    pageArticles: PageArticles,
    currentPage: number,
    currentArticle?: ArticleBean,
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
            let { page, data }: PageArticle = content;
            return {
                ...state,
                pageArticle: state.pageArticles.set(page, data)
            };
        default:
            return state;
    }
};

export default ArticleStatus;