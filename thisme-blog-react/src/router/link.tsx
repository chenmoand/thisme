import * as React from "react";
import {NavLink} from "react-router-dom";
import Title from "../component/title";

interface LinkProps {
    to: string,
    title?: string,
}

const Link: React.FC<LinkProps> = props => {
    const { to, title } = props;
    return(
        <>
            <NavLink to={to} />
            {title === undefined ? '' : <Title src={title} />};
        </>
    );
};

export default Link;