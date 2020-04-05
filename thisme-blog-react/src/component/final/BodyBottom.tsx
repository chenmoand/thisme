import * as React from "react";
import {BackTop, Divider, Row} from "antd";
import {server} from "@/assets/json";

const BodyBottom: React.FC = props => {
    return (
        <div className={"page-bottom"}
        >
            <Row
                justify={"center"}
            >
                <Divider
                    style={{
                        height: 2, marginTop: 0,
                    }}
                />
                <span
                    style={{
                        textAlign: "center",
                        paddingBottom: 15
                    }}
                >
                    页面托管于
                    <a href={server.repository}>
                        Github.com
                    </a><br/>
                    <a href="/">
                        Brageast.com
                    </a>
                    @ 2019 · ChenMo 版权所有<br/>冀ICP备18025254号-1
                </span>
            </Row>
            <BackTop className={"ant-back-top-inner"}>
                UP
            </BackTop>
        </div>
    )
};

export default BodyBottom;