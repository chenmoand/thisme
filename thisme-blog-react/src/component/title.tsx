import * as React from "react";

interface TitleProps {
    src: string,
    html?: true,
}

/**
 * src 是要设置的标题
 * html 会显示src内容
 * @param props
 */
const Title: React.FC<TitleProps> = props => {
    const { src, html } = props;
    document.title = src + " | Brageast.com";

    return(
        <>
            {html? src : ""}
        </>
    )
};

export default Title;