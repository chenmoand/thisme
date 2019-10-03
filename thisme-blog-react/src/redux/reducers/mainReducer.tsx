/**
 * 初始声明state类型
 *
 */
export interface MainState{
    count : number,
    domain : string,

}

/**
 * 初始化state
 */
const init:MainState = {
    count : 100,
    domain: 'Example.com'
};

/**
 * 用于修改的指令操作
 */
export interface MainAction {
    type: string,
    content?: any
}

export default function mainReducer(state:MainState = init, action:MainAction):MainState {
    switch (action.type) {
        case 'ADD':
            return  {...state, count : state.count + 1};
        case 'DEL':
            return {...state, count : state.count - 1};
        case 'DOMAIN':
            return {...state, domain : action.content };
        default:
            return state;
    }
}