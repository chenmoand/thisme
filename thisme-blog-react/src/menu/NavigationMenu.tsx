import * as React from "react";
import {BaseProps} from "../util/PropsUtil";
import {NavLink} from "react-router-dom";
import {Navbar} from "rsuite";
import Nav from "rsuite/lib/Nav";

/**
 * 基础道具
 */
interface NavigationMenuProps extends BaseProps {

}

const NavigationMenu: React.FC<NavigationMenuProps> = props => {
    return(
        <Navbar
            style={props.style}
            className={props.className}
        >
            <Navbar.Header>
                {props.children}
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <Nav.Item>
                        <NavLink to={"index"}>首页</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to={"index"}>目录</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to={"index"}>更新</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to={"index"}>关于我</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
};

export default NavigationMenu;

/**
 * 19/10/4  顶部菜单不用React的!
 * 19/10/8  弃用
 * @param props
 */
const OldNavigationMenu:React.FC<NavigationMenuProps> = props => {
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


