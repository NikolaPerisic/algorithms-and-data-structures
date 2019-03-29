/*
Implement an algorithm to determine if a string has all unique characters. 
*/

function isUnique(str) {
    let myMap = new Map();
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            myMap.set(str[i], true);
            newStr += str[i];
        }
        if (myMap.size !== newStr.length) return false;
    }
    return true;
}
console.log(isUnique("tCEQsabG92FhUSOBD"));
