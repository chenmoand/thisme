import React from "react";
import {Col, Input, Row} from "antd";
import {useSelector} from "react-redux";

import "@/assets/style/menu.less"
import {Reducers} from "@/redux/interface";
import {viewSize} from "@/redux/status/webStatus";
import ViewTopMenu from "@/component/final/menu/viewTopMenu";
import EasterEggs from "@/component/final/menu/easterEggs";


const TopMenu: React.FC = props => {

    const webType = useSelector<Reducers, boolean>(
        ({webStatus}) => viewSize(webStatus.webType)
    )

    return(
        <Row style={{
            height: 48, backgroundColor: "#FFF",
            borderBottom: "1px solid #e8e8e8"
        }}
             justify={"start"}
        >
            <Col offset={webType ? 2 : 6}
                 span={webType ? 4 : 8}
                 order={webType ? 0 : 1}
            >
                <div style={{
                    marginTop: 6,
                    height: 48
                }}>
                    <EasterEggs webType={webType} />
                </div>
            </Col>
            <Col offset={webType ? 0 : 0}
                 span={webType ? 10 : 1}
                 order={webType ? 1 : 0}
            >
                <ViewTopMenu/>
            </Col>
            <Col offset={webType ? 2 : 0}
                 span={webType ? 6 : 9}
                 order={2}
            >
                <div style={{
                    textAlign: webType ? "start" : "center"
                }}>
                    <Input.Search
                        placeholder={"搜索"}
                        onSearch={value => console.log(value)}
                        style={{
                            width: `${webType ? "200px" : "9em"}`,
                            marginTop: 8,
                        }}
                    />
                </div>
            </Col>

        </Row>
    )

}

export default TopMenu;