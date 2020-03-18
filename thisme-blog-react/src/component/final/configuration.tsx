import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {whiteLogo} from "@/log";
import {useRetryAxios, useWebSize} from "@/fuction";
import {IDispatch, Reducers} from "@/redux/interface";
import {server} from "@/assets/json";

interface ConfigurationProps {
    isLogoLog?: boolean
}


/**
 * 用于初始化配置
 * @param props
 */
const Configuration: React.FC<ConfigurationProps> = props => {
    const {
        children, isLogoLog
    } = props;

    useEffect(() => isLogoLog && whiteLogo(), [isLogoLog]);

    const dispatch = useDispatch<IDispatch>();

    const size = useWebSize();

    const articleAllSize = useSelector<Reducers, number>(
        ({articleStatus}) => articleStatus.articleAllSize
    );

    dispatch({type: 'WEBTYPE', content: size});

    return (
        <>
            {/*可能使用useXXX的副作用最好的解决方法是这个*/}
            {articleAllSize == undefined ? <DoArticleSize dispatch={dispatch}/> : ""}
            {children}
        </>
    )
};


export default Configuration;

interface DoArticleSizeProps {
    dispatch: IDispatch
}

const DoArticleSize: React.FC<DoArticleSizeProps> = ({dispatch}) => {

    const url = server.address + "/api/articles/size";

    const {data, error} = useRetryAxios<number>({
        url: url,
        retry: 3,
        timeout: 1500,
        method: "get"
    });

    if (data) {
        dispatch({type: "ARTICLE_ALL_SIZE", content: data})
    }

    if (error) {
        console.error(error);
    }

    return (
        <>
        </>
    );
};