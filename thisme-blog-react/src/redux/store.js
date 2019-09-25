"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainReducer_1 = require("./reducers/mainReducer");
var redux_1 = require("redux");
var reducers = {
    mainReducer: mainReducer_1.default
};
// 开启redux dev工具
exports.DevStore = redux_1.createStore(redux_1.combineReducers(reducers), eval("window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()"));
// 不开启redux dev工具
exports.PordStore = redux_1.createStore(redux_1.combineReducers(reducers));
//# sourceMappingURL=store.js.map