import * as React from "react";
import "../../style/home.less"
import BodySyle from "../../component/body-style";
import AppTest from "../../test/app-test";


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
                    null
                }
            />
        </div>
    );
};

export default Home;
