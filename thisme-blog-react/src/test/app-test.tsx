import * as React from "react";
import {ArticleList$, SimpleArticle} from "../component/article-list";
import {Article} from "../util/PropsUtil";
import {Map} from "immutable";


const article:Article = {
    articleId: "demo",
    author: "chenmo",
    chick: 0,
    classify: "java",
    content: "java",
    describe: "javajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava",
    label: ["java"],
    replys: [{
        replyId: "demo",
        name: "chenmo", // 姓名
        startDate: new Date(), // 发布日期
        upDate: new Date(), // 更新日期
        content: "java", // 内容
    }],
    startDate: undefined,
    title: "java",
    upDate: undefined,
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