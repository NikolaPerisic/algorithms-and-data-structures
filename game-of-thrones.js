/*
Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of this conspiracy from Raven and plans 
to lock the single door through which the enemy can enter his kingdom.
But, to lock the door he needs a key that is an anagram of a palindrome. He starts to go through his box of strings, checking 
to see if they can be rearranged into a palindrome.
For example, given the string s = [aabbccdd], one way it can be arranged into a palindrome is abcddcba.

Input: string
Output: string YES - NO
Constraints: 1 < s < 10^5, ascii[a-z]
Complexity: O(N)
EC: 
*/

const gameOfThrones = s => {
    if (s.length === 1) return "Yes";
    let anagram = {};
    let fails = false;
    for (let i = 0; i < s.length; i++) {
        anagram[s[i]] ? anagram[s[i]]++ : (anagram[s[i]] = 1);
    }
    let flag = s.length % 2 === 0 ? 0 : 1;
    Object.values(anagram).map(val => {
        if (fails) return null;
        if (val % 2 !== 0) {
            flag--;
        }
        if (flag < 0) {
            fails = true;
        }
    });
    return fails ? "NO" : "YES";
};
console.log(gameOfThrones("cdcdcdcdeeeef"));
