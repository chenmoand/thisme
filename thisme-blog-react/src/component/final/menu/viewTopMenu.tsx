import React from "react";
import {Menu} from "antd";
import {SwitcherOutlined} from "@ant-design/icons/lib";

import {useSelector} from "react-redux";
import {Reducers} from "@/redux/interface";
import {Route, RouteState} from "@/redux/status/routeStatus";
import {NavLink} from "react-router-dom";


const ViewTopMenu: React.FC = props => {

    const routes = useSelector<Reducers, RouteState>(
        state => state.routeStatus
        .filter(
            (route: Route) => route.name !== false
        )
    )

    const {Item} = Menu;

    return (
        <Menu mode={"horizontal"}
              overflowedIndicator={<SwitcherOutlined/>}
              style={{
                  borderBottom: "none"
              }}
        >
            {routes.map(({name, path}, index) => {
                return (
                    <Item key={index}>
                        <NavLink to={typeof path == 'string' ? path : path[0]}>
                            {name}
                        </NavLink>
                    </Item>
                )
            }
            )}
        </Menu>
    );
}

export default ViewTopMenu;