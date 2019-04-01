/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

EXAMPLE
Input: aabcccccaaa
Output: a2b1c5a3

Input: 
Output: 
Constraints: if compressed length > string length -> string, only A-Za-z letters

*/
const compressor = str => {
    let newStr = "";
    let counter = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            counter++;
        } else {
            newStr += str[i - 1];
            newStr += counter;
            counter = 1;
        }
    }
    return newStr.length < str.length ? newStr : str;
};
console.log(compressor("aabcccccaaa"));
