import * as React from "react";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";
import {Col, Menu, Row} from "antd";
import Link from "../router/link";
import {NavLink} from "react-router-dom";


interface TopMenuProps {
    webType: boolean,
}

const TopMenu: React.FC<TopMenuProps> = props => {
    const { webType } = props;
    return(
        <Row
            style={webType ? {height : 63} : {height : 64}}
            type={"flex"}
            justify={webType ? "start" : "center"}
        >
            <Col
                offset={2} span={4}
            >
                logo
            </Col>
            <Col
                offset={0} span={10}
            >
                <ThisMenu webType={webType} />
            </Col>
            <Col
                offset={2} span={6}
            >
                search
            </Col>

        </Row>
    );
} ;
export default connect(
    state => {
        // @ts-ignore
        const { indexReducer } = state;
        return {
            webType : viewSize(indexReducer.webType),
        };
    }, null
)(TopMenu);

interface ThisMenuProps {
    webType: boolean,
}


const ThisMenu: React.FC<ThisMenuProps> = props => {
    const { webType } = props;
    const { Item }  = Menu;
    return(
        <Menu mode={"horizontal"}>
            <Item>
                <NavLink to={"/"}>首页</NavLink>
            </Item>
            <Item>
                <NavLink to={"/directory"}>目录</NavLink>
            </Item>
        </Menu>
    );
};
