import * as React from "react";
import {connect} from "react-redux";
import {viewSize} from "../util/ViewUtil";

interface TopMenuProps {
    webType: boolean,
}

const TopMenu: React.FC<TopMenuProps> = props => {
    const { webType } = props;
    return(
        <div
            style={webType ? {height : 63} : {height : 64}}
        >

            test
        </div>
    );
} ;
export default connect(
    state => {
        // @ts-ignore
        const { mainReducer } = state;
        return {
            webType : viewSize(mainReducer.webType),
        };
    }, null
)(TopMenu);
