import * as React from "react";
import {connect} from "react-redux";
import {viewSize} from "@/util/ViewUtil";
import {Avatar, Button, Col, Icon, Input, Menu, Popover, Row} from "antd";
import {NavLink} from "react-router-dom";
import "@/assets/style/menu.less"
import {WebType} from "@/redux/reducers/index-reducer";
import {Route, RouteState} from "@/redux/reducers/route-reducer";


interface TopMenuProps {
    webType: boolean,
    setWebType: (webType: boolean) => void,
    routes: RouteState,
}


const TopMenu: React.FC<TopMenuProps> = props => {
    const {webType, setWebType, routes} = props;
    return (
        <Row
            style={{
                height: 48, backgroundColor: "#FFF",
                borderBottom: "1px solid #e8e8e8"

            }}
            type={"flex"}
            justify={"start"}
        >
            <Col offset={webType ? 2 : 6}
                 span={webType ? 4 : 8}
                 order={webType ? 0 : 1}
            >
                <div style={{marginTop: 6, height: 48}}>
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
                        <div className={"avatar-name"}>Chenmo`s</div>
                    </Popover>
                </div>
            </Col>
            <Col offset={webType ? 0 : 0}
                 span={webType ? 10 : 1}
                 order={webType ? 1 : 0}
            >
                <ThisMenu routes={routes}/>
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
        const {indexReducer, routeReducer} = state;
        return {
            webType: viewSize(indexReducer.webType),
            routes: routeReducer.filter((route: Route) => route.name !== false), // 过滤出不参与菜单的route
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
    routes: RouteState,
}

/**
 * 我真TM无聊, 这个玩意虽然方便,但是我感觉我不干正事啊!!!
 *
 * @param props
 * @constructor
 */
const ThisMenu: React.FC<ThisMenuProps> = props => {
    const {routes} = props;
    const {Item} = Menu;
    return (
        <Menu
            mode={"horizontal"}
            overflowedIndicator={<Icon type="switcher"/>}
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
            })}
        </Menu>
    );
};
