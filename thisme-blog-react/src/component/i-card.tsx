import * as React from "react";
import {BaseProps} from "../util/PropsUtil";
import {Avatar, Card, Icon} from "antd";
import crooped from "../img/cropped.jpg"

const {Meta} = Card;

interface MyselfCardProps extends BaseProps {

}


export const MyselfCard: React.FC<MyselfCardProps> = props => {
    const {className, style} = props;

    return (
        <div className={"card-myself"}>
            <Card
                className={className}
                style={style}
                cover={
                    <img alt={"背景"} src={crooped}/>
                }
                actions={[
                    <a href={"https://github.com/chenmoand"}>
                        <Icon type={"github"}/>
                    </a>,
                    <a href={"https://www.zhihu.com/people/chen-mo-82-82-69/activities"}>
                        <Icon type={"zhihu"}/>
                    </a>,
                    <a href={"mailto:chenmoand@gmail.com"}>
                        <Icon type={"mail"}/>
                    </a>
                ]}
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


interface LablCardProps extends BaseProps{
    src : string[]
}

export const LablCard: React.FC<LablCardProps> = props => {

    const {className, style} = props;

    return (
        <div className={"card-lable"}>
            <Card
                className={className}
                style={style}
                loading={true}
            >

            </Card>
        </div>
    );
};

