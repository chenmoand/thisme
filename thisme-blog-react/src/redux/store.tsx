import mainReducer from './reducers/mainReducer';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';

const reducers = {
    mainReducer
};
/*const composeEnhancer  = eval('window.__REDUX_DEVTOOLS_EXTENSION__') || compose;
// 开启redux dev工具
export const DevStore = createStore(
    combineReducers(reducers),
    composeEnhancer(
        applyMiddleware(thunk),
    )
);*/

// 不开启redux dev工具
export const PordStore = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);