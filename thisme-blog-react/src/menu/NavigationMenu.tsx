import * as React from "react";
import {BaseProps} from "../util/PropsUtil";
import {NavLink} from "react-router-dom";

interface NavigationMenuProps extends BaseProps {

}

/**
 * 19/10/4  顶部菜单不用React的!
 * @param props
 */
const NavigationMenu:React.FC<NavigationMenuProps> = props => {
    return(
        <div
            style={props.style}
            className={'navigation-menu ' + props.className}
        >
            <div className={"navigation-menu-bj"}>
            </div>
            <ul
                className={"navigation-menu-li"}
            >
                <li>
                    <NavLink to={"index"}>主页</NavLink>
                </li>
                <li>
                    <NavLink to={"index"}>目录</NavLink>
                </li>
                <li>
                    <NavLink to={"index"}>更新记录</NavLink>
                </li>
                <li>
                    <NavLink to={"index"}>关于我</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default NavigationMenu;