/**
 * 初始声明state类型
 *
 */
export interface MainState{
    domain : string,
    webType : WebType,

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
const init:MainState = {
    domain : 'Example.com',
    webType : WebType.BIG,
};

/**
 * 用于修改的指令操作
 */
export interface MainAction {
    type: string,
    content?: any
}

export default function indexReducer(state:MainState = init, action:MainAction):MainState {
    switch (action.type) {
        case 'DOMAIN':
            return {...state, domain : action.content };
        case 'WEBTYPE':
            return {...state, webType : action.content };
        default:
            return state;
    }
}