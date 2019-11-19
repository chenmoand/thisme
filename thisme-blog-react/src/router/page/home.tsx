import * as React from "react";
import BodySyle from "../../component/body-style";
import AppTest from "../../test/app-test";


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
