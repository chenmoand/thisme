import * as React from "react";
import {ConnectRouter} from "../util/ComponentUtil";

/**
 * 这是一个测试传入数据是否正常的组件
 * @param props
 * @constructor
 */
const Rou:React.FC = props => {
    console.log(props);
    return(
        <div>

        </div>
    )
};
export default ConnectRouter(
    state => {
        // @ts-ignore
        return {value: state.mainReducer.count};
    },
    dispatch => {
        return {
            setValue: () => dispatch({type: 'ADD'})
        };
    },
    Rou
);
