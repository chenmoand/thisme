import * as React from "react";
import {ArticleList$, SimpleArticle} from "../component/article-list";
import {Article} from "../util/PropsUtil";
import {Map} from "immutable";



const article:Article = {
    ArticleId: 0,
    Author: "chenmo",
    Chick: 0,
    Classify: "java",
    Content: "java",
    Describe: "javajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava",
    Label: ["java"],
    Replys: [{
        ReplyId: 1,
        Name: "chenmo", // 姓名
        StartDate: undefined, // 发布日期
        UpDate: undefined, // 更新日期
        Content: "java", // 内容
    }],
    StartDate: undefined,
    Title: "java",
    UpDate: undefined,
    Url: "str"

};

const AppTest:React.FC = () => {
    const pa:Map<number, Article[]> = Map<number, Article[]>();
    return(
        <div>
            <ArticleList$
                currentPage={1}
                maxPage={1}
                setPageArticle={undefined}
                pageArticles={pa.set(1, [article, article, article])}
            />

        </div>
    )
};

export default AppTest;