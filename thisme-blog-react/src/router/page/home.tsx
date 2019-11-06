import * as React from "react";
import {Col, Row} from "antd";
import Markdown from "../../editor/markdown-edit";


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


const Home: React.FC = props => {
    return(
        <Row>
            <Col >
                <Markdown source={text}
                />
            </Col>
        </Row>
    );
};

export default Home;