import * as React from "react";
import {connect} from "react-redux";

interface TitleProps {
    src: string,
    html?: true,
    domain: string,
    setDomain: (string) => void,
}

/**
 * src 是要设置的标题
 * html 会显示src内容
 * @param props
 */
const Title: React.FC<TitleProps> = props => {
    const { src, html, domain, setDomain } = props;
    setDomain("brageast.com");
    document.title = src + " | " + domain;
    return(
        <>
            {html? src : ""}
        </>
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