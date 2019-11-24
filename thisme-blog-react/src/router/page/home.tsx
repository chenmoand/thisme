import * as React from "react";
import "../../style/home.less"
import BodySyle from "../../component/body-style";
import AppTest from "../../test/app-test";
import {MyselfCard} from "../../component/i-card";


interface HomeProps {

}

const Home: React.FC<HomeProps> = props => {
    return (
        <div className={"router-home"}>
            <BodySyle
                left={
                    <AppTest/>
                }
                right={
                    <MyselfCard />
                }
            />
        </div>
    );
};

export default Home;
