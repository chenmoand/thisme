import * as React from "react";
import {BaseReducer} from "../../util/ReduxUtil";
import Home from "../../router/page/home";
import Directory from "../../router/page/directory";
import Update from "../../router/page/update";
import About from "../../router/page/about";
import Article from "../../router/page/article";
import Status from "../../router/page/status";
import {RouteComponentProps} from "react-router";


export interface Route {
    path: string | string[],
    name: string | false, // 名字 如果为false 不在顶部菜单显示
    title?: string, // 标题 暂时用处不大
    Component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    exact?: boolean //是否绝对路由
}

export type RouteState = Route[];


const init: RouteState = [
    {path: ['/','/index', '/index.html'], name: "首页", title: "沉默的个人小站", exact: true, Component: Home},
    {path: ['/directory'], name: "目录", title: "目录", exact: true,Component: Directory},
    {path: ['/update'], name: "更新", title: "更新记录", exact: true,Component: Update},
    {path: ['/about'], name: "关于我", title: "沉默的个人介绍", exact: true,Component: About},
    {path: ['/article/**'], name: false, Component: Article},
    {path: ['/**'], name: false, Component: Status},
];

const RouteReducer: BaseReducer<RouteState> = (state = init, action) => {
    const {content} = action;
    switch (action.type) {
        case "ROUTE_ADD":
            return {...state, ...content};
        default:
            return state;
    }
};

export default RouteReducer;
