import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {BaseProps} from "../util/PropsUtil";
import {RouteState} from "../redux/reducers/RouteReducer";
import {connect} from "react-redux";
import {CSSTransition} from "react-transition-group";


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
        <div style={{marginTop: "2em", ...style}}
             className={className}
        >
            <Switch>

                {routes.map(({path, Component, exact}, index) => {
                    return (
                        <Route
                            key={index}
                            path={path}
                            exact={exact}
                        >
                            {({match}) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="fade"
                                    unmountOnExit
                                >
                                    <div className="fade">
                                        {Component}
                                    </div>
                                </CSSTransition>
                            )}
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
