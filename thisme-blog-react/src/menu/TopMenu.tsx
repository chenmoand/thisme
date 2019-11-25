import * as React from "react";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";
import {Avatar, Button, Col, Icon, Input, Menu, Popover, Row} from "antd";
import {NavLink} from "react-router-dom";
import "../style/menu.less"
import {WebType} from "../redux/reducers/IndexReducer";


interface TopMenuProps {
    webType: boolean,
    setWebType: (webType: boolean) => void,
}


const TopMenu: React.FC<TopMenuProps> = props => {
    const {webType, setWebType} = props;
    return (
        <Row
            style={{height: 48, backgroundColor: "#FFF",}}
            type={"flex"}
            justify={"start"}
        >
            <Col offset={webType ? 2 : 6}
                 span={webType ? 4 : 8}
                 order={webType ? 0 : 1}
            >
                <div style={{marginTop: 6, height: 48}}>
                    <Avatar src={"https://avatars2.githubusercontent.com/u/37534392"}
                            style={{float: "left"}}
                            alt={"CM"}
                    />
                    <Popover
                        trigger={"hover"}
                        title={"你居然发现了彩蛋"}
                        content={
                            <span>
                                点击下方按钮可以切换到{webType ? "手机" : "电脑"}页面<br/>
                                <span style={{color: "red"}}>注</span>: 可能会导致页面抽搐<br/>
                                <Button style={{
                                    float: "right", marginRight: 5, marginTop: 8
                                }} onClick={() => setWebType(!webType)}>点击切换</Button>
                                <br/> <br/>
                            </span>
                        }
                    >
                        <div className={"avatar-name"}>chenmo</div>
                    </Popover>
                </div>
            </Col>
            <Col offset={webType ? 0 : 0}
                 span={webType ? 10 : 1}
                 order={webType ? 1 : 0}
            >
                <ThisMenu webType={webType}/>
            </Col>
            <Col offset={webType ? 2 : 0}
                 span={webType ? 6 : 9}
                 order={2}

            >
                <div style={{textAlign: webType ? "start" : "center"}}>
                    <Input.Search
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        style={{
                            width: `${webType ? "200px" : "9em"}`, marginTop: 8,

                        }}
                    />
                </div>
            </Col>

        </Row>
    );
};
export default connect(
    state => {
        // @ts-ignore
        const {indexReducer} = state;
        return {
            webType: viewSize(indexReducer.webType),
        };
    }, dispatch => {
        return {
            setWebType: (webType: boolean) => dispatch(
                {type: 'WEBTYPE', content: webType ? WebType.BIG : WebType.SMALL}
            ),
        }
    }
)(TopMenu);

interface ThisMenuProps {
    webType: boolean,
}


const ThisMenu: React.FC<ThisMenuProps> = props => {
    // const { webType } = props;
    const {Item} = Menu;
    return (
        <Menu
            mode={"horizontal"}
            overflowedIndicator={<Icon type="switcher"/>}
        >
            <Item>
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
