import * as React from "react";
import {FileMarkdown} from "@/component/editor/markdown";
import {MyselfCard} from "@/component/card";
import {BodyTemplate} from "@/component/template";
import update from "@/assets/markdown/update.md";

const Update: React.FC = props => {
    return (
        <div className={"update"} >
            <BodyTemplate
                title={"更新列表"}
                left={
                    <div className={"router"}  style={{
                        padding: 7
                    }}>
                        <FileMarkdown source={update}/>
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