import {Map} from "immutable";
import {BaseReducer} from "@/redux/interface";
import {ArticleBean} from "@/component/article";

//文章基本状态
export interface ArticleState {
    maxPage: number
    currentPage: number,
    currentArticle: ArticleBean,
}


const init: ArticleState = {
    maxPage: 0,
    currentPage: 1,
    currentArticle: undefined
};


const ArticleStatus: BaseReducer<ArticleState> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case 'CURRENT_PAGE':
            return {...state, currentPage: content};
        case 'CURRENT_ARTICLE':
            return {...state, currentArticle: content}
        case 'MAX_PAGE':
            return {...state, maxPage: content}
        default:
            return state;
    }
};

export default ArticleStatus;