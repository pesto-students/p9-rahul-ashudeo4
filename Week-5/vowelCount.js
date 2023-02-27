function countVowel(str) {
    str = str.toLowerCase();
    const freq = new Map();
    for(let char of str) {
        if(isVowel(char)){
            if(freq.has(char)){
                freq.set(char, freq.get(char)+1)
            } else {
                freq.set(char, 1)
            }
        }
    }
    return freq;
}


const map = countVowel("ASFDSFoimudjqoi")
console.log(map);

function isVowel(char) {
    return "aeiou".includes(char)
}