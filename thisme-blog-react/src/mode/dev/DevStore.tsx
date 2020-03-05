import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {reducers} from "@/redux";

// 开启redux dev工具
const DevStore = createStore(
    combineReducers(reducers),
    composeWithDevTools(
        applyMiddleware(thunk),
        // 使用日志打印方法， collapsed让action折叠
        applyMiddleware(require("redux-logger").createLogger({collapsed: true})),
    )
);

export default DevStore