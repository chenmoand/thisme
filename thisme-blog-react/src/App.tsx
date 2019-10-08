import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import NavigationMenu from "./menu/NavigationMenu";
import { Button } from 'antd';
import 'rsuite/lib/styles/index.less';


/**
 * 系统URL默认以 /的 方式
 * @author chenmo
 */
const App:React.FC = () => {
    return(
        <div>
            {/*<NavigationMenu*/}
            {/*    className={""}*/}
            {/*/>*/}
            <Button>
                java
            </Button>

        </div>
    )
};
/**
 * 热加载, 基本上写一次就可以了,直接修改App.tsx并不会体现热加载
 * 请在子组件上书写, 觉得贴心的在我的项目点个星星
 */
export default hot(App);