/**
 * 初始声明state类型
 *
 */
export interface MainState{
    count : number,
}

/**
 * 初始化state
 */
const init:MainState = {
    count : 100
};

export default function mainReducer(state:MainState = init, action):MainState {
    switch (action.type) {
        case 'ADD':
            return {count : state.count + 1};
        case 'DEL':
            return {count : state.count - 1};
        default:
            return state;
    }
}