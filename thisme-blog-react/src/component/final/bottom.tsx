import * as React from "react";
import {BackTop, Divider, Row} from "antd";

const Bottom: React.FC = props => {
    return (
        <div
            className={"page-bottom"}
        >
            <Row
                justify={"center"}
            >
                <Divider style={{
                    height: 2, marginTop: 0,
                }}/>
                <span
                    style={{
                        textAlign: "center",
                        paddingBottom: 15
                    }}
                >
                    页面托管于
                    <a href="https://github.com/chenmoand/thisme">
                        Github.com
                    </a><br/>
                    <a href="/">
                        Brageast.com
                    </a>
                    @ 2019 · ChenMo 版权所有<br/>冀ICP备18025254号-1
                </span>
            </Row>
            <BackTop>
                <div className="ant-back-top-inner">UP</div>
            </BackTop>
        </div>
    )
};

export default Bottom;