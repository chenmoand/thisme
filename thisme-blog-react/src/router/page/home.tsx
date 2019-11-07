import * as React from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {viewSize} from "../../util/ViewUtil";
import AppTest from "../../test/app-test";


interface HomeProps {
    webType: boolean,

}

const Home: React.FC<HomeProps> = props => {

    const { webType } = props;

    return(
        <Row
            type={"flex"}
            justify={"start"}
        >
            <Col
                offset={2} span={webType ? 14 : 20}
            >
                <AppTest />
            </Col>
            <Col
                offset={webType ? 1 : 0} span={webType ? 6 : 0}
            >
                test
            </Col>
            <Col span={webType ? 1 : 2}/>
        </Row>
    );
};

export default connect(
    state => {
        // @ts-ignore
        const { indexReducer } = state;
        return {
            webType : viewSize(indexReducer.webType),
        };
    }, null
)(Home);