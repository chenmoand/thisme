import * as React from "react";
import {RouteComponentProps} from "react-router";
import {Button, Result} from "antd";
import {NavLink} from "react-router-dom";

const Status:React.FC<RouteComponentProps> = props => {

    return(
        <div>
            <Result
                status={'404'}
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary"><NavLink to={"/"}>Back Home</NavLink></Button>}
            />
        </div>
    );
};

export default Status;
