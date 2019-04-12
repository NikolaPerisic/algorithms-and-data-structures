/*
Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each 
other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain 
the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of 
character deletions required to make the two strings anagrams. Can you help her find this number?
Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions 
required to make a and b anagrams. Any characters can be deleted from either of the strings.
Return an integer representing the minimum total characters that must be deleted to make the strings anagrams.

EXAMPLE
Input: 'showman', 'woman'
Output: 2

Input: string1, string2
Output: Int
Constraints: Optimize
Complexity: O(N)
*/

function makeAnagram(a, b) {
    let noDel = 0;
    let result = a.length + b.length;
    let myMap = new Map();
    for (let i = 0; i < a.length; i++) {
        if (myMap.has(a[i])) {
            let val = myMap.get(a[i]);
            val++;
            myMap.set(a[i], val);
        } else {
            myMap.set(a[i], 1);
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (myMap.has(b[j])) {
            let val = myMap.get(b[j]);
            if (val > 0) {
                val--;
                myMap.set(b[j], val);
                noDel++;
            }
        }
    }
    return result - noDel * 2;
}
console.log(
    makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
