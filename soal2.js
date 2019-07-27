let input = 6;

reverseRightTriangle = (param) => {
    let result = ''
    for (let i = 0; i < param; i++) {
        for (let j = param; j > i; j--) {
            result += '* '
        }
        if (i !== param - 1) {
            result += '\n'
        }
    }
    return result;
}

console.log(reverseRightTriangle(6))