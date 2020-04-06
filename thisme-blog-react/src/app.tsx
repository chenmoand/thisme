import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

import '@/assets/style/globle-index.less';
import {BodyController} from '@/controller/router';
import {BodyBottom, Configuration} from '@/component/final';
import {TopMenu} from "@/component/final/menu";
import {useEffect} from "react";
import {whiteLogo} from "@/log";
import {useDispatch} from "react-redux";
import {IDispatch} from "@/redux/interface";
import {useWebSize} from "@/fuction";


dayjs.locale('zh-cn');


/**
 * 注意: 这个类不是入口, 入口在src/mode目录下分别的
 * dev和pord文件夹里面, 模式不同随对应组件的加载也不同
 *
 */
const App: React.FC = () => {

    useEffect(() => whiteLogo(), []);

    const dispatch = useDispatch<IDispatch>();

    dispatch({type: 'WEBTYPE', content: useWebSize()});

    return (
        <>
            <TopMenu />
            <BodyController/>
            <BodyBottom/>
        </>
    )
};

/**
 * 热加载, 直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 唯一缺陷是对Markdown的一个组件会拖慢热加载速度
 */
export default App;