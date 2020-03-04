import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {useMediaQuery} from 'react-responsive'
import {WebType} from "@/redux/reducers/index-reducer";

interface ConfigurationProps {
    domain: string,
    setWebType: (webType: WebType) => void,
    setDomain: (str: string) => void,
}

/**
 * 用于初始化配置
 * @param props
 */
const Configuration$: React.FC<ConfigurationProps> = props => {

    const {setWebType, setDomain, domain, children} = props;

    // 设置URL
    useEffect(() => {
            domain && setDomain(domain)
        }, [domain]
    );

    useWebSize(setWebType);

    return (
        <>
            {children}
        </>
    )
};

// 对webSize进行操作
// 旧组件形式以剔除
function useWebSize(callback: (webType: WebType) => void) {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-device-width: 1224px)'}),
        isBigScreen = useMediaQuery({query: '(min-device-width: 1824px)'}),
        isTabletOrMobile = useMediaQuery({query: '(max-width: 844px)'});

    // 原先的是触发两次, 现在触发一次setWebType
    // 总之这这个设计的并不大好
    let webType: WebType = WebType.SMALL;

    // 判断页面大小
    if (isDesktopOrLaptop) {
        webType = isBigScreen ?
            // 台式电脑
            WebType.BIG :
            // 笔记本
            WebType.IN;
    }

    isTabletOrMobile && (webType = WebType.SMALL);

    callback(webType);
}

export default connect(
    null,
    dispatch => {
        // @ts-ignore
        return {
            setWebType: (webType: WebType) => dispatch({type: 'WEBTYPE', content: webType}),
            setDomain: (str: string) => dispatch({type: "DOMAIN", content: str})
        }
    }
)(Configuration$);