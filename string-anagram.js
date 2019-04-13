/*
* Two words are anagrams of one another if their letters can be rearranged to form the other word.

* In this challenge, you will be given a string. You must split it into two contiguous substrings, then determine the 
minimum number of characters to change to make the two substrings into anagrams of one another.

* For example, given the string 'abccde', you would break it into two parts: 'abc' and 'cde'. Note that all letters have 
been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in the first substring 
to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.
* Return the minimum number of characters to change to make the words anagrams, or -1 if it's not possible.

Input: string
Output: string YES - NO
Constraints: 1 < s < 10^4, ascii[a-z]
Complexity: O(N)
EC: 
*/

function anagram(s) {
    if (s.length % 2 !== 0) return -1;
    const index = s.length / 2;
    const dict = {};
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < index) {
            if (dict.hasOwnProperty(s[i])) {
                dict[s[i]]++;
            } else {
                dict[s[i]] = 1;
            }
        } else {
            if (dict.hasOwnProperty(s[i])) {
                if (dict[s[i]] > 0) {
                    dict[s[i]]--;
                } else {
                    delete dict[s[i]];
                    counter++;
                }
            } else {
                counter++;
            }
        }
    }
    return counter;
}
console.log(anagram("xaxbbbxx"));
