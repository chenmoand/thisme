import * as React from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";
import Title from "./title";
import "../style/AnimatedSwitch.less"
import {CSSTransition} from "react-transition-group";

export interface BodyStyleProps {
    left?: React.ReactNode,
    right?: React.ReactNode,
    title: string,
    webType: boolean,
}

const BodySyle: React.FC<BodyStyleProps> = props => {

    // ng.done();
    const {left, right, webType, title} = props;

    return (
        <div style={{marginBottom: 103.4}}>
            <Row
                type={"flex"}
                justify={"start"}
            >
                <Col
                    offset={2} span={webType ? 14 : 20}
                >
                    <Title src={title}/>
                    <CSSTransition
                        in={true}
                        timeout={1000} //动画执行1秒
                        classNames={"fade"} //自定义的class名
                        unmountOnExit
                    >
                        {left}
                    </CSSTransition>
                </Col>
                <Col
                    offset={webType ? 1 : 0} span={webType ? 6 : 0}
                >
                    {right}
                </Col>
                <Col span={webType ? 1 : 2}/>
            </Row>
        </div>
    )
};

export default connect(
    state => {
        // @ts-ignore
        const {indexReducer} = state;
        return {
            webType: viewSize(indexReducer.webType),
        };
    }
)(BodySyle);