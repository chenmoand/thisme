// 这个是将static目录下的其他文件一并导入到build上
const fs = require('fs');
// const path = require('path');
/**
 * 不大会这个, 不过还能写出来
 * 懒得去坑爹的百度去搜教程了,指不定有多坑,
 * 这里说一句百度吃枣药丸
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