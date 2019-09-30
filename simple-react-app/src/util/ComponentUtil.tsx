import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

/**
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
 * @param mapStateToProps
 * @param mapDisPatchToProps
 * @param Component
 */
export const ConnectRouter = (mapStateToProps, mapDisPatchToProps, Component) => {
    // @ts-ignore
    return withRouter(connect(mapStateToProps, mapDisPatchToProps)(Component));
};

/**
 * 模拟RouterProps传进来的参数
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
