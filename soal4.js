let input = 'haji dIto'

countVowel = (param) => {
    let vowel = ['a', 'i', 'u', 'e', 'o']
    let result = 0;
    let lowerInput = param.toLowerCase()

    for (let i = 0; i < lowerInput.length; i++) {
        for (let j = 0; j < vowel.length; j++){
            if (lowerInput[i] == vowel[j]) {
                result += 1
            }
        }
    }
    return result;
}

console.log(countVowel(input))