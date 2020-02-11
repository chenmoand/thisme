import * as React from "react";
import {Avatar, Card, Icon} from "antd";
import {BaseProps} from "@/util/PropsUtil";
import crooped from "@/assets/img/cropped.jpg"
import {listToComponent} from "@/util/Assert";

const {Meta} = Card;

interface CardActionInterface {
    href: string,
    type: string
}
type CardActionsType = Array<CardActionInterface>;

const CardActions: CardActionsType = [
    {href: 'https://github.com/chenmoand', type: 'github'},
    {href: 'https://www.zhihu.com/people/chen-mo-82-82-69/activities', type: 'zhihu'},
    {href: 'mailto:chenmoand@gmail.com', type: 'mail'}
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
                                <Icon type={data.type}></Icon>
                            </a>
                        )
                    )
                }
            >
                <Meta
                    avatar={
                        <Avatar src={"https://avatars2.githubusercontent.com/u/37534392"} alt={"CM"}/>
                    }
                    title={"chenmo的博客"}
                    description={"一个喜欢瞎搞, 摸鱼,顺便玩玩java和node的菜鸡!爱说大人时代变了!"}
                />
            </Card>
        </div>
    );
};


interface LabelCardProps extends BaseProps{
    src : string[]
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

