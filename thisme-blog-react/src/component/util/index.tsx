import * as React from "react";

export {default as Assert} from "./Assert";
export {default as Div} from "./Div";
export {default as Item} from "./Item";
export {default as Title} from "./title";

// 常用的库
export {default as axios} from "axios";
export {default as dayjs} from "dayjs";


export function listToComponent<T>(array: Array<T>, callback: (data: T) => JSX.Element): Array<JSX.Element> {
    return array && array.map((data, index) => {
        return(
            <React.Fragment key={index}>
                {callback(data)}
            </React.Fragment>
        )
    });
}