import {useLazyAxios} from "use-axios-client";
import {Config} from "use-axios-client/bin/useBaseAxios";
import {useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {WebType} from "@/redux/status/webStatus";

export interface AxiosConfig extends Config {
    retry?: number
}

/**
 * 自带重复发送数据
 * @param config
 */
function useRetryAxios<Data>(config: AxiosConfig) {
    const [order, setOrder] = useState(0);

    const {retry} = config;

    const [getData, {data, error, loading}] = useLazyAxios<Data>(config);

    if (order === 0 || (error && order < retry)) {
        getData();
        setOrder(order + 1);
    }

    return {
        data,
        error,
        loading
    }
}

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

export {
    useRetryAxios, useWebSize
}
/**
 * 转换成持有Redux和Router的组件
 * 有关网址https://reacttraining.com/react-router/web/guides/redux-integration
 * @param mapStateToProps
 * @param mapDisPatchToProps
 * @param Component
 */
export const ConnectRouter = (mapStateToProps, mapDisPatchToProps, Component) => {
    // 这样写会报类型错误, 强迫症的我!!!
    // return withRouter(connect(mapStateToProps, mapDisPatchToProps)(Component));
    return connect(mapStateToProps, mapDisPatchToProps)(withRouter(Component));
};