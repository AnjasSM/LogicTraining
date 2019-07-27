let input = 6;

rightTriangleLeftSide = (param) => {
    let result = ''
    for (let i = 1; i <= param; i++) {
        for (let j = 0; j < i; j++) {
            result += '* '
        }
        if (i !== param) {
            result += '\n'
        }
    }
    return result;
}

console.log(rightTriangleLeftSide(input))