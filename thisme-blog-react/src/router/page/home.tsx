import * as React from "react";
import AppTest from "../../test/app-test";
import BodySyle from "../../component/body-style";


interface HomeProps {

}

const Home: React.FC<HomeProps> = props => {
    return (
        <div>
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
