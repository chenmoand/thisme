const fs = require('fs');
const copy = require("./lib/copy");

const doCopy = (inf, gof) => ('./static/index.html' !== inf && fs.copyFile(inf, gof, err => err && console.log(err)));

copy('./static', './build', doCopy);