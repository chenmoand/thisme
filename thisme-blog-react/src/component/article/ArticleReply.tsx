import React from "react";
import {List} from "immutable";
import {Card} from "antd";

import {Reply} from "@/component/article";

interface ArticleReplyProps {
    replys: List<Reply>
}

const ArticleReply: React.FC<ArticleReplyProps> = props => {

    const { replys } = props;

    return (
        <Card title={"回复列表"}>
            Hello world
            {/*TODO 暂未完成*/}
        </Card>
    )

}

export default ArticleReply;