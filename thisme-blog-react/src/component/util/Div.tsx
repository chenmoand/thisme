import React from "react";
import classUtil from "classnames";

import {BaseProps} from "@/component/interface";

export interface DivProps extends BaseProps {
    classNames?: string[],
}

// 为了防止className 出现undefined字符串出现
const Div: React.FC<DivProps> = props => {

    const {
        classNames, children, className,style
    } = props;


    return (
        <div style={style} className={classUtil(className, classNames)}>
            {children}
        </div>
    )
};

// function isEmpty(value: string) {
//     if (value == null) {
//         return '';
//     }
//     return value;
// }
//
// function arrayToClassName(value: string[]) {
//     return value != null ?
//         value.reduce((pre, current) => pre + " " + isEmpty(current)) : '';
// }

export default Div