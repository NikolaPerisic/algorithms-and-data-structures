/*
You have a string of lowercase English alphabetic letters. You can perform 
two types of operations on the string:
1. Append a lowercase English alphabetic letter to the end of the string.
2. Delete the last character in the string. Performing this operation on 
an empty string results in an empty string.
Given an integer, k, and two strings, s and t, determine whether or not you can 
convert s to t by performing exactly k of the above operations on s. If it's 
possible, print Yes. Otherwise, print No.
*/
function appendAndDelete(s, t, k) {
    if ((t.endsWith(s) || s.endsWith(t)) || (s.length + t.length <= k)) {
        return "Yes";
    }
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t[i]) {
            counter++;
        } else {
            break;
        }
    }
    if (((s.length - counter) + (t.length - counter)) === k) {
        return "Yes";
    } else {
        return "No";
    }
}

console.log(appendAndDelete("hackerrank", "hackerhappy", 9));