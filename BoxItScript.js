const args = process.argv.slice(2);
const words = args;
function drawLine(num) {
    let res = '━'.repeat(num);
    return res;
}
function drawTopBorder(num) {
    let res = '┎' + drawLine(num) + '┒';
    return res;
}
function drawMiddleBorder(num) {
    let res = '┣' + drawLine(num) + '┫';
    return res;
}
function drawBottomBorder(num) {
    let res = '┗' + drawLine(num) + '┛';
    return res;
}
function drawBarsAround(str) {
    let res = '┃' + str + '┃';
    return res;
}
function boxIt(arrstr) {
    let res = [];
    let maxstr = arrstr[0].length;
    for (let str of arrstr) {
        if (str.length > maxstr) {
            maxstr = str.length;
        }
    }
    for (let str of arrstr) {
        res.push(drawMiddleBorder(maxstr));
        res.push(drawBarsAround(str.padEnd(maxstr, " ")));
    }
    res[0] = drawTopBorder(maxstr);
    res.push(drawBottomBorder(maxstr));

    return res.join("\n");
}
console.log(boxIt(words));

