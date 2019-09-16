import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style/globle-index.less'

const Init:React.FC = () => {
    return(
        <div>
            这是一个demo
        </div>
    )
};
ReactDOM.render(
    <Init />,
    document.getElementById('init')
);