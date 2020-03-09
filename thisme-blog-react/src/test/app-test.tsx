import * as React from "react";
import {ArticleInterface} from "@/component/interface/articleInterface";
import {List, Map} from "immutable";
import {Article} from "@/component/article";
import NewArticleList from "@/component/article/newArticleList";


const article: ArticleInterface = {
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
    const pa: Map<number, ArticleInterface[]> = Map<number, ArticleInterface[]>();

    const artis = List.of(article, article, article, article, article);

    return (
        <div className={""}>
            {/*<Div className={"dasdsad"}></Div>*/}
            {/*<Article type={"Simple"} src={article}/>*/}

            <NewArticleList src={artis}>

            </NewArticleList>

        </div>
    )
};

export default AppTest;