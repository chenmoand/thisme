import {useLazyAxios} from "use-axios-client";
import {Config} from "use-axios-client/bin/useBaseAxios";
import {useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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

export {
    useRetryAxios
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