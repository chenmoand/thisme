import * as React from "react";
import "@/assets/style/home.less"
import AppTest from "@/test/app-test";
import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";

interface HomeProps {

}

const Home: React.FC<HomeProps> = props => {


    return (
        <div className={"router-home"}>
            <BodyTemplate
                title={"沉默的个人小站"}
                left={
                    <AppTest/>
                }
                right={
                    <>
                        <MyselfCard />
                    </>
                }
            />
        </div>
    );
};

export default Home;
