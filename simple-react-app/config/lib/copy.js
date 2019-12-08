const fs = require('fs');

/**
 * 不大会这个, 不过还能写出来
 * 懒得去坑爹的百度去搜教程了,指不定有多坑,
 * 这里说一句百度吃枣药丸
 *
 *
 * 2019/12/1 可以递归复制啦
 *
 * @author chenmo
 */
const copy = (infile, gofile, callback) => {
    fs.readdir(infile, (err, data) => {
        if(err) return console.log(err);
        data.forEach(val => {
            let inf, gof;
            inf = `${infile}/${val}`;
            gof = `${gofile}/${val}`;
            fs.statSync(inf).isFile() ? callback(inf, gof) : copy(inf, gof);
        })
    });
};

module.exports = copy;