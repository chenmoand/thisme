import * as React from "react";
import {Article} from "../util/PropsUtil";
import {Map} from "immutable";
import Item from "../component/item";
import {CompleteArticle, SimpleArticle} from "../component/article-list";


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
    startDate: new Date(),
    title: "java",
    upDate: new Date(),
    articleType: "ORIGINAL",
};

const AppTest:React.FC = () => {
    const pa:Map<number, Article[]> = Map<number, Article[]>();
    return(
        <div>
            <CompleteArticle article={article} />
        </div>
    )
};

export default AppTest;