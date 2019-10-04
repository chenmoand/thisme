// 这个是将static目录下的其他文件一并导入到build上
const fs = require('fs');
// const path = require('path');
/**
 * 不大会这个
 */
fs.readdir('./static', (err ,date) => {
    if(err) console.log(err);
    date.forEach(val => {
        if(val !== 'index.html') {
            fs.copyFile(`./static/${val}`, `./build/${val}`, err1 => {
                if(err1) console.log(err1);
            })
        }
    })
});