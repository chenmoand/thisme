import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import 'rsuite/lib/styles/index.less';
import Configuration from "./component/configuration";
import {BackTop} from "antd";
import TopMenu from "./menu/TopMenu";
import {PageBody} from "./router/page-switch";
// import Markdown from "./editor/markdown-edit";

/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    return(
        <Configuration
            url={"https://example.com"}
        >
            <TopMenu />
            <PageBody />
            <BackTop /> {/*回到顶部组件*/}
        </Configuration>
    )
};
/**
 * 热加载, 基本上写一次就可以了,直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 觉得贴心的在我的项目点个星星
 */
export default hot(App);