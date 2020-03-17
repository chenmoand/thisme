import {useLazyAxios} from "use-axios-client";
import {Config} from "use-axios-client/bin/useBaseAxios";
import {useState} from "react";

export interface AxiosConfig extends Config {
    retry?: number
}


function useRetryAxios<Data>(config: AxiosConfig) {
    const [order, setOrder] = useState(0);

    const {retry} = config;

    const [getData, {data, error, loading}] = useLazyAxios<Data>(config);

    function _goto() {
        getData();
        setOrder(order + 1);
    }

    order === 0 && _goto();

    if (error && order < retry) _goto();

    return {
        data,
        error,
        loading
    }
}

export {
    useRetryAxios
}
