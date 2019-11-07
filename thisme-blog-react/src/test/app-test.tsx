import * as React from "react";
import {SimpleArticle} from "../component/article-list";
import {Article} from "../util/PropsUtil";



const article:Article = {
    ArticleId: 0,
    Author: "chenmo",
    Chick: 0,
    Classify: "java",
    Content: "java",
    Describe: "java",
    Label: ["java"],
    Reply: {
        ReplyId: 1,
        Name: "chenmo", // 姓名
        StartDate: undefined, // 发布日期
        UpDate: undefined, // 更新日期
        Content: "java", // 内容
    },
    StartDate: undefined,
    Title: "java",
    UpDate: undefined,
    Url: "/str"

};

const AppTest:React.FC = () => {
    return(
        <div>
            <SimpleArticle article={article} />
        </div>
    )
};

export default AppTest;