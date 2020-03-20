import * as React from "react";
import {Col, Row} from "antd";
import {connect, useSelector} from "react-redux";
import {viewSize} from "@/redux/status/webStatus";
import {Title} from "@/component/util";
import {Reducers} from "@/redux/interface";
import {ArticleBean} from "@/component/article";

export interface BodyStyleProps {
    left?: React.ReactNode,
    right?: React.ReactNode,
    title: string,
}

const BodyTemplate: React.FC<BodyStyleProps> = props => {

    const {left, right, title, children} = props;

    const webType = useSelector<Reducers, boolean>(({webStatus}) => viewSize(webStatus.webType));

    return (
        <div style={{marginBottom: 103.4}}>
            <Row justify={"start"} >
                <Col offset={2}
                     span={webType ? 14 : 20}
                >
                    <Title src={title}/>
                    {left}
                </Col>
                <Col offset={webType ? 1 : 0}
                     span={webType ? 6 : 0}
                >
                    {right && children}
                </Col>
                <Col span={webType ? 1 : 2}/>
            </Row>
        </div>
    )
};

export default BodyTemplate;