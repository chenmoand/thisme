import * as React from "react";
import {useSelector} from "react-redux";
import {Route, Switch, useLocation} from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";

import "@/assets/style/animated-switch.less"
import {RouteState} from "@/redux/status/routeStatus";
import {BaseProps} from "@/component/interface";
import {Reducers} from "@/redux/interface";


/**
 * 页面分发组件
 *
 * @param props
 * @constructor
 */
export const BodyController: React.FC<BaseProps> = props => {

    const routes = useSelector<Reducers, RouteState>(state => state.routeStatus)

    const {className, style} = props;

    let location = useLocation();

    return (
        <div style={{
            marginTop: "2em",
            position: "relative",
            ...style
        }}
             className={className}
        >
            {/*动画只能在PROD模式下生产才能显示*/}
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