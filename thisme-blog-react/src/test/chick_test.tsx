import * as React from "react";
import {connect} from "react-redux";


interface ChickTestProps {
    value: number,
    setValue: () => any;
}

const ChickTest: React.FC<ChickTestProps> = props => {
    return(
        <div>
            {props.value}
            <button onClick={props.setValue}>改变数字</button>
        </div>
    )
};
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