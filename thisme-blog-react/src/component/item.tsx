import * as React from "react";
import {BaseProps} from "@/component/interface/articleInterface";
import {Icon} from "antd";

export interface ItemProps extends BaseProps {
    label: string | React.ReactNode,
    icon?: string | React.ReactNode,
    onChildrenNull?: React.ReactNode,
    indentation?: number | string;
}

const Item: React.FC<ItemProps> = props => {

    const {
        children, className, style,
        label, icon, onChildrenNull,
        indentation
    } = props;

    return (
        <span className={`thime-item ${className}`} style={{
            ...style
        }}>
            <span style={
                {
                    marginRight: indentation || 4,
                    fontSize: 12, fontWeight: "bolder"
                }
            }>
                <ItemIcon icon={icon}/>
                {label + ":"}
            </span>
            {children || onChildrenNull}
        </span>
    );

};

export default Item;

export interface ItemIconProps {
    icon?: string | React.ReactNode,
}

export const ItemIcon: React.FC<ItemIconProps> = props => {
    const {icon} = props;
    return (
        <>
            {icon && (typeof icon === 'string' ? <Icon type={icon}/> : icon)}
        </>
    );
};
