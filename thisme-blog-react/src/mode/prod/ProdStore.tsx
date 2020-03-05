// 不开启redux dev工具
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducers} from "@/redux";

export const ProdStore = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);