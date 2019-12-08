import * as React from "react";
import {Article} from "@/util/PropsUtil";
import {Map} from "immutable";
import {CompleteArticle} from "@/component/article-list";


const article: Article = {
    articleId: "demo",
    author: "祁凯大神",
    chick: 0,
    classify: "java",
    content: "```java \n 关羽温酒斩祁凯 \n public void say() { \n } \n ``` \n\nzhi哈哈哈哈哈 " +
        "\n ``` test 测试 ``` \n 汝甚骚 \n\n ### 目录 \n\n ***  -> <- != == ===",
    describe: "javajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava" +
        "javajavajavajavajavajavajavajavajavajavajavajavajavajavajava",
    label: ["java"],
    replys: [{
        replyId: "demo",
        name: "祁凯", // 姓名
        startDate: new Date(), // 发布日期
        upDate: new Date(), // 更新日期
        content: "java", // 内容
    }],
    startDate: new Date(),
    title: "我乃上将祁凯可斩上将华雄 | NICE TO NE",
    upDate: new Date(),
    articleType: "ORIGINAL",
};

const AppTest: React.FC = () => {
    const pa: Map<number, Article[]> = Map<number, Article[]>();
    return (
        <div className={""}>

            <CompleteArticle article={article}/>
            {/*<ArticleList maxPage={0}/>*/}
            {/*<SimpleArticle   article={article}/>*/}
            {/*<Divider style={{margin: "12px 0"}}/>*/}
            {/*<SimpleArticle  article={article}/>*/}
            {/*<Divider style={{height: 1}}/>*/}
        </div>
    )
};

export default AppTest;