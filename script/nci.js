const fs = require('fs');


const res = './thisboot/src/main/resources',
    infile = './thisme-blog-react/build',
    cachefile = './script/build.json',
    staticDir = `${res}/static`,       // 后端的css等杂类的目录
    templatesDir = `${res}/templates`; // 后端要生成的主要文件

function allFile(child = '/') {
    const fls = fs.readdirSync(infile + child);
    const files = [];
    let newChild = '', _path = '';

    for (let fl of fls) {
        newChild = child + fl;
        _path = infile + newChild;
        if (fs.statSync(_path).isDirectory()) {
            files.push(...allFile(newChild + '/'));
        } else {
            files.push(newChild)
        }
    }
    return files;
}

// 文件URL缓存
const buildCache = [];

/**
 * 读取缓存目录JSON不管这个build.json
 */
function readCache() {
    if (fs.existsSync(cachefile)) {
        const str = fs.readFileSync(cachefile).toString("utf-8");
        let oldBuild = JSON.parse(str);
        for (let oldBuildKey of oldBuild) {
            // console.log(oldBuildKey)
            if (isTemplates(oldBuildKey)) continue;
            const path = staticDir + oldBuildKey;
            console.log("正在删除旧build文件 -> " +  path);
            fs.unlink(path, () => {/* 什嘛也不做 */})
        }

    }
    buildCache.push(...allFile());
    fs.writeFile(cachefile, JSON.stringify(buildCache), err => {
        if (err) {
            console.error(err)
        }
    })

}

function isTemplates(fileName = '') {
    return fileName.endsWith(".html") || fileName.endsWith("CNAME")
}

readCache();

(function () {
    for (let file of buildCache) {
        const inPath = infile + file;
        fs.readFile(inPath, (err ,data) => {
            let toPath = staticDir + file;
            if (isTemplates(file)) {
                toPath = templatesDir + file;
                if (!fs.existsSync(toPath)) {
                    console.log(`正在拷贝Buid文件 [${inPath} -> ${toPath}]`);
                    fs.writeFileSync(path, data, () => {/*不干事情*/});
                    return;
                }
            }
            console.log(`正在拷贝Build文件 [${inPath} -> ${toPath}]`);
            fs.writeFileSync(toPath, data, () => {/*不干事情*/});
        });
    }
}());