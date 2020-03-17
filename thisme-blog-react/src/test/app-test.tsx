import * as React from "react";
import {List, Map} from "immutable";
import {ArticleBean, ArticleTable} from "@/component/article";
import {useAxios} from "use-axios-client";
import {api, server} from "@/assets/json";


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
    const {data, loading, error} = useAxios<string>(`${server.address + api.article}/pagination?page=${1}`);
    var message = data && JSON.parse(data);
    console.log(message)
    console.log(message && message)

    return (
        <div className={"hahah"}>
            {/*{data && <ArticleTable src={List.of(...data)}/>}*/}
        </div>
    )
};

export default AppTest;