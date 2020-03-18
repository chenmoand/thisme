import React from "react";
import {useDispatch} from "react-redux";
import {IDispatch} from "@/redux/interface";
import {Button, Popover} from "antd";
import {WebType} from "@/redux/status/webStatus";


interface EasterEggsProps {
    webType: boolean
}

const EasterEggs: React.FC<EasterEggsProps> = props => {

    const {webType} = props;

    const dispatch = useDispatch<IDispatch>();

    const setWebType = (webType: boolean) => dispatch(
        {type: 'WEBTYPE', content: webType ? WebType.BIG : WebType.SMALL}
    )

    return (
        <Popover
            trigger={"hover"}
            title={"你居然发现了彩蛋"}
            content={
                <>
                    点击下方按钮可以切换到{webType ? "手机" : "电脑"}页面<br/>
                    <span style={
                        {
                            color: "red"
                        }
                    }>注
                                </span>: 可能会导致页面抽搐<br/>
                    <Button
                        style={{
                            float: "right",
                            marginRight: 5,
                            marginTop: 8
                        }}
                        onClick={
                            () => setWebType(!webType)
                        }
                    >
                        点击切换
                    </Button>
                    <br/><br/>
                </>
            }
        >
            <div className={"avatar-name"}>
                Chenmo`s
            </div>
        </Popover>
    )

}

export default EasterEggs;