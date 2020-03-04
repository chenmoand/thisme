import * as React from "react";
import BodySyle from "@/component/body-style";
import {FileMarkdown} from "@/component/editor/markdown-edit";
import {MyselfCard} from "@/component/card";
import AboutMd from "@/assets/markdown/about.md";


const About: React.FC = props => {
    return (
        <div className={"about"}>
            <BodySyle
                title={"关于我"}
                left={
                    <div className={"router"} style={{
                        padding: 7
                    }}>
                        <FileMarkdown source={AboutMd}/>
                    </div>
                }
                right={
                    <MyselfCard />
                }
            />
        </div>
    );
};

export default About;