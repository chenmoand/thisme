import * as React from "react";
import ChickTest from "./chick_test";
import {NavLink, Route, Switch} from "react-router-dom";


const AppTest:React.FC = () => {
    return(
        <div>
            <NavLink to='/say'>用户列表</NavLink>
            <Switch>
                <Route path='/say' component={ChickTest} />
            </Switch>
            __________________
            <ChickTest />
        </div>
    )
};

export default AppTest;