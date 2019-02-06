/*
Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest 
length by doing a series of operations. In each operation he selects a pair of adjacent lowercase letters that match, 
and he deletes them. For instance, the string aab could be shortened to b in one operation.
Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final 
string is empty, print Empty String
*/

function superReducedString(s) {
    let str = s.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            str.splice(i - 1, 2);
            i = 0;
        }
    }
    return str.length === 0 ? "Empty String" : str.join('');
}
console.log(superReducedString('aaabccddd'));