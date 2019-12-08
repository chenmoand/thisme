import * as React from "react";
import {ConnectRouter} from "@/util/ComponentUtil";
import Title from "@/component/title";

/**
 * 这是一个测试传入数据是否正常的组件
 * @param props
 * @constructor
 */
const Rou:React.FC = props => {
    // console.log(props);
    return(
        <div>
            <Title src={"测试哈哈哈"} html/>
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
