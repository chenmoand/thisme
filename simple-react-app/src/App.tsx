import { hot } from 'react-hot-loader/root';
import * as React from 'react';

import AppTest from "./test/app-test";

const App:React.FC = () => {
    return(
        <div>
            <AppTest />
        </div>
    )
};
/**
 * 热加载
 */
export default hot(App);