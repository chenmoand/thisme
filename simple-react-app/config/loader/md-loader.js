/**
 * 什嘛都不做就是最好的选择
 * 返回字符串即可
 * @param source
 * @returns {*}
 */
module.exports = function (source) {
    let res = {
        text : source.toString()
    };
    return `module.exports = ${JSON.stringify(res)}`;
};