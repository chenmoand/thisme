import * as React from "react";
import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";
import {Markdown} from "@/component/editor/markdown";
import {about} from "@/assets/markdown";


const About: React.FC = () => {
    return (
        <BodyTemplate
            className={"about"}
            title={"关于我"}
            left={
                <Markdown
                    className={"router"}
                    // style={{padding: 7}}
                    source={about}
                />
            }
        >
            <MyselfCard/>
        </BodyTemplate>

    );
};

export default About;