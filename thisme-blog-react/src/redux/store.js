"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainReducer_1 = require("./reducers/mainReducer");
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var reducers = {
    mainReducer: mainReducer_1.default
};
var composeEnhancer = eval('window.__REDUX_DEVTOOLS_EXTENSION__') && redux_1.compose;
// 开启redux dev工具
exports.DevStore = redux_1.createStore(redux_1.combineReducers(reducers), composeEnhancer(redux_1.applyMiddleware(redux_thunk_1.default)));
// 不开启redux dev工具
exports.PordStore = redux_1.createStore(redux_1.combineReducers(reducers), redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map