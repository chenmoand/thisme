import * as React from "react";
import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";

const Directory: React.FC = props => {
    return(
        <div>
            <BodyTemplate
                title={"目录"}
                left={
                    <div>
                        汝可知, 此乃神之目录页
                    </div>
                }
                right={
                    <MyselfCard />
                }
            />
        </div>
    );
};

export default Directory;