import * as React from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";



export interface BodyStyleProps {
    left: React.ReactNode,
    right?: React.ReactNode,
    webType: boolean,
}

const BodySyle: React.FC<BodyStyleProps> = props => {

    const { left, right, webType } = props;

    return (
        <Row
            type={"flex"}
            justify={"start"}
        >
            <Col
                offset={2} span={webType ? 14 : 20}
            >
                { left }
            </Col>
            <Col
                offset={webType ? 1 : 0} span={webType ? 6 : 0}
            >
                { right }
            </Col>
            <Col span={webType ? 1 : 2}/>
        </Row>
    )
};

export default connect(
    state => {
        // @ts-ignore
        const { indexReducer } = state;
        return {
            webType : viewSize(indexReducer.webType),
        };
    }, null
)(BodySyle);