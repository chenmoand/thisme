import * as React from "react";
import {useEffect} from "react";
import {server} from "@/assets/json";


interface TitleProps {
    style?: React.CSSProperties,
    className?: string,
    src: string,
    html?: true,
}

/**
 * src 是要设置的标题
 * html 会显示src内容
 *
 * note:
 *     这个组件类已废弃
 * @param props
 *
 */
const Title: React.FC<TitleProps> = props => {
    const {src, html, style, className} = props;
    // 保证src是有内容的在试图修改标题
    useEffect(() => {
        if(src) document.title = src + " - " + server.domain
    }, [src]);
    return (
        <span
            className={className}
            style={style}
        >
            {html && src}
        </span>
    )
};

export default Title;