import * as React from "react";
import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";
import {Markdown} from "@/component/editor/markdown";
import {about} from "@/assets/markdown";


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
                        <Markdown source={about}/>
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