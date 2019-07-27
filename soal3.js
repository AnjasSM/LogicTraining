let input = 6;

rightTriangleRightSide = (param) => {
    let result = ''
    for (var i = 1; i <= param; i++) {
        for (var k = 0; k < (param - i); k++) {
            result += '  ';
        }
        for (var j = 0; j < i; j++) {
            result += '* ';
        }
        if (i !== 6) {
            result += '\n';
        }
    }
    return result;

}

console.log(rightTriangleRightSide(input))