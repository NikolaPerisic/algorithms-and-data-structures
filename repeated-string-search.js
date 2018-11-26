/*
Given the string s, integer n, and letter c, we need to find the number 
of times letter  provided as an argument 'c', occurs in provided string s, 
if we repeat that string 'n' times
*/
function repeatedString(s, n, c) {
    let newStr = "";
    let counter = 0;
    for (let i = 0; i < n; i++) {
        newStr += s.charAt(i % s.length);
        if (newStr[i] === c) {
            counter++;
        }
    }
    return "There are " + counter + " occurrences of |" + c + "| in the substring";
}
console.log(repeatedString("google", 200, "o"));