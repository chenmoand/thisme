import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {whiteLogo} from "@/log";
import {useWebSize} from "@/fuction";
import {IDispatch} from "@/redux/interface";

interface ConfigurationProps {
    isLogoLog?: boolean
}


/**
 * 用于初始化配置
 * 不推荐用
 * @param props
 */
const Configuration: React.FC<ConfigurationProps> = props => {
    const {
        children, isLogoLog
    } = props;

    useEffect(() => isLogoLog && whiteLogo(), [isLogoLog]);

    const dispatch = useDispatch<IDispatch>();

    dispatch({type: 'WEBTYPE', content: useWebSize()});

    return (
        <>
            {/*可能使用useXXX的副作用最好的解决方法是这个*/}
            {children}
        </>
    )
};


export default Configuration;

