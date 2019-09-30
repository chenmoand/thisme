import * as React from "react";
import {Button} from "antd";
import {ConnectRedux} from "../util/ComponentUtil";

interface ChickTestProps {
    value: number,
    setValue: () => any;
}

/**
 * 测试react-redux 的组件
 */
const ChickTest: React.FC<ChickTestProps> = props => {
    return(
        <div>
            <Button onClick={props.setValue}>
                祁凯牛秧歌{props.value}次
            </Button>
        </div>
    )
};

/**
 * 链接组件,他会自动注入到我们的props上
 */
export default ConnectRedux(
    state => {
        // @ts-ignore
        return {value: state.mainReducer.count};
    },
    dispatch => {
        // console.log(dispatch)
        return {
            setValue: () => dispatch({type: 'ADD'})
        };
    },
    ChickTest
);