import * as React from "react";
import {Article} from "../util/PropsUtil";
import {Map} from "immutable";
import Item from "../component/item";


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
            <Item label={"测试"} icon={"swap"} >
                这是一个测试喵喵喵
            </Item>
        </div>
    )
};

export default AppTest;