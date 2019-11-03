import * as React from "react";
import {BaseProps} from "../util/PropsUtil";
import {NavLink} from "react-router-dom";
import { Navbar } from "rsuite";
import Nav from "rsuite/lib/Nav";
import {WebType} from "../redux/reducers/mainReducer";
import {connect} from "react-redux";

require("rsuite/lib/Navbar/styles");
require("rsuite/lib/Nav/styles");
/**
 * 基础道具
 */
interface NavigationMenuProps extends BaseProps {
    webType : WebType,
}

/**
 * <Nav.Item>标签和<NavLink>其中的a冲突了
 * a标签不能包含a标签,不过无上大雅.用 <object>解决了
 * 2019/11/3 这个库是真的有毒不加载styles
 * @param props
 * @constructor
 */
export const RsuiteNavigationMenu: React.FC<NavigationMenuProps> = props => {
    return(
        <Navbar
            style={props.style}
            className={props.className}
        >
            <Navbar.Header>
                {props.children}
            </Navbar.Header>
            <Navbar.Body
                className={"navbar-body"}
            >
                <Nav>
                    <Nav.Item>
                        <object>
                            <NavLink to={"index"}>首页</NavLink>
                        </object>
                    </Nav.Item>
                    <Nav.Item>
                        <object>
                            <NavLink to={"index"}>目录</NavLink>
                        </object>
                    </Nav.Item>
                    <Nav.Item>
                        <object>
                            <NavLink to={"index"}>更新</NavLink>
                        </object>
                    </Nav.Item>
                    <Nav.Item
                        style={{
                            width: 80
                        }}
                    >
                        <object>
                            <NavLink to={"index"}>关于我</NavLink>
                        </object>
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
};


export default connect(
    state => {
        // @ts-ignore
        const { mainReducer } = state;
        return {
            webType : mainReducer.webType
        };
    }, null
)(RsuiteNavigationMenu);

/**
 * 19/10/4  顶部菜单不用React的!
 * 19/10/8  弃用
 * @param props
 */
const DivNavigationMenu:React.FC<NavigationMenuProps> = props => {
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


