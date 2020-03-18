import * as React from "react";
import "@/assets/style/home.less"
import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";
import {ViewArticle} from "@/component/article/viewArticle";


const Home: React.FC = () => {

    return (
        <div className={"router-home"}>
            <BodyTemplate
                title={"沉默的个人小站"}
                left={<ViewArticle />}
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
