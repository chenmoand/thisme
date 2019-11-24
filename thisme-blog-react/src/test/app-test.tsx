import * as React from "react";
import {Article} from "../util/PropsUtil";
import {Map} from "immutable";
import {CompleteArticle} from "../component/article-list";


const article:Article = {
    articleId: "demo",
    author: "chenmo",
    chick: 0,
    classify: "java",
    content: "```java \n 关羽温酒斩祁凯 \n public void say() { \n } \n ``` \n\nzhi哈哈哈哈哈",
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
    title: "我乃上将祁凯可斩上将华雄",
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