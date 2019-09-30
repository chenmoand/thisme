import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import AppTest from "./test/app-test";
import {BrowserRouter} from "react-router-dom";

/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    return(
        <BrowserRouter>
            <AppTest />
        </BrowserRouter>
    )
};
/**
 * 热加载, 基本上写一次就可以了,直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 觉得贴心的在我的项目点个星星
 */
export default hot(App);