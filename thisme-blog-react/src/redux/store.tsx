import mainReducer from './reducers/mainReducer';
import {combineReducers, createStore} from "redux";

const reducers = {
    mainReducer
};
// 开启redux dev工具
export const DevStore = createStore(combineReducers(reducers), eval("window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"));

// 不开启redux dev工具
export const PordStore = createStore(combineReducers(reducers));