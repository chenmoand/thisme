import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from 'redux-logger'
import IndexReducer from "./reducers/index-reducer";
import ArticleReducer from "./reducers/article-reducer";
import RouteReducer from "./reducers/route-reducer";

const reducers = {
    indexReducer: IndexReducer,
    articleReducer: ArticleReducer,
    routeReducer: RouteReducer

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
export const ProdStore = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);


