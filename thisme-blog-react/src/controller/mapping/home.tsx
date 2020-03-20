import * as React from "react";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

import "@/assets/style/home.less"

import {BodyTemplate} from "@/component/template";
import {MyselfCard} from "@/component/card";
import {ViewArticle} from "@/component/article/viewArticle";
import {useRetryAxios} from "@/fuction";
import {server} from "@/assets/json";
import {IDispatch} from "@/redux/interface";


const Home: React.FC = () => {

    const dispatch = useDispatch<IDispatch>();

    const setSize = data =>  dispatch({type: "ARTICLE_ALL_SIZE", content: data})

    const {data, error} = useRetryAxios<number>({
        url: server.address + "/api/articles/size",
        retry: 3,
        timeout: 1500,
        method: "get"
    });

    useEffect(()=> {
        data && setSize(data)
    }, [data])

    error && console.error(error);


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
