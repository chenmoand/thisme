import * as React from "react";
import "@/assets/style/home.less"
import BodySyle from "@/component/body-style";
import AppTest from "@/test/app-test";
import {LablCard, MyselfCard} from "@/component/i-card";

interface HomeProps {

}

const Home: React.FC<HomeProps> = props => {


    return (
        <div className={"router-home"}>
            <BodySyle
                title={"沉默的个人小站"}
                left={
                    <AppTest/>
                }
                right={
                    <>
                        <MyselfCard />
                        <LablCard  src={null}/>
                        <LablCard  src={null}/>
                    </>
                }
            />
        </div>
    );
};

export default Home;
