const input = 'programmerit'
const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

dictionary = (param) => {
    let word = param.toLowerCase();
    let firstWord = word.substr(0,3);

    for(let i = 0; word.length > 0;i++) {
        if(dictionary[i].includes(firstWord)) {
            
        }
    }

}

console.log(dictionary(input));