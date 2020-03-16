import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useMediaQuery} from 'react-responsive'
import {WebType} from "@/redux/status/webStatus";
import {whiteLogo} from "@/log";

interface ConfigurationProps {
    isLogoLog?: boolean
}


/**
 * 用于初始化配置
 * @param props
 */
const Configuration: React.FC<ConfigurationProps> = props => {
    const {
        children, isLogoLog
    } = props;

    useEffect(() => isLogoLog && whiteLogo(), [isLogoLog]);

    const dispatch = useDispatch();

    dispatch({type: 'WEBTYPE', content: useWebSize()});

    return (
        <>
            {children}
        </>
    )
};

// 对webSize进行操作
// 旧组件形式以剔除
function useWebSize() {



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

    return webType;
}

export default Configuration;