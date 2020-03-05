import * as React from "react";
import {BodyTemplate} from "@/component/template";
import {FileMarkdown} from "@/component/editor/markdown";
import {MyselfCard} from "@/component/card";
import about from "@/assets/markdown/about.md";


const About: React.FC = props => {
    return (
        <div className={"about"}>
            <BodyTemplate
                title={"关于我"}
                left={
                    <div
                        className={"router"}
                        style={{padding: 7}}
                    >
                        <FileMarkdown source={about}/>
                    </div>
                }
                right={
                    <MyselfCard/>
                }
            />
        </div>
    );
};

export default About;