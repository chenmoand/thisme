import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {useMediaQuery} from 'react-responsive'
import {WebType} from "@/redux/reducers/IndexReducer";

interface ConfigurationProps {
    domain?: string,
    setWebType: (webType: WebType) => void,
    setDomain: (str: string) => void,
}

/**
 * 用于初始化配置
 * @param props
 */
const Configuration: React.FC<ConfigurationProps> = props => {

    const {setWebType, setDomain, domain} = props;

    // 设置URL
    useEffect(() => {
            domain && setDomain(domain)
        } ,[domain]
    );

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

        isBigScreen ?
        // 台式电脑
        setWebType(WebType.BIG):
        // 笔记本
        setWebType(WebType.IN);
    } else {
        // 手机
        setWebType(WebType.SMALL);
    }
    isTabletOrMobile && setWebType(WebType.SMALL);
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
            setDomain: (str: string) => dispatch({type: "DOMAIN", content: str})
        }
    }
)(Configuration);