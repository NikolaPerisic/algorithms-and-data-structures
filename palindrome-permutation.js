/*
 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome 
 is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome 
 does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)

Input: string
Output: boolean
Constraints:
O: O(N + N/2) - Worst case (char count 2 for all)
*/
const palindromePerm = str => {
    let myMap = new Map();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            let key = str[i].toLowerCase();
            if (!myMap.has(key)) {
                myMap.set(key, 1);
            } else {
                let newValue = myMap.get(key);
                newValue++;
                myMap.set(key, newValue);
            }
        }
    }
    let flag = 0;
    for (let [key, val] of myMap) {
        if (val % 2 !== 0) flag++;
        if (flag > 1) return false;
    }
    return true;
};

console.log(palindromePerm("tactcoapapa"));
