import * as React from "react";
import {MyselfCard} from "@/component/card";
import {BodyTemplate} from "@/component/template";
import {Markdown} from "@/component/editor/markdown";
import {update} from "@/assets/markdown";

const Update: React.FC = props => {
    return (
        <div className={"update"} >
            <BodyTemplate
                title={"更新列表"}
                left={
                    <div className={"router"}  style={{
                        padding: 7
                    }}>
                        <Markdown source={update}/>
                    </div>
                }
                right={
                    <MyselfCard/>
                }
            />
        </div>
    );
};

export default Update;