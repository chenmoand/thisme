import * as React from "react";
import {Map} from "immutable";
import {ArticleBean} from "@/component/article";
import {server} from "@/assets/json";
import ArticleTest from "@/test/articleTest";


const article: ArticleBean = {
    articleId: "demo",
    author: "祁凯大神",
    classify: "java",
    content: "```java \n 关羽温酒斩祁凯 \n public void say() { \n } \n ``` \n\nzhi哈哈哈哈哈 " +
        "\n ``` test 测试 ``` \n 汝甚骚 \n\n ### 目录 \n\n ***  -> <- != == ===",
    describe: "javajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava",
    label: ["java"],
    replys: null,
    createdDate: new Date(),
    title: "我乃上将祁凯可斩上将华雄 | NICE TO NE",
    lastModifiedDate: new Date(),
    articleType: "原创",
};

const AppTest: React.FC = () => {
    const pa: Map<number, ArticleBean[]> = Map<number, ArticleBean[]>();

    // const artis = List.of(article, article, article, article, article);
    const {address} = server;
    // const {data, loading, error} = useAxios<List<ArticleBean>>(`${address + api.article}/pagination?page=${1}`);

    /*const {data, error, loading} = useRetryAxios(
        {
            url: "www.sdasdas.xxxx",
            retry: 3,
            timeout: 1000
        }
    );*/

    // console.log(error);


    return (
        <div className={"hahah"}>
            <ArticleTest src={article}/>

            {/*<ViewArticle pageNum={1}/>*/}
            {/*<CompleteArticle article={article}/>*/}
            {/*{data && <ArticleTable src={data}/>}*/}
        </div>
    )
};

export default AppTest;