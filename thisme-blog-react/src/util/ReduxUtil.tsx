import {Action, Reducer} from "redux";

export interface IAction extends Action<string>{
    content?: any
}

/**
 * 基础Reducer
 * 用于管理State
 */
export type BaseReducer<S> = Reducer<S, IAction>;