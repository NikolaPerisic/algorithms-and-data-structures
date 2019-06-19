/*
Given a string of lowercase letters in the range ascii[a-z], determine a character that can be removed to make the string 
a palindrome. There may be more than one solution, but any will do. For example, if your string is "bcbc", you can either 
remove 'b' at index 0 or 'c' at index 3. If the word is already a palindrome or there is no solution, return -1. Otherwise, 
return the index of a character to remove.

EXAMPLE
Input: aaab
Output: 3

Input: string
Output: number
Constraints: ascii[a-z], 1 <= s <= 10^5 + 5
Complexity: O(n)
*/

const palindromeIndex = s => {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (s[i + 1] === s[j] && s[i + 2] === s[j - 1]) {
                return i;
            }
            if (s[i] === s[j - 1] && s[i + 1] === s[j - 2]) {
                return j;
            }
        }
        i++;
        j--;
    }
    return -1;
};
console.log(
    palindromeIndex("hgygsvlfcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcwflvsgygh")
);
