import indexReducer from './reducers/IndexReducer';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from 'redux-logger'

const reducers = {
    indexReducer: indexReducer
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