import * as React from "react";
import BodySyle from "@/component/body-style";
import {MyselfCard} from "@/component/i-card";

const Directory: React.FC = props => {
    return(
        <div>
            <BodySyle
                title={"目录"}
                left={
                    <div>

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