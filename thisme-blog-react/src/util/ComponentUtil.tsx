import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

/**
 * 不如直接connect 写这个太真实了
 * 转换成持有Redux的组件
 * @param mapStateToProps 填充的状态
 * @param mapDisPatchToProps 发送命令的方法
 * @param Component 组件
 */
export const ConnectRedux = (mapStateToProps, mapDisPatchToProps, Component) => {
    return connect(mapStateToProps, mapDisPatchToProps)(Component);
};

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
    return ConnectRedux(mapStateToProps, mapDisPatchToProps, withRouter(Component));
};




/**
 * 已经弃用,,,因为我看了Router的index自带props
 * import {RouterProps} from "react-router";
 * 模拟RouterProps传进来的参数,
 * 如果有其他Props请继承这个RouterProps 例如
 * interface Props extends RouterProps {
 *     src: string
 * }
 * @deprecated
 */
export interface RouterProps {
    history : History,
    location : Location,
    match : Match,
    staticContext : any
}

interface History {
    atction : string,
    block : any, // any 猜不出来 大部分是方法
    createHeref: any ,
    go : any,
    goBack : any,
    goForward : any,
    length : number,
    listen : any,
    location : Location
    push : any,
    replace : any

}

interface Location {
    hash : string,
    pathname: string,
    search: string,
    state: any
}

interface Match {
    isExact : boolean,
    params : string[],
    path : string,
    url : string
}
