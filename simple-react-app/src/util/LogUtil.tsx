import * as React from "react";

// 打印LOG信息
export const whiteLogo = (): void => {
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
    console.info("React构建版本为:", React.version )
};

export const doErr = (err) => err && console.log(err);
