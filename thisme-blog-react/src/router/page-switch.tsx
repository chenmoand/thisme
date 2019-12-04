import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {BaseProps} from "../util/PropsUtil";
import {RouteState} from "../redux/reducers/RouteReducer";
import {connect} from "react-redux";


interface PageBodyProps extends BaseProps {
    routes: RouteState
}


/**
 * 页面分发组件
 * @param props
 * @constructor
 */
export const PageBody$: React.FC<PageBodyProps> = props => {
    const {className, style, routes} = props;

    return (
        <div style={{
                marginTop: "2em",
                position: "relative",
            ...style}}
             className={className}
        >
            <Switch>

                {routes.map(({path, Component, exact}, index) => {
                    return (
                        <Route
                            key={index}
                            path={path}
                            exact={exact}
                            component={Component}
                        >
                        </Route>
                    )
                })}
            </Switch>
        </div>
    )
};

export const PageBody = connect(
    state => {
        // @ts-ignore
        const {routeReducer} = state;
        return {
            routes: routeReducer,
        }
    },
)(PageBody$);
