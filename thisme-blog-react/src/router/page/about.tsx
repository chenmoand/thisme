import * as React from "react";
import BodySyle from "../../component/body-style";
import Markdown from "../../editor/markdown-edit";
import {MyselfCard} from "../../component/i-card";
import AboutMd from "../../markdown/about.md";


const About: React.FC = props => {

    console.log(AboutMd);


    return (
        <div className={"about"}>
            <BodySyle
                left={
                    <Markdown source={AboutMd.text}/>
                }
                right={
                    <MyselfCard />
                }
            />
        </div>
    );
};

export default About;