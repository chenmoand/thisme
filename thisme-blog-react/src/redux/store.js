"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var redux_logger_1 = require("redux-logger");
var IndexReducer_1 = require("./reducers/IndexReducer");
var ArticleReducer_1 = require("./reducers/ArticleReducer");
var RouteReducer_1 = require("./reducers/RouteReducer");
var reducers = {
    indexReducer: IndexReducer_1.default,
    articleReducer: ArticleReducer_1.default,
    routeReducer: RouteReducer_1.default
};
// 使用日志打印方法， collapsed让action折叠
var loggerMiddleware = redux_logger_1.createLogger({ collapsed: true });
// 开启redux dev工具
exports.DevStore = redux_1.createStore(redux_1.combineReducers(reducers), redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default), redux_1.applyMiddleware(loggerMiddleware)));
// 不开启redux dev工具
exports.ProdStore = redux_1.createStore(redux_1.combineReducers(reducers), redux_1.applyMiddleware(redux_thunk_1.default));
//# sourceMappingURL=store.js.map