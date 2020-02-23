const ci = require("../thisme-blog-react/config/lib/copy");
const fs = require('fs');
const path = require('path');

/**
 * 只会递归删文件, 并且留下文件夹
 */
const delDirAllFile = (path) => {
    fs.existsSync(path) && (
        fs.readdirSync(path).forEach(file => {
            let curPath = `${path}/${file}`;
            console.log(`正在清理: ${curPath}`);
            fs.statSync(curPath).isDirectory() ? delDirAllFile(curPath) : fs.unlinkSync(curPath);
        })
    )
};


const getFileName = (str) => path.parse(str).base;

/**
 * 文件就因为thisboot打错成了thisme 废了半天时间
 */
const
    res = './thisboot/src/main/resources',
    infile = './thisme-blog-react/build',
    gofile = `${res}/static`,       // 后端的css等杂类的目录
    goindex = `${res}/templates`; // 后端要生成的主要文件
    
let inindex = ['index.html', 'CNAME']; // 要在/templates下的文件

inindex = inindex.map(str => `${infile}/${str}`);


//删除文件所有文件
delDirAllFile(gofile);

const doErr = (err) => err && console.log(err);
const doCopy = (IN, GO) => {
    fs.copyFile(IN, GO, doErr);
    console.log(`目标文件: ${IN} -> 输出文件: ${GO}`);
};

const onCopy = (inf, gof) => {
    let isIn = false, value = undefined;
    inindex.forEach(val => {
        !isIn && (
            isIn = (inf === val),
            value = getFileName(val)
        );
    });
    isIn ? doCopy(inf, `${goindex}/${value}`) : doCopy(inf, gof);
};


ci(infile, gofile, onCopy);

