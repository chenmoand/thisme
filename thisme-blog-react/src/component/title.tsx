import * as React from "react";
import {useEffect} from "react";
import {connect} from "react-redux";


interface TitleProps {
    style?: React.CSSProperties,
    className?: string,
    src: string,
    html?: true,
    domain: string,
}

/**
 * src 是要设置的标题
 * html 会显示src内容
 * @param props
 */
const Title: React.FC<TitleProps> = props => {
    const {src, html, domain, style, className} = props;
    // 保证src是有内容的在试图修改标题
    useEffect(() => {
        src && (document.title = src + " - " + domain);
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

export default connect(state => {
    // @ts-ignore
    const {indexReducer} = state;
    return {
        domain: indexReducer.domain
    };
})(Title);