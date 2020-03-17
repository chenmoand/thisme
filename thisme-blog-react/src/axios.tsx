import {useLazyAxios} from "use-axios-client";
import {Config} from "use-axios-client/bin/useBaseAxios";
import {useState} from "react";

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
