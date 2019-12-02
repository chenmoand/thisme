import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from 'redux-logger'
import IndexReducer from "./reducers/IndexReducer";
import ArticleReducer from "./reducers/ArticleReducer";

const reducers = {
    indexReducer: IndexReducer,
    articleReducer: ArticleReducer

};

// 使用日志打印方法， collapsed让action折叠
const loggerMiddleware = createLogger({collapsed: true});

// 开启redux dev工具
export const DevStore = createStore(
    combineReducers(reducers),
    composeWithDevTools(
        applyMiddleware(thunk),
        applyMiddleware(loggerMiddleware),
    )
);

// 不开启redux dev工具
export const PordStore = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

export interface IAction extends Action<string>{
    content?: any
}

