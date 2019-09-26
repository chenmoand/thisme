/**
 * 初始声明state类型
 *
 */
export interface mainRedInterFace {
    count : number,
}

/**
 * 初始化state
 */
const init:mainRedInterFace = {
    count : 100
};

export default function mainReducer(state:mainRedInterFace = init, action) {
    switch (action.type) {
        case 'ADD':
            return {count : state.count + 1};
        case 'DEL':
            return {count : state.count - 1};
        default:
            return state;
    }
}