import * as React from "react";
import "@/assets/style/home.less"
import AppTest from "@/test/app-test";
import BodySyle from "@/component/body-style";
import {LabelCard, MyselfCard} from "@/component/i-card";

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
                        <LabelCard src={null}/>
                        <LabelCard src={null}/>
                    </>
                }
            />
        </div>
    );
};

export default Home;
