import * as React from "react";
import {Col, Row} from "antd";
import {useSelector} from "react-redux";
import {viewSize} from "@/redux/status/webStatus";
import {Div, Title} from "@/component/util";
import {Reducers} from "@/redux/interface";
import {BaseProps} from "@/component/interface";

export interface BodyStyleProps extends BaseProps {
    left?: React.ReactNode,
    right?: React.ReactNode,
    title: string,
}

const BodyTemplate: React.FC<BodyStyleProps> = props => {

    const {left, right, title, children, className, style} = props;

    const webType = useSelector<Reducers, boolean>(({webStatus}) => viewSize(webStatus.webType));

    function _select<T>(a: T, b: T): T {
        return webType ? a : b;
    }

    return (
        <Div className={className}
             style={{
                 marginBottom: 103.4,
                 ...style
             }}>
            <Row justify={"start"}>
                <Col offset={2}
                     span={_select(14, 20)}
                >
                    <Title src={title}/>
                    {left}
                </Col>
                <Col offset={_select(1, 0)}
                     span={_select(6, 0)}
                >
                    {right || children}
                </Col>
                <Col span={_select(1, 2)}/>
            </Row>
        </Div>
    )
};

export default BodyTemplate;