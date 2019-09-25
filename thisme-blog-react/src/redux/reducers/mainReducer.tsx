
export interface mainRedInterFace {
    count : number,
}

export default function mainReducer(state:mainRedInterFace = {count : 100}, action) {
    switch (action.type) {
        case 'ADD':
            // console.log(state);
            return {count : state.count + 1};
        case 'DEL':
            return {count : state.count - 1};
        default:
            return state;
    }
}