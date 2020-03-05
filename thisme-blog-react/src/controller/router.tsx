import * as React from "react";
import {connect} from "react-redux";
import {Route, Switch, useLocation, withRouter} from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import TransitionGroup from "react-transition-group/TransitionGroup";
import {BaseProps} from "@/component/interface/articleInterface";
import "@/assets/style/animated-switch.less"
import {RouteState} from "@/redux/status/routeStatus";


interface PageViewProps extends BaseProps {
    routes: RouteState
}

/**
 * 页面分发组件
 * @param props
 * @constructor
 */
export const Body$: React.FC<PageViewProps> = props => {
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

export const Body = connect(
    state => {
        // @ts-ignore
        const {routeStatus} = state;
        return {
            routes: routeStatus,
        }
    },
)(Body$);

/**
 * 转换成持有Redux和Router的组件
 * 有关网址https://reacttraining.com/react-router/web/guides/redux-integration
 * @param mapStateToProps
 * @param mapDisPatchToProps
 * @param Component
 */
export const ConnectRouter = (mapStateToProps, mapDisPatchToProps, Component) => {
    // 这样写会报类型错误, 强迫症的我!!!
    // return withRouter(connect(mapStateToProps, mapDisPatchToProps)(Component));
    return connect(mapStateToProps, mapDisPatchToProps)(withRouter(Component));
};
