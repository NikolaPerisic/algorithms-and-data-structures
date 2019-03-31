/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or 
replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

Input: string
Output: boolean
Constraints: ? optimize
O: O(N)
*/

const oneWay = (s1, s2) => {
    let diff = Math.abs(s1.length - s2.length);
    if (diff > 1) return false;
    let str1, str2;
    s1.length >= s2.length
        ? ([str1, str2] = [s1, s2])
        : ([str1, str2] = [s2, s1]);
    let flag = 0;
    let index = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[index] && diff === 0) {
            flag++;
            index++;
        } else if (str1[i] !== str2[index] && diff === 1) {
            flag++;
        } else {
            index++;
        }
        if (flag > 1) return false;
    }
    return true;
};
console.log(oneWay("pale", "bale"));
