import * as React from "react";
import {NavLink} from "react-router-dom";


interface LinkProps {
    to: string
}

/**
 * @deprecated
 * @param props
 * @constructor
 */
const Link: React.FC<LinkProps> = props => {
    const {to, children} = props;
    return (
        <NavLink to={to}>
            <span >
                {children}
            </span>
        </NavLink>
    );
};

export default Link;

/**
 * 防止父组件也是<a>标签
 * 出现报错问题
 * @param props
 * @constructor
 */
export const ObjLink: React.FC<LinkProps> = props => {
    return (
        <object>
            <Link {...props}/>
        </object>
    );
};
