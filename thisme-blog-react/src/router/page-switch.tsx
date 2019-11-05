import * as React from "react";
import {Route, Switch} from "react-router";
import Home from "./page/home";
import Directory from "./page/directory";
import Update from "./page/update";
import About from "./page/about";
import {BaseProps} from "../util/PropsUtil";

/**
 * 页面分发组件
 * @param props
 * @constructor
 */
export const PageBody:React.FC<BaseProps> = props => {
    const { className, style } = props;
    return(
        <div style={{marginTop : "2em", ...style}}
             className={className}
        >
            <Switch>
                    <Route
                        exact path={['/', '/index', '/index.html']}
                        component={Home}
                    />
                    <Route
                        exact path={['/directory']}
                        component={Directory}
                    />
                    <Route
                        exact path={['/update']}
                        component={Update}
                    />
                    <Route
                        exact path={['/about']}
                        component={About}
                    />
            </Switch>
        </div>
    )
};
