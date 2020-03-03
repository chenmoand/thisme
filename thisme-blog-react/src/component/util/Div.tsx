import React from "react";
import {BaseProps} from "@/component/interface/articleInterface";

export interface DivProps extends BaseProps {
    classNames?: string[]
}

// 为了防止className 出现undefined字符串出现

const Div: React.FC<DivProps> = props => {

    const {classNames, children, className, style} = props;

    return (
        <div style={style} className={isEmpty(className) + arrayToClassName(classNames)}>
            {children}
        </div>
    )
};

function isEmpty(value: string) {
    if (value == null) {
        return '';
    }
    return value;
}

function arrayToClassName(value: string[]) {
    if (value != null) {
        return " " + value.reduce((pre, current) => pre + " " + isEmpty(current));
    }
    return '';
}

export default Div