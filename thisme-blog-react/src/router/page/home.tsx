import * as React from "react";
import {Col, Row} from "antd";
import Markdown from "../../editor/markdown-edit";
import {connect} from "react-redux";
import {viewSize} from "../../util/ViewUtil";


const text = `
### 目录

### 测试2
111

#### 测试3
111

##### test
2312

## 测试4
1111

> 232124
` ;


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
                <Markdown source={text}
                />
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