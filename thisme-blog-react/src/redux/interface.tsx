import {Action, Dispatch, Reducer} from "redux";
import {WebState} from "@/redux/status/webStatus";
import {ArticleState} from "@/redux/status/articleStatus";
import {RouteState} from "@/redux/status/routeStatus";

export interface IAction extends Action<string> {
    content?: any
}

/**
 * 基础Reducer
 * 用于管理State
 */
export type BaseReducer<S> = Reducer<S, IAction>;


export interface Reducers {
    webStatus: WebState,
    articleStatus: ArticleState,
    routeStatus: RouteState
}

export type IDispatch = Dispatch<IAction>