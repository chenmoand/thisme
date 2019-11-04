import * as React from "react";
import {Route, Switch} from "react-router";

export const PageTop:React.FC = () => {
    return(
        <div>

        </div>
    )
};

export const PageBody:React.FC = () => {
    return(
        <Switch>
                <Route
                    exact path={['/', 'index', 'index.html']}
                    component={null}
                />
                <Route
                    exact path={['directory']}
                    component={null}
                />
        </Switch>
    )
};
