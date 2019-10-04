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
    const { src, html, domain, setDomain, style, className } = props;
    setDomain("brageast.com");
    document.title = src + " | " + domain;
    return(
        <div
            className={className}
            style={style}
        >
            {html? src : ""}
        </div>
    )
};

export default connect(state => {
    // @ts-ignore
    return { domain : state.mainReducer.domain };
}, dispatch=> {
    return {
        setDomain: str => dispatch({type: "DOMAIN", content : str})
    }
})(Title);