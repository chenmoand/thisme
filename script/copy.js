const copy = require("../thisme-blog-react/config/lib/copy");
const fs = require('fs');


const
    res = './thisme/src/main/resources'
    infile = './thisme-blog-react/build',
    inindex = `${infile}/index.html`, // 前端生成的index.html
    gofile = `${res}/static`,       // 后端的css等杂类的目录
    goindex = `${res}/index.html`; // 后端要生成的index.html

const doErr = (err) => err => err && console.log(err);

const doCopy = (inf, gof) => {
    console.log(inf, "\n", gof)
    inindex === inf ? fs.copyFile(inf, goindex, doErr) : fs.copyFile(inf, gof, doErr);
}


copy(infile, gofile, doCopy);
console.log('数据转入成功')

