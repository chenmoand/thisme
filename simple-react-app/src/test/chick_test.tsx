import * as React from "react";
import {connect} from "react-redux";
import {Button} from "antd";


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
                改变数字{props.value}
            </Button>
        </div>
    )
};

/**
 * 链接组件,他会自动注入到我们的props上
 */
export default connect(
    state => {
        // @ts-ignore
        return {value: state.mainReducer.count};
    },
    dispatch => {
        // console.log(dispatch)
        return {
            setValue: () => dispatch({type: 'ADD'})
        };
    }
)(ChickTest);