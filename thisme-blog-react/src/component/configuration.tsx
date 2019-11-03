import * as React from "react";
import {connect} from "react-redux";
import {useMediaQuery} from 'react-responsive'
import {WebType} from "../redux/reducers/mainReducer";

interface ConfigurationProps {
    url?: string,
    setWebType: (webType : WebType) => void,
}

/**
 * 用于初始化配置
 * @param props
 */
const Configuration:React.FC<ConfigurationProps> = props => {
    const { setWebType } = props;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

    if(isDesktopOrLaptop) {
        if(isBigScreen) {
            setWebType(WebType.BIG);
        } else {
            setWebType(WebType.IN);
        }
    } else {
        setWebType(WebType.SMALL);
    }
    return(
        <>
            {props.children}
        </>
    )
};
export default connect(

    null,
    dispatch => {
        // @ts-ignore
        return {
            setWebType : (webType: WebType) => dispatch({type: 'WEBTYPE', content: webType}),
        }
    }
)(Configuration);