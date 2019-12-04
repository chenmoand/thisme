import * as React from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {BaseProps} from "../util/PropsUtil";
import {RouteState} from "../redux/reducers/RouteReducer";
import {connect} from "react-redux";
import "../style/AnimatedSwitch.less"
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";


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
    let location = useLocation();

    return (
        <div style={{
            marginTop: "2em",
            position: "relative",
            ...style
        }}
             className={className}
        >
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames={"page"}
                >
                    <Switch location={location}>
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
                </CSSTransition>
            </TransitionGroup>
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
