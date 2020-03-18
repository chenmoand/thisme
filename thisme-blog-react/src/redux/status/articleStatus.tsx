import {BaseReducer} from "@/redux/interface";
import {ArticleBean} from "@/component/article";

//文章基本状态
export interface ArticleState {
    articleAllSize: number
    currentPage: number,
    currentArticle: ArticleBean,
}


const init: ArticleState = {
    articleAllSize: undefined,
    currentPage: 1,
    currentArticle: undefined
};


const ArticleStatus: BaseReducer<ArticleState> = (state = init, action): ArticleState => {
    const {content} = action;
    switch (action.type) {
        case 'CURRENT_PAGE':
            return {...state, currentPage: content};
        case 'CURRENT_ARTICLE':
            return {...state, currentArticle: content};
        case 'ARTICLE_ALL_SIZE':
            return {...state, articleAllSize: content};
        default:
            return state;
    }
};

export default ArticleStatus;