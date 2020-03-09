import * as React from "react";
import wait from "@/assets/img/wait.png";
import {Button, Result} from "antd";
// import Img from 'react-image'

interface WaitProps {
    onClick: () => void,
    isClick: boolean,
}

/**
 * 返回一个等待的组件
 * @param props
 * @constructor
 */
const Wait: React.FC<WaitProps> = props => {

    const {onClick, isClick} = props;

    return (
        <>
            <Result
                title={"wait"}
                icon={<img
                    style={{
                        display: "block",
                        height: "100%",
                        width: "100%"
                    }}
                    src={wait}
                />}
                subTitle={isClick ? "正在向服务器拉取数据" : "服务器请求失败,请点击尝试"}
                extra={<Button type="primary" onClick={onClick} disabled={isClick}>拉取请求</Button>}
            />
        </>
    )
};

export default Wait;