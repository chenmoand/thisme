import * as React from "react";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";
import {Avatar, Col, Menu, Row, Input, Icon} from "antd";
import {NavLink} from "react-router-dom";
import "../style/menu.less"


interface TopMenuProps {
    webType: boolean,
}


const TopMenu: React.FC<TopMenuProps> = props => {
    const { webType } = props;
    return(
        <Row
            style={{height : 48, backgroundColor: "#FFF", }}
            type={"flex"}
            justify={"start"}
        >
            <Col offset={webType ? 2 : 6}
                 span={webType ? 4 : 8}
                 order={webType ? 0 : 1}
            >
                <div style={{marginTop: 6, height : 48}}>
                    <Avatar src={"https://avatars2.githubusercontent.com/u/37534392"}
                            style={{float: "left"}}
                            alt={"CM"}
                    />
                    <div className={"avatar-name"} >chenmo</div>
                </div>
            </Col>
            <Col offset={webType ? 0 : 0}
                 span={webType ? 10 : 1}
                 order={webType ? 1 : 0}
            >
                <ThisMenu webType={webType} />
            </Col>
            <Col offset={webType ? 2 : 0}
                 span={webType ? 6 : 9}
                 order={2}
            >
                <Input.Search
                    placeholder="搜索"
                    onSearch={value => console.log(value)}
                    style={{ width: `${webType ? "200px" : "9em"}`, marginTop : 8 }}
                />
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
        <Menu
            mode={"horizontal"}
            overflowedIndicator={<Icon type="switcher" />}
        >
            <Item >
                <NavLink to={"/"}>首页</NavLink>
            </Item>
            <Item>
                <NavLink to={"/directory"}>目录</NavLink>
            </Item>
            <Item>
                <NavLink to={"/update"}>更新</NavLink>
            </Item>
            <Item>
                <NavLink to={"/about"}>关于我</NavLink>
            </Item>
        </Menu>
    );
};
