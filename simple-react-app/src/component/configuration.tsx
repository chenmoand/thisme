import * as React from "react";
import {connect} from "react-redux";
import {useMediaQuery} from 'react-responsive'
import {WebType} from "@/redux/reducers/IndexReducer";

interface ConfigurationProps {
    url?: string,
    setWebType: (webType: WebType) => void,
}

/**
 * 用于初始化配置
 * @param props
 */
const Configuration: React.FC<ConfigurationProps> = props => {

    const {setWebType} = props;
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isBigScreen = useMediaQuery({query: '(min-device-width: 1824px)'});
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 844px)'});
    return (
        <>
            <WebSize
                isDesktopOrLaptop={isDesktopOrLaptop}
                isBigScreen={isBigScreen}
                setWebType={setWebType}
                isTabletOrMobile={isTabletOrMobile}
            />
            {props.children}
        </>
    )
};

interface WebSizeProps {
    setWebType: (webType: WebType) => void,
    isDesktopOrLaptop: boolean,
    isBigScreen: boolean,
    isTabletOrMobile: boolean,
}

/**
 * 这个组件可能会触发多次, 不推荐用children
 * 防止多次渲染 ps: 可能是我多虑了
 * @param props
 * @constructor
 */
export const WebSize: React.FC<WebSizeProps> = props => {
    const {children, isDesktopOrLaptop, isBigScreen, setWebType, isTabletOrMobile} = props;
    // 判断页面大小
    if (isDesktopOrLaptop) {
        if (isBigScreen) {
            // 台式电脑
            setWebType(WebType.BIG);
        } else {
            // 笔记本
            setWebType(WebType.IN);
        }
    } else {
        // 手机
        setWebType(WebType.SMALL);

    }
    if (isTabletOrMobile) {
        setWebType(WebType.SMALL)
    }
    return (
        <>
            {children}
        </>
    )
};


export default connect(
    null,
    dispatch => {
        // @ts-ignore
        return {
            setWebType: (webType: WebType) => dispatch({type: 'WEBTYPE', content: webType}),
        }
    }
)(Configuration);