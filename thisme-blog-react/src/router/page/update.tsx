import * as React from "react";
import {FileMarkdown} from "@/component/editor/markdown-edit";
import {MyselfCard} from "@/component/i-card";
import BodySyle from "@/component/body-style";
import UpdateMd from "@/markdown/update.md";

const Update: React.FC = props => {
    return (
        <div className={"update"} >
            <BodySyle
                title={"更新列表"}
                left={
                    <div className={"router"}  style={{
                        padding: 7
                    }}>
                        <FileMarkdown source={UpdateMd}/>
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