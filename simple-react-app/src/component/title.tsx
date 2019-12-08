import * as React from "react";
import {connect} from "react-redux";


interface TitleProps {
    style?: React.CSSProperties,
    className?: string,
    src: string,
    html?: true,
    domain: string,
    setDomain: (str: string) => void,
}

/**
 * src 是要设置的标题
 * html 会显示src内容
 * @param props
 */
const Title: React.FC<TitleProps> = props => {
    const {src, html, domain, style, className} = props;
    // 保证src是有内容的在试图修改标题
    src && (document.title = src + " - " + domain);
    return (
        <span
            className={className}
            style={style}
        >
            {html ? src : ""}
        </span>
    )
};

export default connect(state => {
    // @ts-ignore
    const {indexReducer} = state;
    // @ts-ignore
    return {domain: indexReducer.domain};
}, dispatch => {
    return {
        setDomain: str => dispatch({type: "DOMAIN", content: str})
    }
})(Title);