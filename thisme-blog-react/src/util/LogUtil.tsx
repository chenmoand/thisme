import * as React from "react";

import server from "@/assets/json/server.json";

// 打印LOG信息
export const whiteLogo = (): void => {

    console.info(`ThisMe version: ${server.version} React version: ${React.version}` );

    console.info("%cThisMe : %c 代码托管于github.com/chenmoand/thisme",
        "background: black;\n" +
        "            font-family: \"Arial Black\", serif;\n" +
        "            color: #ffd498;\n" +
        "            padding: 6px;",
        "background: brown;\n" +
        "            font-family: \"Arial Black\", serif;\n" +
        "            color: #fff;\n" +
        "            padding: 6px;"
    );
};

export const doErr = (err) => err && console.log(err);
