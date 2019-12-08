import * as React from "react";


interface AssertProps {
    text: string | [] | {},
    doEmpty?: React.ReactNode | string,
    index?: number | string
}

/**
 * 检查这个text是否符合规则
 * 如果不符合返回一个doEmpty
 * @param props
 * @constructor
 */
const Assert: React.FC<AssertProps> = props => {

    const {text, doEmpty, index} = props;

    const DoAssert: React.FC = () => {
        switch (typeof text) {
            case "string":
                return text == null ? doEmpty : text;
            case "object":
                if (typeof index == "number") {
                    let tx = text as [];
                    if (tx.length > 0 && tx.length > index) {
                        return tx[index];
                    }
                    return doEmpty;
                } else if (typeof index === "undefined") {
                    return text == null ? doEmpty : text;
                }
                return text[index] == null ? doEmpty : text[index];
            default:
                return doEmpty;
        }
    };

    return (
        <>
            <DoAssert />
        </>
    );
};

export default Assert;