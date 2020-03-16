import * as React from "react";
import {Avatar, Card} from "antd";
import crooped from "@/assets/img/cropped.jpg"
import {listToComponent} from "@/component/util";
import {GithubOutlined, ZhihuOutlined, MailOutlined} from "@ant-design/icons";
import {api} from "@/assets/json";
import {BaseProps} from "@/component/interface";

const {Meta} = Card;

export interface CardActionInterface {
    href: string,
    type: JSX.Element
}

export type CardActionsType = Array<CardActionInterface>;

const CardActions: CardActionsType = [
    {href: 'https://github.com/chenmoand', type: <GithubOutlined />},
    {href: 'https://www.zhihu.com/people/chen-mo-82-82-69/activities', type: <ZhihuOutlined />},
    {href: 'mailto:chenmoand@gmail.com', type: <MailOutlined />}
];
export const MyselfCard: React.FC<BaseProps> = props => {
    const {className, style} = props;
    return (
        <div className={"card-myself"}>
            <Card
                className={className}
                style={style}
                cover={
                    <img alt={"背景"} src={crooped}/>
                }
                actions={
                    listToComponent(CardActions, data =>
                        (
                            <a href={data.href}>
                                {data.type}
                            </a>
                        )
                    )
                }
            >
                <Meta
                    avatar={
                        <Avatar src={api.avatar} alt={"沉默的头像"}/>
                    }
                    title={"chenmo的博客"}
                    description={"for(;;) System.out.print(\"沉默你好骚啊\"); // TODO 此人已经看破红尘, 与世间脱离香蕉跑道"}
                />
            </Card>
        </div>
    );
};


interface LabelCardProps extends BaseProps {
    src: string[]
}

export const LabelCard: React.FC<LabelCardProps> = props => {

    const {className, style} = props;

    return (
        <div className={"card-label"}>
            <Card
                className={className}
                style={style}
                loading={true}
            >

            </Card>
        </div>
    );
};

