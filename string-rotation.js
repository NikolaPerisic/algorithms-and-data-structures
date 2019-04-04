/*
String Rotation: Assume you have amethod isSubstring which checks if one word is a substring of another. Given two 
strings, write code to check if str2 is a rotation of str1 using only one call to isSubstring (e.g.,"waterbottle" is 
a rotation of "erbottlewat").

Input: waterbottle
Output: erbottlewat

Input: string
Output: boolean
Constraints: not using Substring
Complexity:
EC: multiple occurrence of same letters
*/
const string1 = "waterbottle";
const string2 = "erbottlewat";

const stringRotation = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    if (str1 === str2) return true;
    let match = false;
    let arr = [];
    let char = str1[0];
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === char) {
            arr.push(i);
        }
    }
    if (arr.length === 0) return false;
    let flag;
    arr.forEach(index => {
        flag = 0;
        for (let j = 0; j < str1.length; j++) {
            let offset = (j + index) % str2.length;
            if (str1[j] !== str2[offset]) {
                flag = -1;
                break;
            }
        }
        if (flag === 0) {
            match = true;
            return match;
        }
    });
    return match;
};
console.log(stringRotation(string1, string2));
