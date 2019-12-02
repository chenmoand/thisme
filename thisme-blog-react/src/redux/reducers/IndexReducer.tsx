import {Reducer} from "redux";
import {IAction} from "../store";

/**
 * 初始声明state类型
 */
export interface IndexState {
    domain: string,
    webType: WebType,
}

// 页面大小
// export type WebType = "Big" | "Small" | "in";
export enum WebType {
    BIG,
    SMALL,
    IN
}

/**
 * 初始化state
 */
const init: IndexState = {
    domain: 'new.brageast.com',
    webType: WebType.BIG,
};

/**
 * 用于修改的指令操作
 */
const IndexReducer: Reducer<IndexState, IAction> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case 'DOMAIN':
            return {...state, domain: content};
        case 'WEBTYPE':
            return {...state, webType: content};
        default:
            return state;
    }
};

export default IndexReducer;