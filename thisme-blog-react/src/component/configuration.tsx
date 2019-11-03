import * as React from "react";

interface ConfigurationProps {
    url?: string
}

/**
 * 用于初始化配置
 * @param props
 */
const Configuration:React.FC<ConfigurationProps> = props => {

    return(
        <>
            {props.children}
        </>
    )
};
export default Configuration;