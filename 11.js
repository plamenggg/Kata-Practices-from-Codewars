let input = [
    'Telerik Academy rocks!!!',
    
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let words = gets().split('');

const lowerCase = {};
const upperCase = {};
const symbols = {};

for (const char of words) {
    if (/[a-z]/.test(char)) {
        lowerCase[char] = (lowerCase[char] || 0) +1;
    } else if (/[A-Z]/.test(char)) {
        upperCase[char] = (upperCase[char] || 0) +1;
    } else if (/[^a-zA-Z]/.test(char)) {
        symbols[char] = (symbols[char] || 0) +1;
    }
}

function getMaxCharacter(countObj) {
    let maxChar = '-';
    let maxCount = 0;

    for (const char in countObj) {
        if (countObj[char] > maxCount || (countObj[char] === maxCount && char < maxChar)) {
            maxChar = char;
            maxCount = countObj[char];
        }
    }

    return maxCount > 0 ? `${maxChar} ${maxCount}` : '-';
}

    print(getMaxCharacter(symbols)); 
    print(getMaxCharacter(lowerCase)); 
    print(getMaxCharacter(upperCase));