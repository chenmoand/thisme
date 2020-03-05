import {BaseReducer} from "@/redux/interface";

/**
 * 初始声明state类型
 */
export interface WebState {
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
 * 获取视图的大小
 * @param webType true 表示平板或者电脑 false表示手机
 */
export const viewSize = (webType: WebType): boolean => webType != WebType.SMALL;

/**
 * 初始化state
 */
const init: WebState = {
    webType: WebType.BIG,
};

/**
 * 用于修改的指令操作
 */
const WebStatus: BaseReducer<WebState> = (state = init, action) => {
    const {content} = action;
    if (action.type === 'WEBTYPE') {
        return {...state, webType: content};
    } else {
        return state;
    }
};

export default WebStatus;